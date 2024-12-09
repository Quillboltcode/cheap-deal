import React, { useContext } from 'react'
import { toast } from 'react-toastify';
import { packagesAndDeal } from '../assets/assets';
import { FaMinus } from "react-icons/fa6";
import { AppContext } from '../context/AppContext';
import { FaPlus } from "react-icons/fa";

const Cart = () => {

    const { cartItems, getTotalCartAmount, removeFromCart, addToCart } = useContext(AppContext)

    console.log(cartItems)

    return (
        <div className="mt-8 mx-3 mb-28">
            <p className="text-[35px] mb-7 font-bold">SHOPPING CART</p>
            <div>
                {packagesAndDeal.map((item, index) => {
                    if (cartItems?.[item.id] > 0) {
                        return (
                            <div key={index} className='flex flex-col gap-3'>
                                <p className='text-gray-800 font-semibold'>Prodcuts:</p>
                                <div className='flex gap-2 items-center'>
                                    <img src={item?.image} className='w-32' alt="" />
                                    {item?.image1 &&
                                        <div className='flex items-center'>
                                            <p className='text-5xl font-medium'>+</p>
                                            <img src={item?.image1} className='w-32' alt="" />
                                        </div>
                                    }
                                </div>
                                <div className='flex gap-2'>
                                    <p className='text-gray-800 font-semibold'>Tittle: </p>
                                    <p>{item?.name}</p>
                                </div>
                                <div className='flex gap-2'>
                                    <p className='text-gray-800 font-semibold'>Price Of Device:</p>
                                    <p>${item?.new_price}</p>
                                </div>
                                <div className='flex gap-2'>
                                    <p className='text-gray-800 font-semibold'>Price Of Data:</p>
                                    <p>${item?.new_price}</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <p className='text-gray-800 font-semibold'>Quantity:</p>
                                    <FaMinus className='ml-5 text-xl' onClick={() => { removeFromCart(item.id), toast.success("Deleted Successfully") }} />
                                    <div className='mx-3 border border-gray-500 px-2 rounded-md'>
                                        <p>{cartItems[item.id]}</p>
                                    </div>
                                    <FaPlus className='text-xl' onClick={() => { addToCart(item.id), toast.success("Added Successfully") }} />

                                </div>
                                <div className='flex gap-2'>
                                    <p className='text-gray-800 font-semibold'>Fees:</p>
                                    <p>${cartItems[item.id] * 5}</p>

                                </div>
                                <div className='flex gap-2'>
                                    <p className='text-gray-800 font-semibold'>Total:</p>
                                    <p>${item.new_price * cartItems[item.id]}</p>
                                </div>
                                <hr className='border border-gray-300 my-2' />
                            </div>
                        )
                    }
                })}
            </div>

            <div className="mt-8">
                <p>If you have a promo code, Enter it here</p>
                <div className="flex border border-gray-300 w-80 h-10 mt-3">
                    <input type="text"
                        placeholder="Promo code"
                        className="focus:outline-none px-2 w-64" />
                </div>
            </div>
            <div className="flex mt-10">
                <div className="">
                    <h1 className="text-[28px] mb-3 font-semibold">Cart Totals</h1>
                    <div>
                        <div className="text-[17px]">
                            <p>Subtotal:</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="mt-3 text-[17px]">
                            <p>Shipping Fee:</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="mt-3 text-[17px]">
                            <h3>Total:</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button className="mt-5 text-[20px] font-semibold bg-red-600 w-96 h-16 text-white">PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </div>
    )
}

export default Cart