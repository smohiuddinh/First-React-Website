import React, { useState } from 'react';

export default function ContactMe() {

    const [formData, setFormData] = useState({
        input1: '',
        input2: '',
        checkbox1: false,
        checkbox2: false,
        radio: '',
        select: '',
        textarea: ''
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === 'checkbox' ? checked : value;

        setFormData({
            ...formData,
            [name]: val
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Add your submission logic here
    };

    return (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-contactColor  text-black ">
            <div className="d-none d-md-block">
                <img src="src/images/form.png" />
            </div>
            <div className=" hover:bg-black hover:text-blue-50 max-w-md mx-auto p-6 bg-white shadow-md rounded-lg" id='contact'>

                <h2 className=" text-3xl mb-6 font-semibold text-center">Contact Us</h2>
                <form onSubmit={handleSubmit} className="grid gap-4">
                    <div>
                        <label className="font-semibold mb-1" htmlFor="input1">Name:</label>
                        <input
                            type="text"
                            name="input1"
                            value={formData.input1}
                            onChange={handleInputChange}
                            id="input1"
                            className="  text-black w-full py-2 px-3 text-lg border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div>
                        <label className="font-semibold mb-1" htmlFor="input2">Email:</label>
                        <input
                            type="email"
                            name="input2"
                            value={formData.input2}
                            onChange={handleInputChange}
                            id="input2"
                            className="w-full py-2 px-3 text-lg border text-black border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label className="font-semibold flex items-center mb-2">
                            <input
                                type="checkbox"
                                name="checkbox1"
                                checked={formData.checkbox1}
                                onChange={handleInputChange}
                                className="mr-2 leading-tight"
                            />
                            Query
                        </label>
                        <label className="font-semibold flex items-center">
                            <input
                                type="checkbox"
                                name="checkbox2"
                                checked={formData.checkbox2}
                                onChange={handleInputChange}
                                className="mr-2 leading-tight"
                            />
                            Feedback
                        </label>
                    </div>
                    <div className="space-y-2">
                        <label className="font-semibold flex items-center">
                            <input
                                type="radio"
                                name="radio"
                                value="Male"
                                checked={formData.radio === 'Male'}
                                onChange={handleInputChange}
                                className="mr-2 leading-tight"
                            />
                            Male
                        </label>
                        <label className=" text-black font-semibold flex items-center">
                            <input
                                type="radio"
                                name="radio"
                                value="Female"
                                checked={formData.radio === 'Female'}
                                onChange={handleInputChange}
                                className="mr-2 leading-tight"
                            />
                            Female
                        </label>
                    </div>
                    <div>
                        <label className="font-semibold mb-1" htmlFor="select">Select:</label>
                        <select
                            name="select"
                            value={formData.select}
                            onChange={handleInputChange}
                            id="select"
                            className=" hover:text-black w-full py-2 px-3 text-lg border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        >
                            <option value="">Select an option</option>
                            <option value="Help Center">Help Center</option>
                            <option value="Tech Team">Tech Team</option>
                            <option value="Operations">Operations</option>
                        </select>
                    </div>
                    <div>
                        <label className="font-semibold mb-1 hover:text-black " htmlFor="textarea">Message:</label>
                        <textarea
                            name="textarea"
                            value={formData.textarea}
                            onChange={handleInputChange}
                            id="textarea"
                            className="w-full py-2 px-3 text-lg border  hover:text-black border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            rows="4"
                            placeholder="Write your message here"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
