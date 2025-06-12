import React from 'react';
import { sections } from '@/data/termsConditions';
const TermsAndConditions = () => {

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mt-20">Terms & Conditions</h1>

            <div className="space-y-4 text-black dark:text-white">
                {sections.map((section, index) => (
                    <section key={index}>
                        <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
                        <p>{section.content}</p>
                    </section>
                ))}

                <small className="block mt-6 text-sm text-gray-600 dark:text-gray-400">
                    Last Updated: {new Date().toLocaleDateString()}
                </small>
            </div>
        </div>
    );
};

export default TermsAndConditions;
