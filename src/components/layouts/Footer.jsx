import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Github, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-50 dark:bg-black">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <div className="flex items-center">
                            <img
                                alt="Noman Digital Marketing"
                                src="/logo.svg"
                                className="h-8 w-auto"
                            />
                            <p className="ml-3 text-sm leading-6 text-black dark:text-white">
                                Helping businesses grow online through expert digital marketing.
                            </p>
                        </div>
                        <div className="flex space-x-6">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <Facebook className="h-6 w-6 text-black dark:text-white hover:text-blue-600" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <Instagram className="h-6 w-6 text-black dark:text-white hover:text-pink-500" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <Twitter className="h-6 w-6 text-black dark:text-white hover:text-sky-500" />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <Github className="h-6 w-6 text-black dark:text-white hover:text-gray-700" />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                <Youtube className="h-6 w-6 text-black dark:text-white hover:text-red-600" />
                            </a>
                        </div>
                    </div>

                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-black dark:text-white">Services</h3>
                                <ul className="mt-6 space-y-4">
                                    <li><NavLink to="/services" className="text-sm hover:text-blue-600">SEO</NavLink></li>
                                    <li><NavLink to="/services" className="text-sm hover:text-blue-600">Social Media</NavLink></li>
                                    <li><NavLink to="/services" className="text-sm hover:text-blue-600">Google Ads</NavLink></li>
                                    <li><NavLink to="/services" className="text-sm hover:text-blue-600">Content Marketing</NavLink></li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold text-black dark:text-white">Pages</h3>
                                <ul className="mt-6 space-y-4">
                                    <li><NavLink to="/" className="text-sm hover:text-blue-600">Home</NavLink></li>
                                    <li><NavLink to="/about" className="text-sm hover:text-blue-600">About Us</NavLink></li>
                                    <li><NavLink to="/services" className="text-sm hover:text-blue-600">Services</NavLink></li>
                                    <li><NavLink to="/contact" className="text-sm hover:text-blue-600">Contact</NavLink></li>
                                </ul>
                            </div>
                        </div>

                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-black dark:text-white">Support</h3>
                                <ul className="mt-6 space-y-4">
                                    <li><NavLink to="/services" className="text-sm hover:text-blue-600">FAQ</NavLink></li>
                                    <li><NavLink to="/services" className="text-sm hover:text-blue-600">Guides</NavLink></li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold text-black dark:text-white">Legal</h3>
                                <ul className="mt-6 space-y-4">
                                    <li><NavLink to="/privacypolicy" className="text-sm hover:text-blue-600">Privacy Policy</NavLink></li>
                                    <li><NavLink to="/termsandconditions" className="text-sm hover:text-blue-600">Terms & Conditions</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 border-t border-gray-200 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        © 2025 Noman Digital Marketing. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
