import React from 'react';
import { Database, Zap, Lock, Globe, Cpu, BarChart3, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: Database,
        title: 'Cognitive Data Engineering',
        description: 'Self-healing pipelines that detect schema drift and optimize performance automatically without human intervention.',
        colSpan: 'md:col-span-2',
        bg: 'from-blue-500/20 to-cyan-500/20'
    },
    {
        icon: Cpu,
        title: 'Neural Core Processing',
        description: 'Distribute workloads across hybrid clouds intelligently with our proprietary processing engine.',
        colSpan: 'md:col-span-1',
        bg: 'from-purple-500/20 to-pink-500/20'
    },
    {
        icon: Lock,
        title: 'Military-Grade Security',
        description: 'End-to-end encryption with AI-driven threat detection.',
        colSpan: 'md:col-span-1',
        bg: 'from-emerald-500/20 to-teal-500/20'
    },
    {
        icon: BarChart3,
        title: 'Predictive Decisioning',
        description: 'Turn "what happened" into "what will happen" and "what should we do" in milliseconds.',
        colSpan: 'md:col-span-2',
        bg: 'from-orange-500/20 to-red-500/20'
    },
];

const Features: React.FC = () => {
    return (
        <section className="py-24 bg-slate-950 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4">Core Capabilities</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                            Built for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Exabyte Era</span>
                        </h3>
                    </div>
                    <div>
                        <p className="text-slate-400 max-w-sm text-lg">
                            Scalable, secure, and smart by default. The last data platform you'll ever need.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`${feature.colSpan} group relative overflow-hidden rounded-3xl bg-slate-900 border border-white/5 p-8 hover:border-white/10 transition-colors`}
                        >
                            {/* Hover Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div className="mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <feature.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-white mb-3">{feature.title}</h4>
                                    <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                                        {feature.description}
                                    </p>
                                </div>

                                <div className="flex items-center text-sm font-medium text-white opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    Learn more <ArrowUpRight className="ml-2 w-4 h-4" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
