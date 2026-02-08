import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Have questions about our platform? Our team is here to help you get started.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Contact Info */}
                    <div className="bg-primary-600 p-12 text-white">
                        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                        <p className="text-primary-100 mb-12">
                            Fill out the form and our team will get back to you within 24 hours.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <MapPin className="h-6 w-6 text-primary-200 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-lg">Our Office</h4>
                                    <p className="text-primary-100">123 Innovation Drive, Suite 400<br />San Francisco, CA 94105</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Phone className="h-6 w-6 text-primary-200 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-lg">Phone</h4>
                                    <p className="text-primary-100">+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Mail className="h-6 w-6 text-primary-200 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-lg">Email</h4>
                                    <p className="text-primary-100">support@360data-solutions.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-20">
                            <div className="flex space-x-4">
                                {/* Social icons placeholder */}
                                <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center hover:bg-primary-400 transition-colors cursor-pointer">
                                    <span className="text-xl">🐦</span>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center hover:bg-primary-400 transition-colors cursor-pointer">
                                    <span className="text-xl">💼</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="p-12">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                    <input type="text" id="first-name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" />
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                    <input type="text" id="last-name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-primary-600 text-white py-3 rounded-lg font-bold hover:bg-primary-700 transition-colors shadow-lg flex items-center justify-center">
                                <Send className="h-4 w-4 mr-2" /> Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
