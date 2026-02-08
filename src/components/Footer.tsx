import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Globe, Linkedin, Twitter, Github } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                    <div className="lg:col-span-2">
                        <Link to="/" className="flex items-center space-x-2 mb-6">
                            <div className="bg-primary-600 p-2 rounded-lg">
                                <Database className="h-5 w-5 text-white" />
                            </div>
                            <span className="font-bold text-xl text-gray-900">360data-solutions</span>
                        </Link>
                        <p className="text-gray-500 mb-6 max-w-sm">
                            Empowering businesses with next-generation data processing and artificial intelligence solutions.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                                <Globe className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                                <Github className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
                        <ul className="space-y-3">
                            <li><Link to="/features" className="text-gray-500 hover:text-primary-600 transition-colors">Features</Link></li>
                            <li><Link to="/integrations" className="text-gray-500 hover:text-primary-600 transition-colors">Integrations</Link></li>
                            <li><Link to="/enterprise" className="text-gray-500 hover:text-primary-600 transition-colors">Enterprise</Link></li>
                            <li><Link to="/solutions" className="text-gray-500 hover:text-primary-600 transition-colors">Solutions</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
                        <ul className="space-y-3">
                            <li><Link to="/docs" className="text-gray-500 hover:text-primary-600 transition-colors">Documentation</Link></li>
                            <li><Link to="/api" className="text-gray-500 hover:text-primary-600 transition-colors">API Reference</Link></li>
                            <li><Link to="/community" className="text-gray-500 hover:text-primary-600 transition-colors">Community</Link></li>
                            <li><Link to="/blog" className="text-gray-500 hover:text-primary-600 transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
                        <ul className="space-y-3">
                            <li><Link to="/terms" className="text-gray-500 hover:text-primary-600 transition-colors">Terms of Service</Link></li>
                            <li><Link to="/privacy" className="text-gray-500 hover:text-primary-600 transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/cookies" className="text-gray-500 hover:text-primary-600 transition-colors">Cookie Policy</Link></li>
                            <li><Link to="/security" className="text-gray-500 hover:text-primary-600 transition-colors">Security</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © 2024 360data-solutions. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-2 mt-4 md:mt-0">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <span className="text-sm text-gray-500">Systems Operational</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
