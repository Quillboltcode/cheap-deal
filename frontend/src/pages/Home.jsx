/* eslint-disable react/jsx-key */
import React, { useContext } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import banner from '../assets/banner.jpg'
import product_banner from '../assets/product_banner.jpg'
import { toast } from 'react-toastify';
import { AppContext } from '../context/AppContext';
import { packages } from '../assets/assets';
import { FaStar } from "react-icons/fa";
import { IoIosTabletPortrait } from "react-icons/io";
import { CiMobile3 } from "react-icons/ci";
import { HiDatabase } from "react-icons/hi";
import { AiOutlineFire } from "react-icons/ai";
import { CiRouter } from "react-icons/ci";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'

const Home = () => {

    const { profile } = useContext(AppContext)

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false
    };


    return (
        <div className='flex flex-col px-3 pt-3 pb-24'>
            <div className='flex gap-3.5 items-center'>
                <div className='flex justify-center '><img src={logo} className='w-52 rounded-xl' alt="" /></div>
                <p className='text-left text-xl font-medium text-gray-700 mb-5'>Welcome <span className='text-black'>{profile?.name}</span> to Cheap Deal</p>
            </div>

            <div className='flex items-center justify-center relative'>
                <input
                    type="text"
                    className='px-3.5 mt-3 w-[100%] h-12 bg-gray-300 rounded-2xl '
                    placeholder='Search'
                />
                <CiSearch className='absolute top-6 right-10 text-xl' />
            </div>

            <div className='relative'>
                <img src={banner} alt="" className='mt-3 rounded-2xl' />
                <img src={product_banner} className='h-auto w-32 absolute top-20 right-5 rounded-lg' alt="" />
                <p className='text-white text-xl font-semibold absolute top-20 left-5 font-mono'>Sale 15% <br /> All Packages <br /> or Deal </p>
            </div>

            < div className='flex flex-col'>
                <p className='mt-10 text-2xl '>Top Sale Packages</p>
                <Slider {...settings}>
                    {packages.slice(0, 5).map((item, index) => (
                        <div key={index} className='flex flex-col mt-5 border-2 border-gray-300 w-[430px] h-[430px] rounded-lg relative'>
                            <div className='mt-8 flex flex-col gap-2.5 items-center justify-center'>
                                <p className='text-lg text-gray-800 font-medium'>{item.name}</p>
                                <img src={item.image} className='w-36' alt="" />
                                <Link to={`/detail-package/${item.id}`} onClick={() => scrollTo(0, 0)} className='text-center text-sm w-28 p-1 bg-red-500 rounded-xl text-white'>View Details</Link>
                                <p>Price: <span className='text-gray-700 font-bold'>${item.type === 'device + data' ? item.new_price + 99 : item.new_price} </span><span className='text-gray-500 line-through'>{item.type === 'device + data' ? item.old_price + 99 : item.old_price}</span></p>
                                <p className='text-sm px-5'>{item.des}</p>
                                <div className='flex items-center gap-1.5'>
                                    <FaStar className='text-green-500' />
                                    <p className='text-gray-800'>Customize Your Own Package </p>
                                </div>
                            </div>

                            <div className='flex items-center gap-2 absolute top-0 bg-red-500 text-white px-2 py-1 rounded-lg'>
                                <p>HOT</p>
                                <AiOutlineFire className='text-xl' />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className='flex flex-col'>
                <p className='mt-10 text-2xl '>Packages Types</p>
                <div className='flex items-center justify-between px-1.5 mt-5 w-[100%] h-24 rounded-lg border border-gray-400'>
                    <Link to={`/packages/mobile-only`} className='flex items-center flex-col'>
                        <CiMobile3 className='text-5xl text-gray-800' />
                        <p className='text-sm font-medium text-gray-700'>Mobile Only</p>
                    </Link>
                    <Link to={`/packages/tablet-only`} className='flex items-center flex-col'>
                        <IoIosTabletPortrait className='text-5xl text-gray-800' />
                        <p className='text-sm font-medium text-gray-700'>Tablet Only</p>
                    </Link>
                    <Link to={`/packages/broadband-only`} className='flex items-center flex-col'>
                        <HiDatabase className='text-5xl text-gray-800' />
                        <p className='text-sm font-medium text-gray-700'>Broadband Only</p>
                    </Link>
                    <Link to={`/packages/router-only`}  className='flex items-center flex-col'>
                        <CiRouter className='text-5xl text-gray-800' />
                        <p className='text-sm font-medium text-gray-700'>Router Only</p>
                    </Link> 
                </div>
            </div>

            {profile?.group != "A" &&
                <div className='flex flex-col'>
                    <p className='mt-8 text-2xl '>Recommended Packages</p>
                    <Slider {...settings}>
                        {packages.slice(5, 10).map((item, index) => (
                            <div key={index} className=' flex flex-col mt-5 border-2 border-gray-300 size-96 rounded-lg'>
                                <div className='mt-3 flex flex-col gap-2.5 items-center justify-center'>
                                    <p className='text-lg text-gray-800 font-medium'>{item.name}</p>
                                    <img src={item.image} className='w-36' alt="" />
                                    <Link to={`/detail-package/${item.id}`} onClick={() => scrollTo(0, 0)} className='text-center text-sm w-28 p-1 bg-red-500 rounded-xl text-white'>View Details</Link>
                                    <p>Price: <span className='text-gray-700 font-bold'>${item.type === 'device + data' ? item.new_price + 99 : item.new_price} </span><span className='text-gray-500 line-through'>{item.type === 'device + data' ? item.old_price + 99 : item.old_price}</span></p>
                                    <p className='text-sm px-5'>{item.des}</p>
                                    <div className='flex items-center gap-1.5'>
                                        <FaStar className='text-green-500' />
                                        <p className='text-gray-800'>Customize Your Own Package</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            }

            <div className='flex justify-center mt-10'>
                <button className='px-8 py-2 bg-gray-500 text-white rounded-full'>See More Packages</button>
            </div>

            < div className='flex flex-col'>
                <p className='mt-10 text-2xl '>Top Sale Deals</p>
                <Slider {...settings}>
                    {packages.slice(0, 5).map((item, index) => (
                        <div key={index} className='flex flex-col mt-5 border-2 border-gray-300 size-96 rounded-lg relative'>
                            <div className='flex flex-col gap-2.5 items-center justify-center'>
                                <p className='text-lg text-gray-800 font-medium'>{item.name}</p>
                                <img src={item.image} className='w-36' alt="" />
                                <Link to={`/detail-package/${item.id}`} onClick={() => scrollTo(0, 0)} className='text-center text-sm w-28 p-1 bg-red-500 rounded-xl text-white'>View Details</Link>
                                <p>Price: <span className='text-gray-700 font-bold'>${item.new_price} </span><span className='text-gray-500 line-through'>{item.old_price}</span></p>
                                <p className='text-sm px-5'>{item.des}</p>
                                <div className='flex items-center gap-1.5'>
                                    <FaStar className='text-green-500' />
                                    <p className='text-gray-800'>+1 year of Unlimited included</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-2 absolute top-0 bg-red-500 text-white px-2 py-1 rounded-lg'>
                                <p>HOT</p>
                                <AiOutlineFire className='text-xl' />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {profile?.group != "A" &&
                <div className='flex flex-col'>
                    <p className='mt-8 text-2xl '>Recommended Packages</p>
                    <Slider {...settings}>
                        {packages.slice(5, 10).map((item, index) => (
                            <div key={index} className='flex flex-col mt-5 border-2 border-gray-300 size-96 rounded-lg'>
                                <div className='flex flex-col gap-2.5 items-center justify-center'>
                                    <p className='text-lg text-gray-800 font-medium'>{item.name}</p>
                                    <img src={item.image} className='w-36' alt="" />
                                    <Link to={`/detail-package/${item.id}`} onClick={() => scrollTo(0, 0)} className='text-center text-sm w-28 p-1 bg-red-500 rounded-xl text-white'>View Details</Link>
                                    <p>Price: <span className='text-gray-700 font-bold'>${item.new_price} </span><span className='text-gray-500 line-through'>{item.old_price}</span></p>
                                    <p className='text-sm px-5'>{item.des}</p>
                                    <div className='flex items-center gap-1.5'>
                                        <FaStar className='text-green-500' />
                                        <p className='text-gray-800'>+1 year of Unlimited included</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            }

            <div className='flex justify-center mt-10'>
                <button className='px-8 py-2 bg-gray-500 text-white rounded-full'>See More Deals</button>
            </div>

        </div >
    )
}

export default Home
