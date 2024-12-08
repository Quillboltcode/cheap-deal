import React from 'react'
import { IoMdHome } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

const navigator = () => {
    return (
        <div className='flex justify-center fixed z-50 bottom-0 py-2 w-full bg-white'>
            <div className='flex items-center px-8 justify-between border border-gray-500 w-[90%] h-16 rounded-lg'>
                <Link className='flex justify-center items-center relative'>
                    <SlBasket className='text-4xl text-gray-700' />
                    <div className='absolute flex items-center justify-center top-0 -right-2 size-5 bg-red-500 rounded-full text-white'>0</div>
                </Link>
                <Link to={`/dashboard`} onClick={() => scrollTo(0, 0)} className='flex justify-center items-center border border-gray-400 rounded-full size-12'>
                    <IoMdHome className='text-4xl text-gray-700' />
                </Link>
                <Link className='flex justify-center items-center'>
                    <CgProfile className='text-4xl text-gray-700' />
                </Link>
            </div>
        </div>
    )
}

export default navigator
