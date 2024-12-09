import React, { useState } from 'react'
import { IoMdHome } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { TfiPackage } from "react-icons/tfi";
import { GoPackage } from "react-icons/go";

const navigator = () => {

    const [menu, setMenu] = useState('home')

    return (
        <div className='flex justify-center fixed z-50 bottom-0 py-4 w-full bg-white'>
            <div className='flex items-center px-3 justify-between border border-gray-500 w-[90%] h-16 rounded-lg'>
                <Link className={`flex flex-col justify-center items-center`}>
                    <GoPackage onClick={() => { scrollTo(0, 0), setMenu('packages') }}
                        className={`text-3xl text-gray-700 ${menu === 'packages' ? 'text-gray-950' : ''}`} />
                    <p className='text-sm'>Packages</p>
                </Link>
                <Link className='flex flex-col justify-center items-center'>
                    <TfiPackage onClick={() => { scrollTo(0, 0), setMenu('deals') }}
                        className={`text-3xl text-gray-700 ${menu === 'deals' ? 'text-gray-950' : ''}`} />
                    <p className='text-sm'>Deals</p>
                </Link>
                <Link to={`/dashboard`} onClick={() => { scrollTo(0, 0), setMenu('home') }} className='flex justify-center items-center border border-gray-400 rounded-full size-12'>
                    <IoMdHome className={`text-4xl text-gray-700 ${menu === 'home' ? 'text-gray-950' : ''}`} />
                </Link>
                <Link className='flex flex-col justify-center items-center relative'>
                    <SlBasket onClick={() => { scrollTo(0, 0), setMenu('cart') }} className={`text-3xl text-gray-700 ${menu === 'cart' ? 'text-gray-950' : ''}`} />
                    <p className='text-sm'>Cart</p>
                    <div className='absolute flex items-center justify-center top-0 -right-2 size-5 bg-red-500 rounded-full text-white'>0</div>
                </Link>
                <Link to='/profile' onClick={() => { scrollTo(0, 0), setMenu('profile') }} className='flex flex-col justify-center items-center'>
                    <CgProfile className={`text-3xl text-gray-700 ${menu === 'profile' ? 'text-gray-950' : ''}`} />
                    <p className='text-sm'>Profile</p>
                </Link>
            </div>
        </div>
    )
}

export default navigator
