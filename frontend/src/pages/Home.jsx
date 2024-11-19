import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import banner from '../assets/banner.jpg'
import product_banner from '../assets/product_banner.jpg'
import { toast } from 'react-toastify';

const Home = () => {

    const fetchPackages = async () => {
        try {
            const {data} = await axios.post('http://localhost:8080/login')

        
            
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <div className='flex flex-col px-3 py-3'>
            <p>Hello John Doe</p>
            <div className='flex items-center justify-center relative'>
                <input
                    type="text"
                    className='pl-8 mt-3 w-[85%] h-12 bg-gray-300 rounded-2xl '
                    placeholder='Hinted search text'
                />
                <AiOutlineMenu className='absolute top-7 left-9' />
                <CiSearch className='absolute top-6 right-10 text-xl' />
            </div>

            <div className='relative'>
                <img src={banner} alt="" className='mt-3 rounded-2xl' />
                <img src={product_banner} className='h-auto w-32 absolute top-20 right-5 rounded-lg' alt="" />
                <p className='text-white text-xl font-semibold absolute top-20 left-5 font-mono'>Sale 15% <br /> All Packages <br /> or Deal </p>
            </div>

            <div className='flex flex-col'>
                <p className='mt-10 text-2xl '>Most Popular Packages</p>
                <div className='flex justify-between'>
                    <div className='mt-5 border size-44 rounded-lg'>

                    </div>

                    <div className='mt-5 border size-44 rounded-lg'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
