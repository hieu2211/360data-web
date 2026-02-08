import React from 'react';
import { Link } from 'react-router-dom';

const CTA: React.FC = () => {
    return (
        <section className="bg-primary-600 py-20 relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-10">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100" height="100" fill="url(#grid)" />
                </svg>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Ready to transform your business?
                </h2>
                <p className="text-xl text-primary-100 mb-10">
                    Schedule a free consultation with our AI strategists to discuss your data needs and find the right solution for you.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        to="/contact"
                        className="bg-white text-primary-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-lg"
                    >
                        Get a Free Consultation
                    </Link>
                    <Link
                        to="/pricing"
                        className="bg-primary-700 text-white border border-primary-500 px-8 py-4 rounded-xl font-bold hover:bg-primary-800 transition-colors"
                    >
                        Contact Sales
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTA;
