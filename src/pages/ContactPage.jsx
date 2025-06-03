import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const inputVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: (i) => ({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' }
    }),
};
const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! ✅");
};
const Contact = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-5xl font-bold text-center mb-4"
                >
                    Get In <span className="text-blue-600">Touch</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="text-center text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
                >
                    Have a project in mind? Let’s connect and talk about how we can grow your business together.
                </motion.p>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="flex items-start gap-4">
                            <Mail className="w-6 h-6 text-blue-600 mt-1" />
                            <div>
                                <h3 className="font-semibold">Email</h3>
                                <p className="text-gray-700 dark:text-gray-300">nomiagent04@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Phone className="w-6 h-6 text-blue-600 mt-1" />
                            <div>
                                <h3 className="font-semibold">Phone</h3>
                                <p className="text-gray-700 dark:text-gray-300">0348 6823803</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                            <div>
                                <h3 className="font-semibold">Location</h3>
                                <p className="text-gray-700 dark:text-gray-300">Lahore, Pakistan</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}

                    <motion.form
                        onSubmit={handleSubmit}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-6 bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-lg"
                    >
                        {[
                            { label: "Full Name", type: "text", name: "name", placeholder: "Your Name" },
                            { label: "Email Address", type: "email", name: "email", placeholder: "you@example.com" },
                            { label: "Message", type: "textarea", name: "message", placeholder: "Write your message..." },
                        ].map((field, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                variants={inputVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <label className="block mb-2 font-medium text-sm">{field.label}</label>
                                {field.type === "textarea" ? (
                                    <textarea
                                        name={field.name}
                                        rows="4"
                                        placeholder={field.placeholder}
                                        className="w-full px-4 py-3 rounded-md bg-white dark:bg-black border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    />
                                ) : (
                                    <input
                                        type={field.type}
                                        name={field.name}
                                        placeholder={field.placeholder}
                                        className="w-full px-4 py-3 rounded-md bg-white dark:bg-black border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    />
                                )}
                            </motion.div>
                        ))}

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                        >
                            Send Message <Send className="w-4 h-4" />
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
