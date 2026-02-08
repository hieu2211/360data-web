import React from 'react';
import { Home, BarChart2, Users, Settings, Bell, Search, LogOut, Database, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
                <div className="h-16 flex items-center px-6 border-b border-gray-200">
                    <Database className="h-6 w-6 text-primary-600 mr-2" />
                    <span className="font-bold text-gray-900">360data</span>
                </div>

                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    <a href="#" className="flex items-center px-4 py-3 text-gray-700 bg-gray-100 rounded-lg font-medium">
                        <Home className="h-5 w-5 mr-3 text-gray-500" />
                        Overview
                    </a>
                    <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors font-medium">
                        <BarChart2 className="h-5 w-5 mr-3 text-gray-400" />
                        Analytics
                    </a>
                    <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors font-medium">
                        <Layers className="h-5 w-5 mr-3 text-gray-400" />
                        Pipelines
                    </a>
                    <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors font-medium">
                        <Users className="h-5 w-5 mr-3 text-gray-400" />
                        Team
                    </a>
                    <a href="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors font-medium">
                        <Settings className="h-5 w-5 mr-3 text-gray-400" />
                        Settings
                    </a>
                </nav>

                <div className="p-4 border-t border-gray-200">
                    <div className="flex items-center space-x-3 mb-4">
                        <img src="https://i.pravatar.cc/150?u=dashboard" alt="User" className="h-10 w-10 rounded-full" />
                        <div>
                            <div className="text-sm font-medium text-gray-900">John Doe</div>
                            <div className="text-xs text-gray-500">Admin</div>
                        </div>
                    </div>
                    <Link to="/login" className="flex items-center text-sm text-red-600 hover:text-red-700 font-medium">
                        <LogOut className="h-4 w-4 mr-2" /> Sign Out
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
                    <div className="flex items-center w-96">
                        <Search className="h-5 w-5 text-gray-400 mr-2" />
                        <input type="text" placeholder="Search..." className="flex-1 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400" />
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="relative p-2 text-gray-400 hover:text-gray-600">
                            <Bell className="h-5 w-5" />
                            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500 border border-white"></span>
                        </button>
                    </div>
                </header>

                {/* Body */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                        {[
                            { label: 'Total Requests', value: '2.4M', change: '+12%', color: 'blue' },
                            { label: 'Avg. Latency', value: '45ms', change: '-5%', color: 'green' },
                            { label: 'Error Rate', value: '0.1%', change: '0%', color: 'gray' },
                            { label: 'Active Users', value: '1,240', change: '+8%', color: 'purple' },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <div className="text-gray-500 text-sm font-medium mb-1">{stat.label}</div>
                                <div className="flex items-end justify-between">
                                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                                    <div className={`text-sm font-semibold ${stat.change.startsWith('+') ? 'text-green-600' : stat.change.startsWith('-') ? 'text-green-600' : 'text-gray-600'}`}>
                                        {stat.change}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-80">
                            <h3 className="font-bold text-gray-900 mb-4">Traffic Overview</h3>
                            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400 text-sm border border-dashed border-gray-300">
                                Chart Visualization Placeholder
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-80">
                            <h3 className="font-bold text-gray-900 mb-4">Recent Activity</h3>
                            <ul className="space-y-4">
                                {[1, 2, 3, 4].map((j) => (
                                    <li key={j} className="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                                        <div className="h-2 w-2 rounded-full bg-blue-500 mt-2"></div>
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">New pipeline deployed</div>
                                            <div className="text-xs text-gray-500">2 hours ago by Sarah</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
