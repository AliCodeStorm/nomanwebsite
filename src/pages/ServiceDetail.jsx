import React from 'react';
import { useParams } from 'react-router-dom';
import { services } from '../data/services';

const ServiceDetail = () => {
    const { slug } = useParams();
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        return <div className="text-center mt-20">Service not found.</div>;
    }

    const Icon = service.icon;

    return (
        <div className="min-h-screen px-6 py-16 bg-white text-black dark:bg-black dark:text-white">
            <div className="max-w-4xl mx-auto space-y-6">
                <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                    <h1 className="text-3xl font-bold">{service.title}</h1>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300">{service.longDesc}</p>

                {service.image && (
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full rounded-lg shadow-lg max-h-[400px] object-cover"
                    />
                )}

                <div>
                    <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
                    <ul className="list-disc pl-5 space-y-1 text-gray-800 dark:text-gray-200">
                        {service.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
