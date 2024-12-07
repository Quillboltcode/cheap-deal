import React, { useState } from 'react'
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

const Register = () => {

    const [isShow, setIsShow] = useState(false)

    const navigate = useNavigate()

    return (
        <div className='flex flex-col items-center justify-center px-3 py-10 '>
            <form >
                <p className='text-4xl font-bold text-center'>REGISTER</p>

                <div className='mt-6 text-3xl items-start relative'>
                    <p>Name</p>
                    <input type="text" className='w-[100%] border border-gray-300 mt-2 rounded-md h-14 pl-8 pr-2' />
                    <MdOutlineDriveFileRenameOutline className='absolute text-lg bottom-4 left-1.5' />
                </div>

                <div className='mt-6 text-3xl items-start relative'>
                    <p>Date of birth</p>
                    <input type="date" className='w-[100%] border border-gray-300 mt-2 rounded-md h-14 pl-8 pr-2' />
                    <CiCalendarDate className='absolute text-lg bottom-4 left-1.5' />
                </div>

                <div className='mt-6 text-3xl items-start relative'>
                    <p>Address</p>
                    <input type="type" className='w-[100%] border border-gray-300 mt-2 rounded-md h-14 pl-8 pr-2' />
                    <CiLocationOn className='absolute text-lg bottom-4 left-1.5' />
                </div>

                <div className='mt-6 text-3xl items-start relative'>
                    <p>Gender</p>
                    <input type="type" className='w-[100%] border border-gray-300 mt-2 rounded-md h-14 pl-8 pr-2' />
                    <AiOutlineEllipsis className='absolute text-lg bottom-4 left-1.5' />
                </div>

                <div className='mt-6 text-3xl items-start relative'>
                    <p >Phone</p>
                    <input type="number" className='w-[100%] border border-gray-300 mt-2 rounded-md h-14 pl-8 pr-2' />
                    <MdOutlineLocalPhone className='absolute text-lg bottom-4 left-1.5' />
                </div>

                <div className='mt-6 text-3xl items-start relative'>
                    <p >Email</p>
                    <input type="text" className='w-[100%] border border-gray-300 mt-2 rounded-md h-14 pl-8 pr-2' />
                    <HiOutlineMail className='absolute text-lg bottom-4 left-1.5' />
                </div>

                <div className='mt-6 text-3xl items-start relative'>
                    <p >Password</p>
                    <input type={`${isShow ? 'text' : 'password'}`} className='w-[100%] border border-gray-300 mt-2 rounded-md h-14 pl-8 pr-12' />
                    <RiLockPasswordLine className='absolute text-lg bottom-4 left-1.5' />
                    {
                        isShow ?
                            <FaRegEye className='absolute text-2xl bottom-3 right-12' onClick={() => setIsShow(false)} />
                            : <FaRegEyeSlash className='absolute text-2xl bottom-3 right-12' onClick={() => setIsShow(true)} />
                    }
                </div>

                <div className='flex justify-center'>
                    <button className='mb-3 text-2xl mt-10 w-[70%] border border-gray-300 rounded-md h-14 bg-blue-400 hover:bg-blue-500'>Register</button>
                </div>
            </form>

            <p>You already have an account? <span className='text-blue-400 underline' onClick={() => navigate('/login')}>Log In here</span></p>
        </div>
    )
}

export default Register
