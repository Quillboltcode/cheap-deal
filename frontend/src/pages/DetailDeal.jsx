import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { deals } from '../assets/assets'
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import logo from "../assets/logo.png"
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';

const DetailDeal = () => {

    const { addToCart, priceData, setDealId } = useContext(AppContext)

    const { id } = useParams()
    const selectedPackage = deals.find((pkg) => pkg.id.toString() === id);

    const navigate = useNavigate()

    const notify = () => toast.success("Added Successfuly");
    return (
        <div className='flex flex-col px-3 pt-3 pb-24'>
            <div className='flex mb-1'>
                <FaArrowLeftLong onClick={() => navigate(-1)} />
            </div>

            <div className='flex items-center text-sm'>
                <p className='underline'>Home</p>
                <IoIosArrowForward />
                <p className='underline'>Packages</p>
                <IoIosArrowForward />
                <p className='underline'>{selectedPackage.name}</p>
            </div>
            <div className='flex flex-col gap-2 items-center justify-center mt-5'>
                <p className='text-3xl font-bold text-gray-800'>{selectedPackage.name}</p>
                <div className='flex gap-2 items-center'>
                    <img src={selectedPackage.image} className='w-32' alt="" />
                    <p className='text-5xl font-medium'>+</p>
                    <img src={selectedPackage.image1} className='w-32' alt="" />
                </div>
                <p className='text-2xl'>Price: <span className='text-gray-700 font-bold'>${selectedPackage.new_price} </span><span className='text-gray-500 line-through'>{selectedPackage.old_price}</span></p>
                <p className='text-xl px-5'>{selectedPackage.des}</p>
            </div>
            <p className='mt-7'><span className='text-xl text-green-500 font-medium'>Available  </span> - <span onClick={() => { navigate('/special-inquery/deal'), setDealId(id) }} className='text-blue-500 text-base underline'> Do you have any question ?</span></p>

            <hr className='mt-5 bg-gray-300 h-0.5' />

            <div className='mt-5'>
                <p>Price: ${selectedPackage.new_price}</p>
                {selectedPackage.type === "device + data" ? <p>Data: ${priceData}</p> : ''}
                <p>Fees: $5</p>
                <p>Ship: <span className='line-through text-gray-500'>$0</span></p>
                <hr className='mt-1.5 w-[60%] h-0.5 bg-gray-500' />
                <p>
                    Subtotal: ${Math.round(selectedPackage.new_price + (selectedPackage.type === "device + data" ? priceData : 0) + 5)} or
                    ${(Math.round((selectedPackage.new_price + (selectedPackage.type === "device + data" ? priceData : 0) + 5) / 12 * 100) / 100).toFixed(2)}/month
                </p>
            </div>

            <button onClick={() => { addToCart(selectedPackage.id), notify() }} className='mt-8 w-full py-3.5 bg-orange-600 rounded-full text-white text-2xl'>Add To Cart</button>
        </div >
    )
}

export default DetailDeal