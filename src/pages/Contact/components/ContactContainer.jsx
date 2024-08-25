import React from 'react';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { emailServiceConfig } from '../../../utils/constant';
import mac from "../../../assets/mac.png";

const ContactContainer = () => {
    const serviceId = emailServiceConfig.service_id;
    const templateId = emailServiceConfig.template_id;
    const userId = emailServiceConfig.user_id;
    const [formData, setFormData] = useState({
        from_name: '',   // updated
        from_email: '',  // updated
        message: ''
    });
    const [successMessage, setSuccessMessage] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            serviceId,
            templateId,
            e.target,
            userId
        ).then(
            (result) => {
                console.log('Message sent successfully', result.text);
                setSuccessMessage(true);
                setTimeout(() => setSuccessMessage(false), 5000); // Hide message after 5 seconds
            },
            (error) => {
                console.log('Failed to send message', error.text);
                alert('Failed to send message.');
            }
        );

        setFormData({ from_name: '', from_email: '', message: '' });  // updated
    };

    return (
        <div className="md:w-8/12 mt-16 w-11/12 mx-auto border-2 border-[#383737] rounded-xl">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 bg-[#181818] md:px-8 px-6 py-4 rounded-lg shadow-lg">
                <div className='flex w-full mb-5'>
                    <img src={mac} alt="logo" className='hidden md:block' />
                    <div className='flex justify-center items-center w-full'>
                        <h1 className="font-semibold text-white">New message</h1>
                    </div>
                </div>

                <div className='flex md:text-lg w-full'>
                    <h1 className='text-white'>Name: </h1>
                    <input
                    type="text"
                    name="from_name"  // updated
                    value={formData.from_name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="px-2 bg-[#181818] rounded text-[#808080] focus:outline-none w-full" 
                    required
                    />
                </div>
                <hr className="border-t-2 border-gray-500"/>
                <div className='flex md:text-lg w-full' >
                    <h1 className='text-white'>Email: </h1>
                    <input
                    type="email"
                    name="from_email"  // updated
                    value={formData.from_email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="px-2 bg-[#181818] rounded text-[#808080] focus:outline-none w-full"
                    required
                />
                </div>
                <hr className="border-t-2 border-gray-500"/>
                <div className='md:text-lg w-full pt-3'>
                    <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="p-2 bg-[#0D0D0D] text-[#808080] focus:outline-none rounded w-full h-52"
                    required
                />
                </div>
                
                <button
                    type="submit"
                    className="bg-[#1e1d1d] text-white py-2 px-4 rounded-lg hover:bg-[#131313] transition duration-300"
                >
                    Send Message
                </button>
            </form>
            {successMessage && (
                <div className="mt-6 p-4 text-center bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    <strong>Thank you!</strong> Your message has been sent successfully.
                </div>
            )}
        </div>
    );
};

export default ContactContainer;
