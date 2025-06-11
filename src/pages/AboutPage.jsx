import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    Trophy,
    BarChart2,
    DollarSign,
    Target,
    Facebook,
    Instagram,
    Linkedin,
} from 'lucide-react';
import SkillsSection from '@/components/Section/SkillsSection';
import { Lens } from '@/components/magicui/lens';
import { AuroraText } from '@/components/magicui/aurora-text';

const About = () => {
    return (
        <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen">
            {/* Hero Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4"
                    >
                        About
                        <AuroraText className="ml-1.5" speed={1}>
                            Muhammad Noman,
                        </AuroraText>
                    </motion.h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                        A passionate Digital Marketer specializing in performance-driven advertising.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center"
                    >
                        <Lens>
                            <img
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                alt="Muhammad Noman"
                                className="rounded-xl shadow-xl w-full max-w-md h-auto object-cover"
                            />
                        </Lens>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Who Am I?</h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            I'm Muhammad Noman, a dedicated and results-oriented <strong>Digital Marketer</strong> with a strong focus on <strong>Google Ads, Meta Ads (Facebook & Instagram), and Data Analytics</strong>. I specialize in crafting and executing high-performance ad strategies that drive measurable business growth.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            With over <strong>3 years of hands-on experience</strong>, I’ve successfully managed advertising budgets totaling more than <strong>$500,000</strong>, consistently delivering <strong>3x to 5x return on ad spend (ROAS)</strong> for clients across eCommerce, SaaS, and lead generation sectors.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            My approach is rooted in data-driven decision-making, audience precision, and continuous optimization. Whether you’re scaling your brand or launching your first campaign, I bring the expertise and insights needed to help you reach the right audience, reduce wasted spend, and grow profitably.
                        </p>

                        {/* Stats / Highlights */}
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            {[
                                { icon: <Trophy className="w-6 h-6 text-blue-600" />, text: "Award-Winning Ads" },
                                { icon: <BarChart2 className="w-6 h-6 text-blue-600" />, text: "Data-Driven" },
                                { icon: <DollarSign className="w-6 h-6 text-blue-600" />, text: "ROI-Focused" },
                                { icon: <Target className="w-6 h-6 text-blue-600" />, text: "Precision Targeting" },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                                >
                                    {item.icon}
                                    <span className="font-medium text-gray-900 dark:text-gray-100">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA */}
                        <motion.div whileHover={{ scale: 1.02 }} className="mt-8">
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                            >
                                Get a Free Audit <ArrowRight className="w-5 h-5" />
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <SkillsSection />
            {/* Social Proof / Testimonials */}
            <section className="py-16 bg-gray-50 dark:bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">Why Work With Me?</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Transparent Reporting",
                                desc: "Real-time dashboards so you know exactly where your ad spend goes.",
                            },
                            {
                                title: "No Long-Term Contracts",
                                desc: "Pay monthly. Cancel anytime if you're not satisfied.",
                            },
                            {
                                title: "Scalable Strategies",
                                desc: "From $1k to $100k/month budgets, I optimize for growth.",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition"
                            >
                                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">{item.title}</h3>
                                <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Social Links */}
            <section className="py-12 text-center bg-white dark:bg-black">
                <h3 className="text-xl font-medium mb-6 text-gray-900 dark:text-gray-100">Follow Me</h3>
                <div className="flex justify-center gap-4">
                    {[
                        { icon: <Facebook className="w-6 h-6" />, label: "Facebook" },
                        { icon: <Instagram className="w-6 h-6" />, label: "Instagram" },
                        { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn" },
                    ].map((social, index) => (
                        <motion.a
                            key={index}
                            href="#"
                            whileHover={{ y: -3 }}
                            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                            aria-label={social.label}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </div>
            </section>
        </div>
    );
};


export default About;