import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Database } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="bg-primary-600 p-2 rounded-lg">
                            <Database className="h-6 w-6 text-white" />
                        </div>
                        <span className={`font-bold text-xl ${scrolled ? 'text-gray-900' : 'text-white'} transition-colors duration-300`}>
                            360data-solutions
                        </span>
                    </Link>

                    <div className="hidden md:flex space-x-8">
                        <Link to="/solutions" className={`${scrolled ? 'text-gray-600 hover:text-primary-600' : 'text-slate-300 hover:text-white'} transition-colors`}>Solutions</Link>
                        <Link to="/platform" className={`${scrolled ? 'text-gray-600 hover:text-primary-600' : 'text-slate-300 hover:text-white'} transition-colors`}>Platform</Link>
                        <Link to="/pricing" className={`${scrolled ? 'text-gray-600 hover:text-primary-600' : 'text-slate-300 hover:text-white'} transition-colors`}>Pricing</Link>
                        <Link to="/company" className={`${scrolled ? 'text-gray-600 hover:text-primary-600' : 'text-slate-300 hover:text-white'} transition-colors`}>Company</Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/login" className={`${scrolled ? 'text-gray-600 hover:text-primary-600' : 'text-white hover:text-blue-300'} font-medium transition-colors`}>Log In</Link>
                        <Link
                            to="/signup"
                            className="bg-primary-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/30"
                        >
                            Get Started
                        </Link>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`${scrolled ? 'text-gray-600' : 'text-white'} hover:text-primary-600 focus:outline-none`}
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2 text-center">
                            <Link to="/solutions" className="block py-3 text-gray-600 hover:text-primary-600 font-medium">Solutions</Link>
                            <Link to="/platform" className="block py-3 text-gray-600 hover:text-primary-600 font-medium">Platform</Link>
                            <Link to="/pricing" className="block py-3 text-gray-600 hover:text-primary-600 font-medium">Pricing</Link>
                            <Link to="/company" className="block py-3 text-gray-600 hover:text-primary-600 font-medium">Company</Link>
                            <div className="pt-4 space-y-3">
                                <Link to="/login" className="block w-full text-center text-gray-600 hover:text-primary-600 font-medium">Log In</Link>
                                <Link
                                    to="/signup"
                                    className="block w-full bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 shadow-lg shadow-primary-500/30"
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
