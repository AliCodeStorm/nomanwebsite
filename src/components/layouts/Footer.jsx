import React from 'react';
import {
    Facebook,
    Instagram,
    Twitter,
    Github,
    Youtube,
} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-50 dark:bg-black">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <div className="flex items-center">
                            <img
                                alt="Company name"
                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto"
                            />
                            <p className="ml-3 text-sm leading-6 text-black dark:text-white">
                                Making the world a better place through constructing elegant hierarchies.
                            </p>
                        </div>
                        <div className="flex space-x-6">
                            <a href="#" className="text-black dark:text-white hover:text-gray-500">
                                <span className="sr-only">Facebook</span>
                                <Facebook className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-black dark:text-white hover:text-gray-500">
                                <span className="sr-only">Instagram</span>
                                <Instagram className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-black dark:text-white hover:text-gray-500">
                                <span className="sr-only">Twitter</span>
                                <Twitter className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-black dark:text-white hover:text-gray-500">
                                <span className="sr-only">GitHub</span>
                                <Github className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-black dark:text-white hover:text-gray-500">
                                <span className="sr-only">YouTube</span>
                                <Youtube className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-black dark:text-white">Solutions</h3>
                                <ul className="mt-6 space-y-4">
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-black dark:text-white hover:text-gray-900">
                                            Marketing
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-black dark:text-white hover:text-gray-900">
                                            Analytics
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-black dark:text-white hover:text-gray-900">
                                            Automation
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-black dark:text-white hover:text-gray-900">
                                            Commerce
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-black dark:text-white hover:text-gray-900">
                                            Insights
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-black dark:text-white">Support</h3>
                                <ul className="mt-6 space-y-4">
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-black dark:text-white hover:text-gray-900">
                                            Submit ticket
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-black dark:text-white hover:text-gray-900">
                                            Documentation
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-black dark:text-white hover:text-gray-900">
                                            Guides
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-black dark:text-white">Company</h3>
                                <ul className="mt-6 space-y-4">
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-black dark:text-white hover:text-gray-900">
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-black dark:text-white hover:text-gray-900">
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-black dark:text-white hover:text-gray-900">
                                            Jobs
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-black dark:text-white hover:text-gray-900">
                                            Press
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
                                <ul className="mt-6 space-y-4">
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-black dark:text-white hover:text-gray-900">
                                            Terms of service
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-black dark:text-white hover:text-gray-900">
                                            Privacy policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 text-black dark:text-white hover:text-gray-900">
                                            License
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 border-t border-gray-900/10 dark:border-white pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-sm leading-6 text-gray-500">
                        © 2024 Your Company, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;