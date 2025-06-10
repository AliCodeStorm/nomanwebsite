"use client";

import { Marquee } from "@/components/magicui/marquee";
import { TrendingUp, Mail, Globe, BarChart2, Video } from "lucide-react";
import {
    FaFacebookF,
    FaInstagram,
    FaGoogle,
    FaPinterestP,
    FaTiktok,
    FaLinkedinIn,
    FaChartLine,
} from "react-icons/fa";

const skills = [
    {
        icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
        label: "SEO Optimization",
    },
    {
        icon: <FaFacebookF className="w-6 h-6 text-blue-700" />,
        label: "Facebook Ads",
    },
    {
        icon: <FaInstagram className="w-6 h-6 text-pink-500" />,
        label: "Instagram Marketing",
    },
    {
        icon: <Mail className="w-6 h-6 text-red-500" />,
        label: "Email Campaigns",
    },
    {
        icon: <FaGoogle className="w-6 h-6 text-yellow-600" />,
        label: "Google Ads",
    },
    {
        icon: <FaPinterestP className="w-6 h-6 text-red-400" />,
        label: "Pinterest Strategy",
    },
    {
        icon: <Globe className="w-6 h-6 text-green-500" />,
        label: "Content Marketing",
    },
    {
        icon: <Video className="w-6 h-6 text-purple-600" />,
        label: "Video Marketing",
    },
    {
        icon: <FaTiktok className="w-6 h-6 text-black" />,
        label: "TikTok Growth",
    },
    {
        icon: <FaLinkedinIn className="w-6 h-6 text-blue-500" />,
        label: "LinkedIn Strategy",
    },
    {
        icon: <BarChart2 className="w-6 h-6 text-emerald-600" />,
        label: "Analytics & Insights",
    },
    {
        icon: <FaChartLine className="w-6 h-6 text-indigo-500" />,
        label: "Conversion Optimization",
    },
];

const SkillsSection = () => {
    return (
        <section className="w-full py-10 bg-gray-50 dark:bg-black">
            <h2 className="text-center text-3xl font-bold text-zinc-800 dark:text-white mb-6">
                My Digital Marketing Skills
            </h2>
            <Marquee className="[--duration:60s]">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 px-6 py-2 bg-white dark:bg-zinc-800 rounded-lg shadow-md mx-4"
                    >
                        {skill.icon}
                        <span className="text-zinc-700 dark:text-white font-medium whitespace-nowrap">
                            {skill.label}
                        </span>
                    </div>
                ))}
            </Marquee>
        </section>
    );
};

export default SkillsSection;
