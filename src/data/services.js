import {
    Facebook,
    BarChart2,
    DollarSign,
    Target,
    Trophy
} from 'lucide-react';

export const services = [
    {
        slug: "google-ads-management",
        title: "Google Ads Management",
        icon: BarChart2,
        shortDesc: "Launch and scale Google Ads that convert efficiently.",
        longDesc: "We manage Google Ads across Search, Display, and YouTube, focused on ROI through targeting, copy, and keyword strategy.",
        features: [
            "Search, Display, and YouTube campaigns",
            "In-depth keyword research",
            "Ad copy A/B testing",
            "Conversion tracking setup"
        ],
        image: "/googleads.jpg"
    },
    {
        slug: "meta-ads-strategy",
        title: "Meta Ads Strategy",
        icon: Facebook,
        shortDesc: "Drive traffic and sales through Meta ads.",
        longDesc: "Expert Meta ad campaigns with custom audience targeting, lookalikes, and performance tracking for Facebook & Instagram.",
        features: [
            "Lookalike & custom audience targeting",
            "Dynamic creative testing",
            "Retargeting strategies",
            "Facebook Pixel setup"
        ],
        image: "/mataads.jpg"
    },
    {
        slug: "landing-page-optimization",
        title: "Landing Page Optimization",
        icon: Target,
        shortDesc: "Boost conversions with optimized pages.",
        longDesc: "We create high-performing landing pages that increase leads and sales through smart layout, messaging, and UX.",
        features: [
            "Conversion-focused design",
            "Fast-loading pages",
            "A/B testing integration",
            "Copywriting optimization"
        ],
        image: "/landingpage.jpg"
    },
    {
        slug: "marketing-analytics",
        title: "Marketing Analytics",
        icon: BarChart2,
        shortDesc: "Track and visualize campaign performance.",
        longDesc: "Monitor performance with clear, actionable reports. We integrate analytics tools to provide transparency and direction.",
        features: [
            "Google Analytics & Tag Manager setup",
            "Custom dashboard reporting",
            "Funnel analysis",
            "Weekly/monthly insights"
        ],
        image: "/images/analytics.jpg"
    },
    {
        slug: "ecommerce-scaling",
        title: "E-Commerce Scaling",
        icon: DollarSign,
        shortDesc: "Grow your online store profitably.",
        longDesc: "We implement full-funnel ad strategies and optimize product feeds to scale your online store revenue efficiently.",
        features: [
            "Product feed optimization",
            "Cross-platform ad management",
            "Upsell/cross-sell strategies",
            "Email & SMS marketing"
        ],
        image: "/images/ecommerce.jpg"
    },
    {
        slug: "consulting-and-audits",
        title: "Consulting & Audits",
        icon: Trophy,
        shortDesc: "Expert advice to improve your ad performance.",
        longDesc: "We review your existing ad strategies and provide expert recommendations with clear action plans.",
        features: [
            "Account audits",
            "Performance analysis",
            "One-on-one consulting",
            "Strategic roadmaps"
        ],
        image: "/images/consulting.jpg"
    }
];
