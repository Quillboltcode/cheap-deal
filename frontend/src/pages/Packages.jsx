import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { packages } from '../assets/assets';
import { FaStar } from 'react-icons/fa';
import { FaFilter } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import Pagination from '../components/Pagination';

const Packages = () => {
    const { type } = useParams();

    // Determine which packages to display
    const pkType = type ? packages.filter((e) => e.type === type) : packages;

    const [fillter, setFillter] = useState(false)

    // Scroll to top helper
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(8)

    const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage
    const currentPosts = pkType.slice(firstPostIndex, lastPostIndex)

    return (
        <div className="mb-28">
            {/* Logo Section */}
            <div className="flex justify-center">
                <img src={logo} className="w-64 rounded-lg" alt="Logo" />
            </div>

            {/* Title Section */}
            <div className="mt-5 py-2 bg-[#A0FF70] text-white text-2xl font-medium">
                <p className="text-center">Packages</p>
            </div>

            <div className='flex flex-col items-center mr-5 gap-1 mt-1.5'>
                <FaFilter className='text-xl text-gray-700' onClick={() => setFillter(!fillter)} />
                <p className='text-sm'>Fillter</p>
            </div>

            <div>
                <div className={`absolute bg-gray-200 w-[100%] z-50 rounded-lg right-0 top-[310px] p-6  font-medium ${fillter ? "flex" : 'hidden'}`} >
                    <form className="flex flex-col gap-5 w-1/3">
                        <div className="flex gap-2">
                            <input type="radio" id="samsung" name="brand" />
                            <label htmlFor="samsung">Samsung</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="radio" id="iphone" name="brand" />
                            <label htmlFor="iphone">iPhone</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="radio" id="vivo" name="brand" />
                            <label htmlFor="vivo">Vivo</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="radio" id="asus" name="brand" />
                            <label htmlFor="asus">ASUS</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="radio" id="other" name="brand" />
                            <label htmlFor="other">Other</label>
                        </div>
                    </form>


                    <div className='w-2/3'>
                        <p>Price: </p>
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-between'>
                                <p>$50</p>
                                <p>$1500</p>
                            </div>
                            <div className='h-1 w-56 bg-gray-300 rounded-md'>
                                <div className='bg-red-500 w-20 h-1 rounded-md'></div>
                            </div>
                        </div>
                        <div className='flex justify-center py-1.5 w-[50%] rounded-xl items-center gap-2 mt-16 border border-gray-400'>
                            <p>Fillter</p>
                            <FaFilter className='text-gray-700' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Packages Section */}
            <div className="flex flex-col items-center">
                {currentPosts.length > 0 ? (
                    currentPosts.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col mt-2 border-2 border-gray-300 w-[350px] h-[457px] rounded-lg relative"
                        >
                            <div className="mt-3.5 flex flex-col gap-2.5 items-center justify-center">
                                {/* Package Name */}
                                <p className="text-center text-lg text-gray-800 font-medium">{item.name}</p>

                                {/* Package Image */}
                                <img src={item.image} className="w-36" alt={item.name} />

                                {/* View Details Link */}
                                <Link
                                    to={`/detail-package/${item.id}`}
                                    onClick={handleScrollToTop}
                                    className="text-center text-sm w-28 p-1 bg-red-500 rounded-xl text-white"
                                >
                                    View Details
                                </Link>

                                {/* Package Price */}
                                <p>
                                    Price:{' '}
                                    <span className="text-gray-700 font-bold">
                                        ${item.type === 'device + data' ? item.new_price + 99 : item.new_price}
                                    </span>{' '}
                                    <span className="text-gray-500 line-through">
                                        {item.type === 'device + data' ? item.old_price + 99 : item.old_price}
                                    </span>
                                </p>

                                {/* Package Description */}
                                <p className="text-sm px-5">{item.des}</p>

                                {/* Customize Option */}
                                <div className="flex items-center gap-1.5">
                                    <FaStar className="text-green-500" />
                                    <p className="text-gray-800">Customize Your Own Package</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-600 mt-10">No packages available.</p>
                )}
            </div>
            <Pagination
                totalPosts={pkType.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage}
                setPostPerPage={setPostPerPage} currentPage={currentPage}
            />
        </div>
    );
};

export default Packages;
