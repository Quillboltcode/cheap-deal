import React, { useState } from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa";
import gmail_icon from '../assets/gmail_icon.png'
import fb_icon from '../assets/facebook_icon.png'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios'

const login = () => {

    const [isShow, setIsShow] = useState(false)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const Login = async () => {
        try {
            const {data} = await axios.post('http://localhost:8080/login')

        
            
        } catch (error) {
            toast.error(error.message)
        }
    }

    const navigate = useNavigate()

    return (
        <div className='flex flex-col items-center justify-center px-3 py-10 '>
            <form >
                <p className='text-4xl font-bold text-center'>LOGIN</p>

                <div className='mt-6 text-3xl items-start relative'>
                    <p >Email</p>
                    <input
                        type="text"
                        className='w-[90%] border mt-2 rounded-md h-14 pl-8 pr-2' 
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        />
                    <HiOutlineMail className='absolute text-lg bottom-4 left-1.5' />
                </div>

                <div className='mt-6 text-3xl items-start relative'>
                    <p >Password</p>
                    <input 
                    type={`${isShow ? 'text' : 'password'}`} 
                    className='w-[90%] border mt-2 rounded-md h-14 pl-8 pr-12' 
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                    <RiLockPasswordLine className='absolute text-lg bottom-4 left-1.5' />
                    {
                        isShow ?
                            <FaRegEye className='absolute text-2xl bottom-3 right-12' onClick={() => setIsShow(false)} />
                            : <FaRegEyeSlash className='absolute text-2xl bottom-3 right-12' onClick={() => setIsShow(true)} />
                    }
                </div>

                <div className='flex justify-center'>
                    <button type='submit' className='mb-3 text-2xl mt-10 w-[70%] border rounded-md h-14 bg-blue-400 hover:bg-blue-500'>Login</button>
                </div>
            </form>

            <p>You do not have an account? <span className='text-blue-400 underline' onClick={() => navigate('/signup')}>Sign Up here</span></p>

            <div className='w-[70%] border rounded-md h-14 mt-8 bg-gray-200 relative'>
                <img src={gmail_icon} className='h-auto w-8 absolute bottom-3.5 left-2' alt="" />
                <p className='w-full h-full flex items-center justify-center'>Login with Gmail</p>
            </div>

            <div className='w-[70%] border rounded-md h-14 mt-8 bg-gray-200 relative'>
                <img src={fb_icon} className='h-auto w-11 absolute bottom-1 left-1.5' alt="" />
                <p className='w-full h-full flex items-center justify-center'>Login with Facebook</p>
            </div>

        </div>
    )
}

export default login
