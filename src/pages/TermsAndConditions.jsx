import React from 'react';
import { Helmet } from 'react-helmet';

const TermsAndConditions = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <Helmet>
                <title>Terms & Conditions | Digital Marketer Portfolio</title>
                <meta name="description" content="Terms and conditions for using our services" />
            </Helmet>

            <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

            <div className="space-y-4 text-black dark:text-white">
                <section>
                    <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
                    <p>By accessing and using this portfolio website, you accept and agree to be bound by these terms and conditions.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">2. Services Offered</h2>
                    <p>This portfolio showcases digital marketing services including but not limited to SEO, content marketing, social media management, and analytics.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">3. Intellectual Property</h2>
                    <p>All content on this website, including text, graphics, logos, and images, is the property of the digital marketer and protected by copyright laws.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">4. Limitation of Liability</h2>
                    <p>The digital marketer shall not be liable for any indirect, incidental, or consequential damages resulting from the use of information on this website.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">5. Governing Law</h2>
                    <p>These terms shall be governed by and construed in accordance with the laws of your jurisdiction.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">6. Contact Information</h2>
                    <p>For any questions regarding these terms, please contact us through the provided contact form.</p>
                </section>

                <p className="mt-6">Last Updated: {new Date().toLocaleDateString()}</p>
            </div>
        </div>
    );
};

export default TermsAndConditions;