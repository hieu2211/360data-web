import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Star, Eye, EyeOff } from 'lucide-react';


const Signup: React.FC = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
        <div className="min-h-screen flex bg-white">
            {/* Left Panel */}
            <div className="hidden lg:flex lg:w-1/2 bg-[#020817] p-12 flex-col justify-between relative overflow-hidden">
                {/* Background Network Animation */}
                <div className="absolute inset-0 z-0 opacity-40">
                    <svg className="h-full w-full" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice">
                        <path d="M100 100 L 200 200 L 500 100" stroke="#38bdf8" strokeWidth="1" fill="none" opacity="0.5" />
                        <path d="M50 500 L 300 300 L 600 600" stroke="#0ea5e9" strokeWidth="1" fill="none" opacity="0.4" />
                        <circle cx="200" cy="200" r="4" fill="#38bdf8" />
                        <circle cx="500" cy="100" r="3" fill="#38bdf8" />
                        <circle cx="300" cy="300" r="5" fill="#0ea5e9" />
                        {/* Add more fake network nodes/lines */}
                        {[...Array(20)].map((_, i) => (
                            <circle key={i} cx={Math.random() * 800} cy={Math.random() * 800} r={Math.random() * 3 + 1} fill="#0ea5e9" opacity="0.6" />
                        ))}
                    </svg>
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
                    <div className="flex space-x-1 mb-6">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} className="h-5 w-5 text-yellow-500 fill-current" />
                        ))}
                    </div>
                    <blockquote className="text-3xl font-medium text-white leading-tight mb-8">
                        "This platform completely transformed how we analyze customer data. The AI insights are incredibly accurate and helped us grow 300% in a year."
                    </blockquote>
                    <div className="flex items-center space-x-4">
                        <img src="https://i.pravatar.cc/150?u=sarah" alt="Sarah Jenkins" className="h-12 w-12 rounded-full border-2 border-white/20" />
                        <div>
                            <div className="text-white font-bold">Sarah Jenkins</div>
                            <div className="text-gray-400 text-sm">CTO, TechFlow Inc.</div>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 text-gray-400 text-sm">
                    © 2024 360data-solutions.
                </div>
            </div>

            {/* Right Panel - Form */}
            <div className="w-full lg:w-1/2 overflow-y-auto">
                <div className="min-h-full flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24 py-12">
                    <div className="flex justify-end mb-8">
                        <span className="text-sm text-gray-500">Already have an account? <Link to="/login" className="font-semibold text-primary-600 hover:text-primary-500">Sign In</Link></span>
                    </div>

                    <div className="mx-auto w-full max-w-sm lg:w-96">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Unlock Enterprise AI</h2>
                        <p className="text-gray-500 mb-8">Join 10,000+ companies using data to drive decisions. Start your 14-day free trial today.</p>

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
                                <span className="px-2 bg-white text-gray-500 uppercase">Or register with email</span>
                            </div>
                        </div>

                        <form className="space-y-5">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input type="text" id="fullname" placeholder="e.g. John Doe" className="w-full px-4 py-2 bg-gray-50 border border-gray-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:bg-white focus:outline-none transition-colors" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input type="tel" id="phone" placeholder="+1 (555) 000-0000" className="w-full px-4 py-2 bg-gray-50 border border-gray-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:bg-white focus:outline-none transition-colors" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
                                <input type="email" id="email" placeholder="name@company.com" className="w-full px-4 py-2 bg-gray-50 border border-gray-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:bg-white focus:outline-none transition-colors" />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                                    <input type="text" id="company" placeholder="Acme Inc." className="w-full px-4 py-2 bg-gray-50 border border-gray-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:bg-white focus:outline-none transition-colors" />
                                </div>
                                <div>
                                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">Job Role</label>
                                    <select id="role" className="w-full px-4 py-2 bg-gray-50 border border-gray-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:bg-white focus:outline-none transition-colors text-gray-500">
                                        <option>Select your role</option>
                                        <option>CTO</option>
                                        <option>Developer</option>
                                        <option>Product Manager</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Create Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        placeholder="At least 8 characters"
                                        className="w-full px-4 py-2 pl-10 bg-gray-50 border border-gray-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:bg-white focus:outline-none transition-colors"
                                    />
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="text-gray-400 text-lg">🔒</span>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                                    >
                                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    </button>
                                </div>
                                <p className="mt-1 text-xs text-gray-400">Must contain 1 uppercase letter, 1 number, and 1 special character.</p>
                            </div>

                            <div className="flex items-start">
                                <input id="terms" type="checkbox" className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded mt-1" />
                                <label htmlFor="terms" className="ml-2 block text-sm text-gray-500">
                                    I agree to the <Link to="/terms" className="text-primary-600 hover:text-primary-500">Terms of Service</Link> and <Link to="/privacy" className="text-primary-600 hover:text-primary-500">Privacy Policy</Link>. I consent to receiving product updates.
                                </label>
                            </div>

                            <button type="submit" className="w-full bg-primary-600 text-white py-3 rounded-lg font-bold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/30">
                                Create Account
                            </button>

                            <p className="text-xs text-center text-gray-500">No credit card required for trial.</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
