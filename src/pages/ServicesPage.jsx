import React from 'react';
import { motion } from 'framer-motion';
import {
    Facebook,
    BarChart2,
    DollarSign,
    Target,
    Trophy
} from 'lucide-react';
import Faqs from '@/components/Section/Faqs';

const services = [
    {
        title: "Google Ads Management",
        icon: <BarChart2 className="w-7 h-7 text-blue-600" />,
        desc: "Launch and scale Google Search, Display, and YouTube ads that convert efficiently.",
    },
    {
        title: "Meta Ads Strategy",
        icon: <Facebook className="w-7 h-7 text-blue-600" />,
        desc: "Drive traffic and sales through highly targeted Facebook & Instagram advertising campaigns.",
    },
    {
        title: "Landing Page Optimization",
        icon: <Target className="w-7 h-7 text-blue-600" />,
        desc: "Boost conversion rates with optimized landing pages tailored to your audience and goals.",
    },
    {
        title: "Marketing Analytics",
        icon: <BarChart2 className="w-7 h-7 text-blue-600" />,
        desc: "Track and visualize campaign performance with custom reports and insights.",
    },
    {
        title: "E-Commerce Scaling",
        icon: <DollarSign className="w-7 h-7 text-blue-600" />,
        desc: "Grow your store profitably with full-funnel ad strategies and product feed optimization.",
    },
    {
        title: "Consulting & Audits",
        icon: <Trophy className="w-7 h-7 text-blue-600" />,
        desc: "Get expert advice, audits, and actionable plans to improve your existing ad performance.",
    },
];

const Services = () => {
    return (
        <>
            <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen py-20 px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Services I <span className="text-blue-600">Offer</span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                        Strategic digital marketing solutions to help your business scale efficiently and profitably.
                    </p>
                </motion.div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className=" cursor-pointer bg-gray-50 dark:bg-gray-900 p-6 rounded-xl  transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                {service.icon}
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {service.title}
                                </h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Faqs />
        </>
    );
};

export default Services;
