import React from 'react';
import { motion } from 'framer-motion';


const SuccessStories: React.FC = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-primary-600 font-semibold tracking-wide uppercase mb-3">Success Stories</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Real Results for Real Business</h3>
                    <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
                        Discover how leading companies are using 360data-solutions to revolutionize their operations.
                    </p>
                </div>

                <div className="space-y-24">
                    {/* Story 1: Retail */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    >
                        <div className="order-2 lg:order-1 bg-white rounded-3xl p-12 lg:p-16 border border-gray-100 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-full z-0 transition-transform group-hover:scale-110"></div>
                            <div className="relative z-10">
                                <div className="inline-flex items-center space-x-2 bg-orange-50 text-orange-700 text-xs font-bold px-3 py-1 rounded-full mb-6 border border-orange-100">
                                    <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                                    <span>RETAIL & COMMERCE</span>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">Reinventing Customer Experience with Predictive AI</h3>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    By unifying data from POS, e-commerce, and loyalty programs, we helped a national retailer deploy real-time personalization engines, boosting average order value by <span className="font-bold text-orange-600">35%</span> and preventing churn.
                                </p>
                                <a href="#" className="inline-flex items-center font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                                    Read the Case Study <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative rounded-3xl overflow-hidden shadow-2xl h-[500px] group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
                                alt="Retail analytics dashboard"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            {/* Floating Stats Card for "Impressive" look */}
                            <motion.div
                                initial={{ x: 20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl z-20 max-w-xs"
                            >
                                <div className="text-sm text-gray-500 font-medium mb-1">Total Revenue Growth</div>
                                <div className="text-3xl font-bold text-gray-900">+ $12.4M</div>
                                <div className="w-full bg-gray-200 h-1.5 mt-3 rounded-full overflow-hidden">
                                    <div className="bg-green-500 w-[85%] h-full rounded-full"></div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Story 2: Education */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
                                alt="Education collaborative learning"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            {/* Floating Stats Card */}
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl z-20 max-w-xs"
                            >
                                <div className="text-sm text-gray-500 font-medium mb-1">Dropout Reduction</div>
                                <div className="text-3xl font-bold text-gray-900">20%</div>
                                <div className="flex items-center mt-2 space-x-1">
                                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                                    <span className="text-xs text-gray-600">Above Target</span>
                                </div>
                            </motion.div>
                        </div>
                        <div className="bg-white rounded-3xl p-12 lg:p-16 border border-gray-100 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-100 rounded-br-full z-0 transition-transform group-hover:scale-110"></div>
                            <div className="relative z-10">
                                <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full mb-6 border border-indigo-100">
                                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                                    <span>EDUCATION & EDTECH</span>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">Adaptive Learning at University Scale</h3>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    We built an AI-powered student success platform that analyzes engagement metrics in real-time to intervene early. The result? A <span className="font-bold text-indigo-600">20%</span> reduction in dropout rates and personalized learning paths for 50,000+ students.
                                </p>
                                <a href="#" className="inline-flex items-center font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                                    Read the Case Study <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;
