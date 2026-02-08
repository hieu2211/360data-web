import React from 'react';
import { Target, Users, Globe, Award } from 'lucide-react';
import CTA from '../components/CTA';

const About: React.FC = () => {
    return (
        <>
            <div className="bg-white">
                {/* Header */}
                <div className="py-24 bg-gray-50 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Empowering the Future of Data</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto px-4">
                        At 360data-solutions, our mission is to make enterprise-grade AI and data infrastructure accessible to businesses of all sizes, enabling them to make smarter decisions faster.
                    </p>
                </div>

                {/* Stats */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
                    <div className="bg-white rounded-2xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-gray-900">
                        <div>
                            <div className="text-4xl font-bold text-primary-600 mb-2">5+</div>
                            <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Years Experience</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
                            <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Enterprise Clients</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-primary-600 mb-2">10PB</div>
                            <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Data Processed</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
                            <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Support Available</div>
                        </div>
                    </div>
                </div>

                {/* Values */}
                <section className="py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-primary-600 font-semibold tracking-wide uppercase mb-3">Our Values</h2>
                            <h3 className="text-3xl font-bold text-gray-900">What Drives Us</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="flex start space-x-4">
                                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 shrink-0">
                                    <Target className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">Precision & Accuracy</h4>
                                    <p className="text-gray-600">We believe that data is only as good as its accuracy. Our algorithms are rigorously tested to ensure the highest fidelity.</p>
                                </div>
                            </div>
                            <div className="flex start space-x-4">
                                <div className="bg-green-100 p-3 rounded-lg text-green-600 shrink-0">
                                    <Globe className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">Global Scale</h4>
                                    <p className="text-gray-600">Our infrastructure is built to scale globally from day one, supporting businesses across continents with low latency.</p>
                                </div>
                            </div>
                            <div className="flex start space-x-4">
                                <div className="bg-purple-100 p-3 rounded-lg text-purple-600 shrink-0">
                                    <Users className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">Customer First</h4>
                                    <p className="text-gray-600">We prioritize our customers' success above all else. Our team is dedicated to providing exceptional support and guidance.</p>
                                </div>
                            </div>
                            <div className="flex start space-x-4">
                                <div className="bg-yellow-100 p-3 rounded-lg text-yellow-600 shrink-0">
                                    <Award className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">Innovation</h4>
                                    <p className="text-gray-600">We are constantly pushing the boundaries of what is possible with AI and data, staying ahead of the curve.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team (Simple placeholder) */}
                <section className="py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-12">Meet the Leadership</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/150?img=${i + 5}`} alt="Team Member" className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900">Alex Morgan</h3>
                                    <p className="text-primary-600 text-sm mb-4">Co-Founder & CEO</p>
                                    <p className="text-gray-500 text-sm">Visionary leader with 15+ years in data science and enterprise software.</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <CTA />
            </div>
        </>
    );
};

export default About;
