import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { emailServiceConfig } from '../../../utils/constant';
import LazySection from '../../../components/LazyLoad/LazySection';

const ContactContainer = () => {
    const serviceId = emailServiceConfig.service_id;
    const templateId = emailServiceConfig.template_id;
    const userId = emailServiceConfig.user_id;
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: ''
    });
    const [successMessage, setSuccessMessage] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const validateField = (name, value) => {
        switch (name) {
            case 'from_name':
                return value.length < 2 ? 'Name must be at least 2 characters' : '';
            case 'from_email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
            case 'message':
                return value.length < 10 ? 'Message must be at least 10 characters' : '';
            default:
                return '';
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        
        // Real-time validation
        if (touched[name]) {
            const error = validateField(name, value);
            setErrors({ ...errors, [name]: error });
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched({ ...touched, [name]: true });
        const error = validateField(name, value);
        setErrors({ ...errors, [name]: error });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validate all fields
        const newErrors = {};
        Object.keys(formData).forEach(key => {
            const error = validateField(key, formData[key]);
            if (error) newErrors[key] = error;
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setTouched({ from_name: true, from_email: true, message: true });
            return;
        }

        setIsSubmitting(true);
        setErrors({});

        emailjs.sendForm(
            serviceId,
            templateId,
            e.target,
            userId
        ).then(
            (result) => {
                console.log('Message sent successfully', result.text);
                setSuccessMessage(true);
                setIsSubmitting(false);
                setFormData({ from_name: '', from_email: '', message: '' });
                setTouched({});
                setTimeout(() => setSuccessMessage(false), 5000);
            },
            (error) => {
                console.log('Failed to send message', error.text);
                alert('Failed to send message. Please try again.');
                setIsSubmitting(false);
            }
        );
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <LazySection className="md:w-10/12 lg:w-8/12 xl:w-7/12 mt-16 w-11/12 mx-auto">
            <motion.div 
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl border border-gray-700/30 shadow-2xl"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ 
                    borderColor: "rgba(107, 114, 128, 0.5)",
                    boxShadow: "0 25px 50px rgba(0,0,0,0.5)"
                }}
                transition={{ duration: 0.3 }}
            >
                {/* Gradient overlay for premium look */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 pointer-events-none" />
                
                {/* Header with window controls */}
                <motion.div 
                    className="px-6 py-4 border-b border-gray-700/30 bg-gradient-to-r from-gray-800/20 to-gray-900/20 backdrop-blur-sm"
                    variants={itemVariants}
                >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                            </div>
                            <motion.h1 
                                className="text-lg font-medium text-white/90 ml-4"
                                whileHover={{ scale: 1.01, color: "#ffffff" }}
                                transition={{ duration: 0.2 }}
                            >
                                New Message
                            </motion.h1>
                        </div>
                        
                        {/* Contact indicator */}
                        <div className="flex items-center space-x-2 text-xs text-gray-400">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span>Online</span>
                        </div>
                    </div>
                </motion.div>

                <motion.form 
                    onSubmit={handleSubmit} 
                    className="p-6 space-y-5"
                    variants={containerVariants}
                >
                    {/* Name Field */}
                    <motion.div 
                        className="space-y-2"
                        variants={itemVariants}
                    >
                        <label className="text-sm font-medium text-gray-300">Name</label>
                        <motion.input
                            type="text"
                            name="from_name"
                            value={formData.from_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Your name"
                            className={`w-full px-4 py-3 bg-gray-950/50 border rounded-xl text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50 ${
                                errors.from_name ? 'border-red-500/50 bg-red-500/5' : 
                                touched.from_name && !errors.from_name ? 'border-green-500/50 bg-green-500/5' : 
                                'border-gray-600/30 hover:border-gray-500/50'
                            }`}
                            required
                            whileFocus={{ scale: 1.01 }}
                        />
                        {errors.from_name && (
                            <motion.p 
                                className="text-red-400 text-xs flex items-center space-x-1"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" />
                                </svg>
                                <span>{errors.from_name}</span>
                            </motion.p>
                        )}
                    </motion.div>

                    {/* Email Field */}
                    <motion.div 
                        className="space-y-2"
                        variants={itemVariants}
                    >
                        <label className="text-sm font-medium text-gray-300">Email</label>
                        <motion.input
                            type="email"
                            name="from_email"
                            value={formData.from_email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="your.email@example.com"
                            className={`w-full px-4 py-3 bg-gray-950/50 border rounded-xl text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50 ${
                                errors.from_email ? 'border-red-500/50 bg-red-500/5' : 
                                touched.from_email && !errors.from_email ? 'border-green-500/50 bg-green-500/5' : 
                                'border-gray-600/30 hover:border-gray-500/50'
                            }`}
                            required
                            whileFocus={{ scale: 1.01 }}
                        />
                        {errors.from_email && (
                            <motion.p 
                                className="text-red-400 text-xs flex items-center space-x-1"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" />
                                </svg>
                                <span>{errors.from_email}</span>
                            </motion.p>
                        )}
                    </motion.div>

                    {/* Message Field */}
                    <motion.div 
                        className="space-y-2"
                        variants={itemVariants}
                    >
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium text-gray-300">Message</label>
                            <motion.span 
                                className={`text-xs transition-colors duration-200 ${
                                    formData.message.length < 10 ? 'text-red-400' : 
                                    formData.message.length > 400 ? 'text-yellow-400' : 
                                    'text-gray-500'
                                }`}
                                animate={{ 
                                    color: formData.message.length < 10 ? '#f87171' : 
                                           formData.message.length > 400 ? '#fbbf24' : 
                                           '#6b7280' 
                                }}
                            >
                                {formData.message.length}/500
                            </motion.span>
                        </div>
                        <motion.textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Tell me about your project, ideas, or just say hello..."
                            className={`w-full px-4 py-3 bg-gray-950/50 border rounded-xl text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50 resize-none h-32 ${
                                errors.message ? 'border-red-500/50 bg-red-500/5' : 
                                touched.message && !errors.message ? 'border-green-500/50 bg-green-500/5' : 
                                'border-gray-600/30 hover:border-gray-500/50'
                            }`}
                            required
                            whileFocus={{ scale: 1.005 }}
                        />
                        {errors.message && (
                            <motion.p 
                                className="text-red-400 text-xs flex items-center space-x-1"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" />
                                </svg>
                                <span>{errors.message}</span>
                            </motion.p>
                        )}
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        className={`w-full py-4 px-6 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                            isSubmitting || Object.keys(errors).some(key => errors[key]) 
                                ? 'bg-gray-700/50 text-gray-400 cursor-not-allowed border border-gray-600/30' 
                                : 'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white shadow-lg hover:shadow-2xl border border-gray-600/50 hover:border-gray-500/50'
                        }`}
                        disabled={isSubmitting || Object.keys(errors).some(key => errors[key])}
                        whileHover={!isSubmitting && !Object.keys(errors).some(key => errors[key]) ? { 
                            scale: 1.02,
                            boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
                        } : {}}
                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                        variants={itemVariants}
                    >
                        {isSubmitting ? (
                            <>
                                <motion.div
                                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                />
                                <span>Sending...</span>
                            </>
                        ) : (
                            <>
                                <motion.svg 
                                    width="20" 
                                    height="20" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    xmlns="http://www.w3.org/2000/svg"
                                    whileHover={{ x: 2 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" fill="currentColor"/>
                                </motion.svg>
                                <span>Send Message</span>
                            </>
                        )}
                    </motion.button>

                    {/* Privacy notice */}
                    <motion.p 
                        className="text-xs text-gray-500 text-center"
                        variants={itemVariants}
                    >
                        Your information is secure and will only be used to respond to your message.
                    </motion.p>
                </motion.form>
                
                {successMessage && (
                    <motion.div 
                        className="mx-6 mb-6 p-4 text-center bg-green-500/10 border border-green-500/30 text-green-400 rounded-xl backdrop-blur-sm"
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.9 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.3 }}
                            className="flex items-center justify-center space-x-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="font-medium">Message sent successfully!</span>
                        </motion.div>
                        <p className="text-sm text-green-300 mt-1">Thank you for reaching out. I'll get back to you soon!</p>
                    </motion.div>
                )}
            </motion.div>
        </LazySection>
    );
};

export default ContactContainer;
