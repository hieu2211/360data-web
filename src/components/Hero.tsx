import React from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950 text-white">
            {/* Animated Background Mesh */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow delay-1000" />
                <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-indigo-500/10 rounded-full blur-[100px] mix-blend-screen" />

                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Content */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-blue-300 text-sm font-medium mb-8">
                                <Sparkles className="h-4 w-4 mr-2 text-yellow-300" />
                                <span>The Future of Enterprise Intelligence</span>
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-1 mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-200">
                                Turn Data into <br />
                                <span className="text-blue-500">Infinite Possibility</span>
                            </h1>

                            <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                360data-solutions unifies your fractured data landscape into a single source of truth, powered by autonomous AI agents that predict, optimize, and act.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                                <Link
                                    to="/signup"
                                    className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-blue-600 px-8 font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-[0_0_20px_2px_rgba(37,99,235,0.5)] hover:scale-105"
                                >
                                    <span className="mr-2">Start Free Trial</span>
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                                <button className="group inline-flex h-12 items-center justify-center space-x-2 rounded-full px-8 text-white transition-all hover:bg-white/5 hover:text-blue-400">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-blue-500/20 text-white group-hover:text-blue-400">
                                        <Play className="h-3 w-3 fill-current" />
                                    </div>
                                    <span>Watch Demo</span>
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="mt-12 flex items-center justify-center lg:justify-start space-x-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
                        >
                            {/* Simple logos for trust placeholder */}
                            <div className="text-xl font-bold text-slate-500">Acme Corp</div>
                            <div className="text-xl font-bold text-slate-500">GlobalBank</div>
                            <div className="text-xl font-bold text-slate-500">TechStart</div>
                        </motion.div>
                    </div>

                    {/* Right Visual - Interactive/Parallax */}
                    <div className="lg:w-1/2 relative h-[500px] w-full hidden lg:block perspective-1000">
                        <motion.div style={{ y: y1 }} className="absolute top-10 right-10 z-20">
                            <div className="w-64 h-80 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500 hover:shadow-blue-500/20 group">
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                        <Sparkles size={20} />
                                    </div>
                                    <div>
                                        <div className="h-2 w-20 bg-slate-700 rounded mb-2"></div>
                                        <div className="h-2 w-12 bg-slate-700 rounded"></div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-24 w-full bg-slate-800/50 rounded-xl animate-pulse"></div>
                                    <div className="flex space-x-2">
                                        <div className="h-2 w-full bg-slate-700 rounded"></div>
                                        <div className="h-2 w-2/3 bg-slate-700 rounded"></div>
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-white/5">
                                        <div className="text-xs text-green-400 font-mono">+128% Efficiency</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div style={{ y: y2 }} className="absolute bottom-20 left-10 z-10">
                            <div className="w-72 h-64 bg-slate-800/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl transform rotate-[3deg] hover:rotate-0 transition-transform duration-500 group">
                                <div className="flex justify-between items-center mb-6">
                                    <div className="text-sm font-semibold text-slate-300">Live Prediction</div>
                                    <div className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">98.4% Acc</div>
                                </div>
                                <div className="flex items-end space-x-2 h-32 pb-2">
                                    {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
                                        <div key={i} className="flex-1 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-sm opacity-80 group-hover:opacity-100 transition-all duration-300" style={{ height: `${h}%` }}></div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Background Blob for Depth */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse"></div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-slate-500 to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
