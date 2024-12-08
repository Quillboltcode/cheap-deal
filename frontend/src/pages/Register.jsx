import React, { useContext, useState } from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineEllipsis } from "react-icons/ai";
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';

const Register = () => {

    const [isShow, setIsShow] = useState(false)

    const { UrlBackend } = useContext(AppContext)

    const navigate = useNavigate()

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const register = async (e) => {
        e.preventDefault()

        try {
            const { data } = await axios.post(UrlBackend + '/api/register', { email, name, password})

            if (data.success) {
                toast.success("Register Successfull")
                navigate('/login')
            }
        } catch (e) {
            toast.error(e.response.data.message)
        }
    }

    return (
        <div className='flex flex-col items-center justify-center px-3 py-10 '>
            <form onSubmit={register}>
                <p className='text-4xl font-bold text-center'>REGISTER</p>

                <div className='mt-6 text-3xl items-start relative'>
                    <p>Name</p>
                    <input
                        type="text"
                        className='w-[100%] border border-gray-300 mt-2 rounded-md h-14 pl-8 pr-2'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <MdOutlineDriveFileRenameOutline className='absolute text-lg bottom-4 left-1.5' />
                </div>

                {/* <div className='mt-6 text-3xl items-start relative'>
                    <p >Phone </p>
                    <input
                        type="number"
                        className='w-[100%] border border-gray-300 mt-2 rounded-md h-14 pl-8 pr-2'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <MdOutlineLocalPhone className='absolute text-lg bottom-4 left-1.5' />
                </div> */}

                <div className='mt-6 text-3xl items-start relative'>
                    <p >Email </p>
                    <input
                        type="text"
                        className='w-[100%] border border-gray-300 mt-2 rounded-md h-14 pl-8 pr-2'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <HiOutlineMail className='absolute text-lg bottom-4 left-1.5' />
                </div>

                <div className='mt-6 text-3xl items-start relative'>
                    <p >Password </p>
                    <input
                        type={`${isShow ? 'text' : 'password'}`}
                        className='w-[100%] border border-gray-300 mt-2 rounded-md h-14 pl-8 pr-12'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <RiLockPasswordLine className='absolute text-lg bottom-4 left-1.5' />
                    {
                        isShow ?
                            <FaRegEye className='absolute text-2xl bottom-3 right-3' onClick={() => setIsShow(false)} />
                            : <FaRegEyeSlash className='absolute text-2xl bottom-3 right-3' onClick={() => setIsShow(true)} />
                    }
                </div>

                {/* <div className='mt-6 text-3xl items-start relative'>
                    <p>Date of birth</p>
                    <input
                        type="date"
                        className='w-[100%] border border-gray-300 mt-2 rounded-md h-14 pl-8 pr-2'
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                    />
                    <CiCalendarDate className='absolute text-lg bottom-4 left-1.5' />
                </div>

                <div className='mt-6 text-3xl items-start relative'>
                    <p>Address</p>
                    <input
                        type="type"
                        className='w-[100%] border border-gray-300 mt-2 rounded-md h-14 pl-8 pr-2'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <CiLocationOn className='absolute text-lg bottom-4 left-1.5' />
                </div>

                <div className='mt-6 text-3xl items-start relative'>
                    <p>Gender</p>
                    <select className='w-[100%] border border-gray-300 mt-2 rounded-md h-14 pl-2 pr-2'>
                        <option value="male">male</option>
                        <option value="female">female</option>
                        <option value="other">other</option>
                    </select>
                </div> */}

                <div className='flex justify-center'>
                    <button className='mb-3 text-2xl mt-10 w-[70%] border border-gray-300 rounded-md h-14 bg-blue-400 hover:bg-blue-500'>Register</button>
                </div>
            </form>

            <p>You already have an account? <span className='text-blue-400 underline' onClick={() => navigate('/login')}>Log In here</span></p>
        </div>
    )
}

export default Register
