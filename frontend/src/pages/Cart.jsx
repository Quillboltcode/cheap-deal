import React, { useContext } from 'react'
import { toast } from 'react-toastify';
import { packages } from '../assets/assets';
import { TiDeleteOutline } from "react-icons/ti";
import { AppContext } from '../context/AppContext';
import { MdDeleteOutline } from "react-icons/md";

const Cart = () => {

    const { cartItems, getTotalCartAmount, removeFromCart } = useContext(AppContext)
    const notify = () => toast.success("Deleted Successfuly");

    console.log(cartItems)

    return (
        <div className="mt-8 mx-3 mb-28">
            <p className="text-[35px] mb-7 font-bold">SHOPPING CART</p>
            <div>
                {packages.map((item, index) => {
                    if (cartItems?.[item.id] > 0) {
                        return (
                            <div key={index} className='flex flex-col gap-3'>
                                <p className='text-gray-800 font-semibold'>Prodcuts:</p>
                                <img src={item?.image} className='w-28' alt="" />
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
                                    <p>{cartItems[item.id]}</p>
                                    <MdDeleteOutline className='ml-20 text-xl' onClick={() => { removeFromCart(item.id), notify() }} />
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