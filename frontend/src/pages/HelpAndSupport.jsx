import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const HelpAndSupport = () => {

    const { profile, UrlBackend } = useContext(AppContext)
    const id = profile?._id

    const [submit, setSubmit] = useState()

    const getSubmit = async () => {
        try {
            const { data } = await axios.get(UrlBackend + '/api/get-submit', id)

            if (data.success) {
                setSubmit(data.data)
            }
        } catch (e) {
            toast.error(e.response.data.message)
        }
    }

    const truncateText = (text, wordLimit) => {
        if (!text) return '';
        const words = text.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
    };

    useEffect(() => {
        getSubmit()
    }, [profile])

    console.log(submit)

    return (
        <div className='mt-10 flex flex-col items-center mb-28'>
            <p className='text-2xl font-semibold'>Your Submition Status</p>

            {submit?.map((item, index) => (
                <div key={index} className='border border-orange-500 rounded-xl w-[80%] mt-10 p-2'>
                    <p>Type Of Question: {item?.type}</p>
                    <p>Question: {truncateText(item?.text, 10)}</p>
                    {item?.image ? <img src={item?.image} className='w-16' alt="" /> : ''}
                    <p>Status: <span className='text-gray-800 font-medium'>Pending</span> </p>
                </div>
            ))}

            <Link to='/general-inquery' className='mt-8 px-2 py-2 bg-orange-500 rounded-lg text-white'>
                Do You Want To Ask Any Question ?
            </Link>
        </div >
    )
}

export default HelpAndSupport