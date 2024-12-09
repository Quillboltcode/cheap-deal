import axios from 'axios';
import React, { useContext, useState } from 'react';
import { MdOutlineUploadFile } from "react-icons/md";
import { toast } from 'react-toastify';
import { AppContext } from '../context/AppContext';
import { packages } from '../assets/assets';

const SpecialInquery = () => {
    const { UrlBackend, packageId, profile } = useContext(AppContext)

    const id = profile?._id
    const selectedPackage = packages.find((pkg) => pkg.id.toString() === packageId);

    const [questionType, setQuestionType] = useState(selectedPackage?.name);
    const [questionText, setQuestionText] = useState("");
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!questionType) {
            toast.error("Please select a question type.");
            return;
        }
        if (!questionText.trim()) {
            toast.error("Please enter your question.");
            return;
        }

        const formData = new FormData();
        formData.append("id", id);
        formData.append("type", questionType);
        formData.append("text", questionText);
        if (image) formData.append("image", image);

        try {
            const { data } = await axios.post(UrlBackend + '/api/add-submit', formData)

            if (data.success) {
                toast.success("Question submitted successfully!");
                // Reset form
                setQuestionType("");
                setQuestionText("");
                setImage(null);
            }
        } catch (e) {
            toast.error(e.response.data.message)
        }
    };

    return (
        <div className="mt-5 text-center">
            {/* Question Type Dropdown */}
            <div className="flex justify-center ml-20 items-center border border-gray-300 w-[60%] mx-5 py-2 rounded-md shadow-sm bg-white">
                <p className="text-gray-700 font-medium">Question On This Package</p>
            </div>

            <div className='flex flex-col items-center gap-2 mt-10'>
                <img src={selectedPackage?.image} className='w-28' alt="" />
                <p>{selectedPackage?.name}</p>
            </div>

            {/* Question Text Area */}
            <p className="mt-5 text-left ml-8">Your Question</p>
            <textarea
                className="border border-gray-400 rounded-md mt-2 p-2 w-[90%] h-36"
                placeholder="Please enter your question here"
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
            ></textarea>

            {/* Image Upload */}
            <div className="flex flex-col items-center mt-10">
                <p>Upload Your Image</p>
                <input
                    type="file"
                    id="image"
                    name="image"
                    hidden
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                />
                {image ? (
                    <img
                        className="my-7 rounded-sm max-w-28"
                        src={URL.createObjectURL(image)}
                        alt="Preview"
                    />
                ) : (
                    <label htmlFor="image" className="cursor-pointer">
                        <MdOutlineUploadFile className="text-7xl text-gray-500" />
                    </label>
                )}
            </div>

            {/* Submit Button */}
            <button
                className="mt-10 py-3.5 px-20 bg-orange-500 rounded-full text-white"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    );
}

export default SpecialInquery