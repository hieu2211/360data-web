import React from 'react';
import Features from '../components/Features';
import CTA from '../components/CTA';

const Solutions: React.FC = () => {
    return (
        <>
            <div className="pt-24 pb-12 bg-white text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Enterprise Solutions</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto px-4">
                    Tailored AI and data strategies for every industry vertical.
                </p>
            </div>
            <Features />
            <div className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Industries We Serve</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {['Fintech', 'Healthcare', 'E-commerce', 'Logistics', 'Energy', 'Manufacturing', 'Retail', 'Education'].map((industry) => (
                            <div key={industry} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 font-semibold text-gray-700 hover:text-primary-600 hover:shadow-md transition-all cursor-pointer">
                                {industry}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <CTA />
        </>
    );
};

export default Solutions;
