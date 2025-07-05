import React from 'react'
import { motion } from 'framer-motion'
import bt from "../assets/Button-icons/B-1.png"
import { useNavigate } from 'react-router-dom';

const ContactButton = () => {
    const navigate = useNavigate();
    const handleButton = () => {
        navigate('/contact');
    }

    return (
        <motion.button 
            onClick={handleButton} 
            className='bg-[#151515] border border-black hover:text-[#808080] text-white md:text-base text-sm font-semibold md:px-6 py-3 px-20 rounded-xl mt-6 md:ml-4 ml-6 transition-all duration-300'
            whileHover={{ 
                scale: 1.05,
                backgroundColor: "#1f1f1f",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                borderColor: "#333"
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.img 
                src={bt} 
                alt='' 
                className='w-6 h-6 inline-block mr-2 mb-1'
                whileHover={{ rotate: 10 }}
                transition={{ duration: 0.2 }}
            />
            Get in touch
        </motion.button>
    )
}

export default ContactButton
