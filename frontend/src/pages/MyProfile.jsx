import React, { useContext, useEffect, useState } from 'react'
import { MdOutlineUploadFile } from "react-icons/md";
import { toast } from 'react-toastify';
import { RiMessage2Line } from "react-icons/ri";
import { MdOutlineRequestPage } from "react-icons/md";
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

const MyProfile = () => {

    const { profile, setProfile, UrlBackend } = useContext(AppContext)

    const [image, setImage] = useState(false)
    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [address, setAddress] = useState()
    const [gender, setGender] = useState()
    const [dob, setDob] = useState()

    const [isEdit, setIsEdit] = useState(false)

    const editProfile = async () => {
        if (!name) {
            toast.error('Name is required.')
            return
        }

        const formData = new FormData()
        if (image) formData.append('image', image)
        formData.append('id', profile?._id)
        formData.append('name', name)
        formData.append('phone', phone)
        formData.append('address', address)
        formData.append('gender', gender)
        formData.append('dob', dob)

        try {
            const { data } = await axios.put(UrlBackend + '/api/edit-profile', formData,)

            if (data.success) {
                toast.success("Update Profile Successfully")
                setProfile(data.user)
            } else {
                toast.error('Something Wrong')
            }

        } catch (e) {
            toast.error(e.response.data.message)
        }

    }

    useEffect(() => {
        setName(profile?.name)
        setPhone(profile?.phone)
        setAddress(profile?.address)
        setGender(profile?.gender)
        setDob(profile?.dob)
    }, [profile])

    return (
        <div className='flex flex-col mt-3 px-3'>
            <div className='border-b pb-3 border-gray-400 w-[80%]'>
                {
                    isEdit ?
                        <div className='relative'>
                            <input
                                type="file"
                                id='image'
                                accept="image/*"
                                hidden onChange={(e) => setImage(e.target.files[0])}
                            />
                            <label htmlFor="image" className='cursor-pointer'>
                                <img className='my-7 rounded-full max-w-28' src={image ? URL.createObjectURL(image) : profile?.image} alt="" />
                                <MdOutlineUploadFile className='text-5xl absolute top-8 left-8 text-gray-400 ' />
                            </label>
                        </div>
                        : <img src={profile?.image} alt="" className='my-7 rounded-full max-w-28' />
                }
                {isEdit ?
                    <input className='text-2xl font-medium border border-gray-400 rounded-md' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    : <p className='text-2xl font-medium'>{profile?.name}</p>
                }

            </div>
            <div className='flex flex-col gap-1.5 mt-3.5 w-[100%]'>
                <p className='underline text-gray-500'>CONTACT INFORMATION</p>
                <div className='grid grid-cols-[1fr_3fr] gap-y-3'>
                    <p>Email: </p>
                    <p >{profile?.email}</p>
                    <p>Phone: </p>
                    {isEdit ?
                        <input type="number"
                            className='border border-gray-400 rounded-md'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        : <p>{profile?.phone}</p>
                    }
                    <p>Address:</p>
                    {isEdit ?
                        <input type="text"
                            className='border border-gray-400 rounded-md'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        : <p>{profile?.address}</p>
                    }

                </div>
            </div>

            <div className='flex flex-col gap-1.5 mt-3.5 w-[100%]'>
                <p className='underline text-gray-500'>BASIC INFORMATION</p>
                <div className='grid grid-cols-[1fr_3fr] gap-y-2'>
                    <p>Gender: </p>
                    {isEdit ?
                        <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <option value="" disabled>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        : <p>{profile?.gender}</p>
                    }

                    <p>Birthday: </p>
                    {isEdit ?
                        <input
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            type="date"
                        />
                        : <p> {profile?.dob}</p>
                    }

                </div>
            </div>

            {isEdit ?
                <button className='flex justify-center mt-10 bg-orange-500 text-white rounded-full py-2.5 max-w-36 ' onClick={() => { setIsEdit(false), editProfile() }}>Save Information</button>
                : <button className='flex justify-center mt-10 bg-orange-500 text-white  rounded-full py-2.5 max-w-20 ' onClick={() => setIsEdit(true)}>Edit</button>
            }

            <Link to='/help-and-support' className='mt-8 flex gap-3 items-center justify-center bg-orange-500 rounded-full  w-[50%] py-2 text-white  '>
                <p className='text-lg'>History</p>
                <MdOutlineRequestPage className='text-2xl' />
            </Link>

            <Link to='/help-and-support' className='mt-8 flex gap-3 items-center justify-center bg-orange-500 rounded-full  w-[50%] py-2 text-white  '>
                <p className='text-lg'>Help & Support</p>
                <RiMessage2Line className='text-2xl' />
            </Link>

            <Link to='/login' className='mt-8 flex gap-3 items-center justify-center bg-red-500 rounded-full  w-[50%] py-2 text-white  '>
                <p className='text-lg'>Logout</p>
                <RiMessage2Line className='text-2xl' />
            </Link>
        </div>
    )
}

export default MyProfile