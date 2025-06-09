import React from 'react';
import { Helmet } from 'react-helmet';

const PrivacyPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <Helmet>
                <title>Privacy Policy | Digital Marketer Portfolio</title>
                <meta name="description" content="Our privacy policy regarding data collection and usage" />
            </Helmet>

            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

            <div className="space-y-4 text-black dark:text-white">
                <section>
                    <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
                    <p>We may collect personal information such as your name, email address, and contact details when you interact with our portfolio website or services.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
                    <p>We use the information to respond to your inquiries, improve our services, and communicate with you about our marketing services. We will never sell your personal information to third parties.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">3. Cookies and Tracking</h2>
                    <p>Our website uses cookies to analyze traffic and improve user experience. You can control cookies through your browser settings.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
                    <p>We implement appropriate security measures to protect your personal information from unauthorized access or disclosure.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">5. Changes to This Policy</h2>
                    <p>We may update this privacy policy periodically. The latest version will always be posted on this page.</p>
                </section>

                <p className="mt-6">Last Updated: {new Date().toLocaleDateString()}</p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;