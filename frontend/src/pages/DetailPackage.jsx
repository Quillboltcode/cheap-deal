import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { packages } from '../assets/assets'
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import logo from "../assets/logo.png"

const DetailPackage = () => {

    const { id } = useParams()
    const selectedPackage = packages.find((pkg) => pkg.id.toString() === id);

    const navigate = useNavigate()

    const [plan, setPlan] = useState(1)

    const [indexData, setIndexData] = useState(1)
    const [priceData, setPriceData] = useState(99)

    return (
        <div className='flex flex-col px-3 pt-3 pb-24'>
            <div className='flex mb-1'>
                <FaArrowLeftLong onClick={() => navigate(-1)} />
            </div>

            <div className='flex items-center gap-0.5'>
                <p className='underline'>Home</p>
                <IoIosArrowForward />
                <p className='underline'>Packages</p>
                <IoIosArrowForward />
                <p className='underline'>{selectedPackage.name}</p>
            </div>
            <div className='flex flex-col gap-2 items-center justify-center mt-5'>
                <p className='text-3xl font-bold text-gray-800'>{selectedPackage.name}</p>
                <img src={selectedPackage.image} alt="" />
                <p className='text-2xl'>Price: <span className='text-gray-700 font-bold'>${selectedPackage.new_price} </span><span className='text-gray-500 line-through'>{selectedPackage.old_price}</span></p>
                <p className='text-xl px-5'>{selectedPackage.des}</p>
            </div>
            <p className='mt-7'><span className='text-xl text-green-500 font-medium'>Available  </span> - <span onClick={() => navigate('/special-inquery')} className='text-blue-500 text-base underline'> Do you have any question ?</span></p>

            <hr className='mt-5 bg-gray-300 h-0.5' />

            <div className='mt-5 flex flex-col gap-2'>
                <p className='text-gray-800 text-xl font-medium'>Pick Your Data Amount</p>
                <div className='flex gap-2'>
                    <p>Get a year of Unlimited for $21/mo</p>
                    <div className='px-2 bg-green-400 rounded-full text-white'>?</div>
                </div>
                <p>5G • 4G LTE Plan:  Unlimited/MO for 12 months  (Includes a year of Unlimited for $21/mo)</p>

                <div className="flex gap-8 mt-5">
                    {/* One Year Plan */}
                    <div className="flex flex-col items-center justify-center">
                        <input
                            type="radio"
                            id="oneYearPlan"
                            name="plan"
                            value="oneYear"
                            checked={plan === 1}
                            onChange={() => setPlan(1)}
                        />
                        <label htmlFor="oneYearPlan">One Year Plan</label>
                    </div>

                    {/* 6 Month Plan */}
                    <div className="flex flex-col items-center justify-center">
                        <input
                            type="radio"
                            id="sixMonthPlan"
                            name="plan"
                            value="sixMonth"
                            checked={plan === 2}
                            onChange={() => setPlan(2)}
                        />
                        <label htmlFor="sixMonthPlan">6 Month Plan</label>
                    </div>
                </div>

                {plan != 1 ?
                    <div>
                        <p className='mt-5 text-2xl font-medium'>6 Month Plan</p>
                        <div className='flex flex-wrap gap-3.5 mt-2'>
                            <div
                                className={`flex flex-col justify-center items-center w-48 h-24 border border-gray-500 rounded-lg text-2xl font-medium text-gray-800 ${indexData === 5 ? 'border-green-700 border-2' : ''}`}
                                onClick={() => {
                                    setIndexData(5);
                                    setPriceData(49);
                                }}
                            >
                                <p>5Gb/ Month</p>
                                <p>$49</p>
                            </div>

                            <div
                                className={`flex flex-col justify-center items-center w-48 h-24 border border-gray-500 rounded-lg text-2xl font-medium text-gray-800 ${indexData === 6 ? 'border-green-700 border-2' : ''}`}
                                onClick={() => {
                                    setIndexData(6);
                                    setPriceData(99);
                                }}
                            >
                                <p>15Gb/ Month</p>
                                <p>$99 <span className='line-through text-gray-500 font-normal'>$240</span></p>
                            </div>

                            <div
                                className={`flex flex-col justify-center items-center w-48 h-24 border border-gray-500 rounded-lg text-2xl font-medium text-gray-800 ${indexData === 7 ? 'border-green-700 border-2' : ''}`}
                                onClick={() => {
                                    setIndexData(7);
                                    setPriceData(120);
                                }}
                            >
                                <p>20Gb/ Month</p>
                                <p>$120 <span className='line-through text-gray-500 font-normal'>$280</span></p>
                            </div>

                            <div
                                className={`flex flex-col justify-center items-center w-48 h-24 border border-gray-500 rounded-lg text-2xl font-medium text-gray-800 ${indexData === 8 ? 'border-green-700 border-2' : ''}`}
                                onClick={() => {
                                    setIndexData(8);
                                    setPriceData(199);
                                }}
                            >
                                <p>Unlimited</p>
                                <p>$199 <span className='line-through text-gray-500 font-normal'>$350</span></p>
                            </div>
                        </div>
                    </div>
                    : <div>
                        <p className='mt-5 text-2xl font-medium'>One Year Plan</p>
                        <div className='flex flex-wrap gap-3.5 mt-2'>
                            <div
                                className={`flex flex-col justify-center items-center w-48 h-24 border border-gray-500 rounded-lg text-2xl font-medium text-gray-800 ${indexData === 1 ? 'border-green-700 border-2' : ''}`}
                                onClick={() => {
                                    setIndexData(1);
                                    setPriceData(99);
                                }}
                            >
                                <p>5Gb/ Month</p>
                                <p>$99</p>
                            </div>

                            <div
                                className={`flex flex-col justify-center items-center w-48 h-24 border border-gray-500 rounded-lg text-2xl font-medium text-gray-800 ${indexData === 2 ? 'border-green-700 border-2' : ''}`}
                                onClick={() => {
                                    setIndexData(2);
                                    setPriceData(180);
                                }}
                            >
                                <p>15Gb/ Month</p>
                                <p>$180 <span className='line-through text-gray-500 font-normal'>$240</span></p>
                            </div>

                            <div
                                className={`flex flex-col justify-center items-center w-48 h-24 border border-gray-500 rounded-lg text-2xl font-medium text-gray-800 ${indexData === 3 ? 'border-green-700 border-2' : ''}`}
                                onClick={() => {
                                    setIndexData(3);
                                    setPriceData(200);
                                }}
                            >
                                <p>20Gb/ Month</p>
                                <p>$200 <span className='line-through text-gray-500 font-normal'>$280</span></p>
                            </div>

                            <div
                                className={`flex flex-col justify-center items-center w-48 h-24 border border-gray-500 rounded-lg text-2xl font-medium text-gray-800 ${indexData === 4 ? 'border-green-700 border-2' : ''}`}
                                onClick={() => {
                                    setIndexData(4);
                                    setPriceData(250);
                                }}
                            >
                                <p>Unlimited</p>
                                <p>$250 <span className='line-through text-gray-500 font-normal'>$350</span></p>
                            </div>
                        </div>
                    </div>}
            </div>

            <div className='mt-5'>
                <p>Price: ${selectedPackage.new_price}</p>
                <p>Data: ${priceData}</p>
                <p>Fees: $5</p>
                <p>Ship: <span className='line-through text-gray-500'>$0</span></p>
                <hr className='mt-1.5 w-[60%] h-0.5 bg-gray-500' />
                <p>
                    Subtotal: ${Math.round(selectedPackage.new_price + priceData + 5)} or
                    ${(Math.round((selectedPackage.new_price + priceData + 5) / 12 * 100) / 100).toFixed(2)}/month
                </p>
            </div>

            <button className='mt-8 w-full py-3.5 bg-orange-600 rounded-full text-white text-2xl'>Add To Cart</button>
        </div >
    )
}

export default DetailPackage