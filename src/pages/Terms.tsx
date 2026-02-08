import React from 'react';
import { Calendar, Printer, FileText, Info, Shield, CheckCircle } from 'lucide-react';

const Terms: React.FC = () => {
    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 pt-32 pb-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                        <span>Home</span>
                        <span>/</span>
                        <span>Legal</span>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <p className="text-gray-600 max-w-2xl">
                            Please read these terms carefully before using our Data & AI services at 360data-solutions. These terms govern your use of our platform and define our relationship.
                        </p>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center text-sm text-gray-500">
                                <Calendar className="h-4 w-4 mr-2" />
                                Last updated: October 24, 2023
                            </div>
                            <button className="flex items-center px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
                                <Printer className="h-4 w-4 mr-2" /> Print
                            </button>
                            <button className="flex items-center px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
                                <FileText className="h-4 w-4 mr-2" /> PDF
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                    {/* Table of Contents */}
                    <div className="hidden lg:block">
                        <div className="sticky top-24">
                            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Table of Contents</h3>
                            <ul className="space-y-3 text-sm border-l-2 border-gray-100 pl-4">
                                <li><a href="#introduction" className="block text-primary-600 font-medium border-l-2 border-primary-600 -ml-[18px] pl-4">1. Introduction</a></li>
                                <li><a href="#data-rights" className="block text-gray-500 hover:text-gray-900">2. Data Rights & Usage</a></li>
                                <li><a href="#intellectual-property" className="block text-gray-500 hover:text-gray-900">3. Intellectual Property</a></li>
                                <li><a href="#obligations" className="block text-gray-500 hover:text-gray-900">4. User Obligations</a></li>
                                <li><a href="#liability" className="block text-gray-500 hover:text-gray-900">5. Limitation of Liability</a></li>
                                <li><a href="#termination" className="block text-gray-500 hover:text-gray-900">6. Termination</a></li>
                            </ul>

                            <div className="mt-8 bg-blue-50 p-6 rounded-xl">
                                <div className="flex items-center space-x-2 text-primary-700 font-semibold mb-2">
                                    <Info className="h-5 w-5" />
                                    <span>Need Help?</span>
                                </div>
                                <p className="text-sm text-blue-800 mb-4">
                                    If you have any questions about these terms, please contact our legal team.
                                </p>
                                <a href="#" className="text-sm font-medium text-primary-600 hover:underline">Contact Support →</a>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-3 space-y-12">

                        {/* Highlights */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                                    <Info className="h-5 w-5" />
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2">Full Transparency</h4>
                                <p className="text-sm text-gray-500">Clear definitions about service scope and agreement.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                                    <Shield className="h-5 w-5" />
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2">Secure Data</h4>
                                <p className="text-sm text-gray-500">Strict protocols on how we process your datasets.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                                    <CheckCircle className="h-5 w-5" />
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2">Fair Usage</h4>
                                <p className="text-sm text-gray-500">Guidelines to prevent misuse and ensure liability protection.</p>
                            </div>
                        </div>

                        <div id="introduction">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                            <p className="text-gray-600 mb-4">
                                Welcome to 360data-solutions. By accessing or using our website, API, or services, you agree to be bound by these Terms of Service. Please read them carefully. These terms define the relationship between you (the "User") and 360data-solutions (the "Company") regarding your use of our data processing and artificial intelligence solutions.
                            </p>
                            <p className="text-gray-600">
                                If you are entering into this agreement on behalf of a company or other legal entity, you represent that you have the authority to bind such entity and its affiliates to these terms and conditions. If you do not have such authority, or if you do not agree with these terms and conditions, you must not accept this agreement and may not use the services.
                            </p>
                        </div>

                        <div id="data-rights">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Data Rights & Usage</h2>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">2.1 User Data</h3>
                            <p className="text-gray-600 mb-4">
                                You retain all rights, title, and interest in and to the data you upload or otherwise provide to the Service ("User Data"). We do not claim ownership of your User Data.
                            </p>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">2.2 License to Host</h3>
                            <p className="text-gray-600 mb-6">
                                By submitting User Data to the Service, you grant 360data-solutions a worldwide, non-exclusive, royalty-free license to access, use, copy, reproduce, process, adapt, publish, transmit, host, and display that User Data solely for the purpose of providing, maintaining, and improving the Services.
                            </p>
                            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                                <h4 className="font-semibold text-blue-900 mb-1">AI Training Note:</h4>
                                <p className="text-sm text-blue-800">
                                    Unless explicitly opted-in via a separate Enterprise Agreement, 360data-solutions does not use your proprietary User Data to train our foundational models shared across other customers.
                                </p>
                            </div>
                        </div>

                        {/* Acceptance Box */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm mt-12">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Acceptance</h3>
                            <p className="text-sm text-gray-500 mb-6">
                                By clicking "Accept & Continue", you acknowledge that you have read, understand, and agree to be bound by these Terms of Service for 360data-solutions.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div className="flex items-center">
                                    <input id="accept-terms" type="checkbox" className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded" />
                                    <label htmlFor="accept-terms" className="ml-3 text-sm font-medium text-gray-700">
                                        I have read and agree to the Terms of Service
                                    </label>
                                </div>
                                <div className="flex space-x-3 w-full sm:w-auto">
                                    <button className="flex-1 sm:flex-none px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50">
                                        Decline
                                    </button>
                                    <button className="flex-1 sm:flex-none px-6 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 shadow-lg shadow-primary-500/30">
                                        Accept & Continue
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terms;
