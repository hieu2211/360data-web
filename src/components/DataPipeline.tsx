import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Brain, LayoutDashboard, Zap, Activity } from 'lucide-react';

const pipelineSteps = [
    {
        id: 'ingest',
        title: 'Intelligent Ingestion',
        icon: Database,
        description: 'Auto-detect sources and schema changes.',
        color: 'from-blue-400 to-blue-600',
        glow: 'shadow-blue-500/50',
    },
    {
        id: 'process',
        title: 'Smart Processing',
        icon: Server,
        description: 'AI-driven cleaning and normalization.',
        color: 'from-indigo-400 to-indigo-600',
        glow: 'shadow-indigo-500/50',
    },
    {
        id: 'analyze',
        title: 'Deep Analysis',
        icon: Brain,
        description: 'Predictive models and pattern recognition.',
        color: 'from-purple-400 to-purple-600',
        glow: 'shadow-purple-500/50',
    },
    {
        id: 'visualize',
        title: 'Actionable Insights',
        icon: LayoutDashboard,
        description: 'Dynamic dashboards with NLP querying.',
        color: 'from-pink-400 to-pink-600',
        glow: 'shadow-pink-500/50',
    },
];

const DataPipeline: React.FC = () => {
    return (
        <section className="py-24 bg-gray-900 relative overflow-hidden">
            {/* Background Grid & Ambient Glow */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900 via-transparent to-gray-900"></div>

                {/* Animated Orbs in Background */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 10, repeat: Infinity, delay: 2 }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800 border border-gray-700 text-blue-400 text-sm font-medium mb-6">
                            <Activity className="w-4 h-4 mr-2 animate-pulse" />
                            Live Data Flow
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            End-to-End <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Intelligent Pipeline</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Watch your data transform from raw pulses into strategic power.
                            AI agents monitor, optimize, and secure the flow at every millisecond.
                        </p>
                    </motion.div>
                </div>

                <div className="relative">
                    {/* The Connection Line (Pipeline) */}
                    <div className="hidden md:block absolute top-[60px] left-0 w-full h-[2px] bg-gray-800 z-0">
                        {/* Flowing Energy Beam */}
                        <motion.div
                            className="absolute top-0 left-0 h-full w-[200px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                            animate={{ x: ['-20%', '550%'] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                            style={{ boxShadow: '0 0 20px 2px rgba(59, 130, 246, 0.5)' }}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
                        {pipelineSteps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="group relative"
                            >
                                {/* Connector Dot on Line */}
                                <div className="hidden md:flex absolute top-[60px] left-1/2 -ml-2 -mt-2 w-4 h-4 rounded-full bg-gray-900 border-2 border-gray-700 z-0 items-center justify-center">
                                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                                </div>

                                <div className="bg-gray-800/50 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50 hover:border-gray-600 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden group">
                                    {/* Hover Gradient Background */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                    {/* Glowing Icon Container */}
                                    <div className="relative mb-8 flex justify-center">
                                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} p-[1px] relative z-10`}>
                                            <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center relative overflow-hidden">
                                                <step.icon className="w-8 h-8 text-white relative z-10" />
                                                {/* Icon Inner Glow */}
                                                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-20 blur-md group-hover:opacity-40 transition-opacity`} />
                                            </div>
                                        </div>
                                        {/* Outer Bloom */}
                                        <div className={`absolute inset-0 bg-gradient-to-b ${step.color} opacity-20 blur-xl scale-150 rounded-full group-hover:opacity-40 transition-opacity duration-500`} />

                                        {/* AI Badge Pilling */}
                                        <div className="absolute -top-3 -right-3 z-20">
                                            <motion.div
                                                animate={{ scale: [1, 1.1, 1] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                className="bg-gray-900 border border-gray-700 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg flex items-center"
                                            >
                                                <Zap className={`w-3 h-3 mr-1 text-${step.color.split('-')[1]}-400`} /> AI
                                            </motion.div>
                                        </div>
                                    </div>

                                    <div className="text-center relative z-10">
                                        <h4 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-colors">
                                            {step.title}
                                        </h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DataPipeline;
