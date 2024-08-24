import React from 'react'
import bt from "../assets/Button-icons/B-1.png"
import { useNavigate } from 'react-router-dom';
const ContactButton = () => {
    const navigate = useNavigate();
    const handleButton = () => {
        navigate('/contact');
    }

    return (
        <button onClick={handleButton} className='bg-[#151515] border border-black hover:text-[#808080] text-white md:text-base text-sm font-semibold md:px-6 py-3 px-20 rounded-xl mt-6 md:ml-4 ml-6'>
            <img src={bt} alt='' className='w-6 h-6 inline-block mr-2 mb-1'/>
            Get in touch
        </button>
    )
}

export default ContactButton
