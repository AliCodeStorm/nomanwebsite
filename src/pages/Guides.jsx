import React from 'react';
import {
    Rocket,
    RefreshCw,
    Type,
    LayoutDashboard,
    Mail,
    AlarmClock
} from 'lucide-react'; // Lucide icons

const guides = [
    {
        title: "How to Launch a Google Ads Campaign",
        date: "June 2025",
        icon: <Rocket className="w-6 h-6 text-blue-500" />,
        steps: [
            "Set your campaign goal – conversions, traffic, or brand awareness.",
            "Research keywords using Google Keyword Planner.",
            "Group keywords into ad groups and write relevant ads.",
            "Set daily budget and bidding strategy.",
            "Enable conversion tracking and launch."
        ]
    },
    {
        title: "Facebook & Instagram Retargeting Strategy",
        date: "May 2025",
        icon: <RefreshCw className="w-6 h-6 text-blue-500" />,
        steps: [
            "Install Meta Pixel on your website.",
            "Create a custom audience of recent visitors or abandoned carts.",
            "Design ads that remind users of your offer or products.",
            "Set frequency cap to avoid ad fatigue.",
            "Track conversions using Events Manager."
        ]
    },
    {
        title: "How to Write High-Converting Ad Copy",
        date: "April 2025",
        icon: <Type className="w-6 h-6 text-blue-500" />,
        steps: [
            "Understand your audience’s pain points.",
            "Use attention-grabbing headlines and clear value.",
            "Highlight benefits, not just features.",
            "Add urgency or social proof.",
            "End with a clear call-to-action (CTA)."
        ]
    },
    {
        title: "Landing Page Optimization Basics",
        date: "March 2025",
        icon: <LayoutDashboard className="w-6 h-6 text-blue-500" />,
        steps: [
            "Use a clear headline with value proposition.",
            "Add testimonials or trust signals.",
            "Keep forms short and simple.",
            "Use strong CTAs above the fold.",
            "Optimize for mobile performance."
        ]
    },
    {
        title: "Email Marketing Automation 101",
        date: "February 2025",
        icon: <Mail className="w-6 h-6 text-blue-500" />,
        steps: [
            "Set up a welcome sequence for new subscribers.",
            "Segment your email list based on behavior.",
            "Send value-based content, not just promotions.",
            "Test subject lines and send times.",
            "Use analytics to improve open and click rates."
        ]
    },
    {
        title: "Boost Sales with Urgency Techniques",
        date: "January 2025",
        icon: <AlarmClock className="w-6 h-6 text-blue-500" />,
        steps: [
            "Add countdown timers on landing pages.",
            "Use limited-time discounts and offers.",
            "Include low-stock or limited-seat messages.",
            "Highlight fast shipping or limited bonuses.",
            "Mention seasonal or event-specific urgency."
        ]
    }
];

function Guides() {
    return (
        <div>
            {/* Header */}
            <section className="bg-blue-50 dark:bg-gray-900 py-16 px-6 text-center">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                    Digital Marketing Guides
                </h1>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Learn how to improve your online presence, run ads, and grow your business step by step.
                </p>
            </section>

            {/* Guides */}
            <section className="py-12 px-6 max-w-3xl mx-auto space-y-16 text-left">
                {guides.map((guide, index) => (
                    <article
                        key={index}
                        className={`pb-10 ${index !== guides.length - 1 ? 'border-b border-gray-200 dark:border-gray-700' : ''}`}
                    >
                        <div className="flex items-center gap-3 mb-2">
                            {guide.icon}
                            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-400">
                                {guide.title}
                            </h2>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Updated: {guide.date}</p>
                        <div className="mt-4 space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                            {guide.steps.map((step, i) => (
                                <p key={i}><strong>Step {i + 1}:</strong> {step}</p>
                            ))}
                        </div>
                    </article>
                ))}
            </section>

            {/* CTA */}
            <section className="bg-blue-600 text-white py-12 text-center">
                <h2 className="text-3xl font-bold mb-4">Want More Help?</h2>
                <p className="mb-6">We offer personalized marketing audits. Let’s grow your business together.</p>
                <a href="/contact" className="bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition">
                    Contact Us
                </a>
            </section>
        </div>
    );
}

export default Guides;
