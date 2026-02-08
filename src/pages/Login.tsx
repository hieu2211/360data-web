import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Zap } from 'lucide-react';

const Login: React.FC = () => {
    return (
        <div className="min-h-screen flex bg-white">
            {/* Left Panel */}
            <div className="hidden lg:flex lg:w-1/2 bg-[#020817] p-12 flex-col justify-between relative overflow-hidden">
                {/* Simple Abstract BG */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600 rounded-full filter blur-[128px] opacity-20" />
                </div>

                <div className="relative z-10">
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                            <Database className="h-6 w-6 text-white" />
                        </div>
                        <span className="font-bold text-xl text-white">360data-solutions</span>
                    </Link>
                </div>

                <div className="relative z-10 max-w-md">
                    <h2 className="text-4xl font-bold text-white mb-4">Welcome back!</h2>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        Sign in to access your dashboard, manage your data pipelines, and monitor your AI models in real-time.
                    </p>
                </div>

                <div className="relative z-10 text-gray-400 text-sm">
                    © 2024 360data-solutions.
                </div>
            </div>

            {/* Right Panel - Form */}
            <div className="w-full lg:w-1/2 overflow-y-auto">
                <div className="min-h-full flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24 py-12">
                    <div className="flex justify-end mb-8">
                        <span className="text-sm text-gray-500">New here? <Link to="/signup" className="font-semibold text-primary-600 hover:text-primary-500">Create an account</Link></span>
                    </div>

                    <div className="mx-auto w-full max-w-sm lg:w-96">
                        <div className="mb-8">
                            <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-xl mb-4">
                                <Zap className="h-6 w-6 text-primary-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">Sign in to platform</h2>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mb-6">
                            <button className="flex items-center justify-center py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="h-5 w-5 mr-2" alt="Google" />
                                <span className="text-sm font-medium text-gray-700">Google</span>
                            </button>
                            <button className="flex items-center justify-center py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                <img src="https://www.svgrepo.com/show/475661/linkedin-color.svg" className="h-5 w-5 mr-2" alt="LinkedIn" />
                                <span className="text-sm font-medium text-gray-700">LinkedIn</span>
                            </button>
                        </div>

                        <div className="relative mb-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500 uppercase">Or continue with email</span>
                            </div>
                        </div>

                        <form className="space-y-5">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                                <input type="email" id="email" className="w-full px-4 py-2 bg-gray-50 border border-gray-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:bg-white focus:outline-none transition-colors" />
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-1">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                    <a href="#" className="text-sm font-medium text-primary-600 hover:text-primary-500">Forgot password?</a>
                                </div>
                                <input type="password" id="password" className="w-full px-4 py-2 bg-gray-50 border border-gray-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:bg-white focus:outline-none transition-colors" />
                            </div>

                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded" />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <button type="submit" className="w-full bg-primary-600 text-white py-3 rounded-lg font-bold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/30">
                                Sign In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
