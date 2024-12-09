import axios from 'axios';
import React, { useContext, useState } from 'react';
import { MdOutlineUploadFile } from "react-icons/md";
import { toast } from 'react-toastify';
import { AppContext } from '../context/AppContext';

const GeneralIquery = () => {

    const { UrlBackend } = useContext(AppContext)

    const [questionType, setQuestionType] = useState("");
    const [questionText, setQuestionText] = useState("");
    const [image, setImage] = useState(null);

    const handleSelectChange = (e) => {
        setQuestionType(e.target.value);
    };

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
            <select
                value={questionType}
                onChange={handleSelectChange}
                className="border border-gray-400 rounded-md p-2"
            >
                <option value="" disabled>
                    Type Of Question You Want To Ask
                </option>
                <option value="Account Help">Account Help</option>
                <option value="Payment Issues">Payment Issues</option>
                <option value="Policies">Policies</option>
                <option value="Other relevant topics">Other relevant topics</option>
            </select>

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
};

export default GeneralIquery;
