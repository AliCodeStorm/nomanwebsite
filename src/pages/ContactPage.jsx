import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Facebook, Twitter, Calendar } from 'lucide-react';
import { toast } from "sonner"

import emailjs from 'emailjs-com';
import { BorderBeam } from '@/components/magicui/border-beam';
import { HyperText } from '@/components/magicui/hyper-text';
import { TextAnimate } from '@/components/magicui/text-animate';

const inputVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: (i) => ({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' }
    }),
};

const Contact = () => {
    const form = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get("name")?.trim();
        const email = formData.get("email")?.trim();
        const message = formData.get("message")?.trim();

        // Basic validation
        if (!name) {
            toast.error("Please enter your name.");
            return;
        }

        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        if (!message) {
            toast.error("Please enter your message.");
            return;
        }
        emailjs.sendForm(
            'service_i6nb13t',
            'template_pl64xsa',
            e.target,
            '_zhERR0YCgl3pZUuE'
        )
            .then((result) => {
                toast("Message sent successfully! ✅");
            }, (error) => {
                toast.error("Failed to send message. ❌");
                console.error(error.text);
            });

        e.target.reset();
    };
    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-4" >
                    <TextAnimate animation="scaleUp" by="text" >
                        Get In{" "}
                        <HyperText className="inline whitespace-nowrap">
                            Touch
                        </HyperText>
                    </TextAnimate>
                </h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="text-center text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
                >
                    <TextAnimate animation="blurInUp" by="character" duration={0.7} startOnView="true">
                        Have a project in mind? Let’s connect and talk about how we can grow your business together.
                    </TextAnimate>
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
                                <a href="mailto:nomiagent04@gmail.com" className="text-gray-700 dark:text-gray-300 hover:underline">
                                    nomiagent04@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Phone className="w-6 h-6 text-blue-600 mt-1" />
                            <div>
                                <h3 className="font-semibold">Phone</h3>
                                <a href="https://wa.me/923486823803" target="_blank" className="text-gray-700 dark:text-gray-300 hover:underline">
                                    +92 348 6823803 (WhatsApp)
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                            <div>
                                <h3 className="font-semibold">Location</h3>
                                <p className="text-gray-700 dark:text-gray-300">Lahore, Pakistan</p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 mt-6">
                            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                                <Twitter className="w-6 h-6" />
                            </a>
                        </div>

                        {/* Calendly Button */}
                        <a
                            href="https://calendly.com/yourname"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-blue-600 hover:underline mt-4"
                        >
                            <Calendar className="w-4 h-4" /> Book a Call
                        </a>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        ref={form}
                        onSubmit={handleSubmit}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative overflow-hidden space-y-1 bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-lg"
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
                                        className="w-full px-4 py-2 rounded-md bg-white dark:bg-black border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
                        <BorderBeam
                            duration={6}
                            size={400}
                            className="from-transparent via-red-600 to-transparent"
                        />
                        <BorderBeam
                            duration={6}
                            delay={3}
                            size={400}
                            className="from-transparent via-blue-600 to-transparent"
                        />
                    </motion.form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
