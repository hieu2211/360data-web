import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
    const plans = [
        {
            name: "Starter",
            price: "Free",
            description: "For small teams experimenting with data.",
            features: [
                "100GB Data Processing / mo",
                "Basic AI Models",
                "Community Support",
                "1 User",
                "Public API Access"
            ],
            cta: "Get Started Free",
            featured: false
        },
        {
            name: "Professional",
            price: "$499",
            period: "/mo",
            description: "For growing businesses scaling their operations.",
            features: [
                "10TB Data Processing / mo",
                "Advanced AI Models",
                "Priority Email Support",
                "10 Users",
                "Private API Access",
                "Custom Dashboards"
            ],
            cta: "Start 14-Day Trial",
            featured: true
        },
        {
            name: "Enterprise",
            price: "Custom",
            description: "For large organizations with complex needs.",
            features: [
                "Unlimited Data Processing",
                "Custom Model Training",
                "24/7 Dedicated Support",
                "Unlimited Users",
                "SLA Guarantees",
                "On-premise Deployment"
            ],
            cta: "Contact Sales",
            featured: false
        }
    ];

    return (
        <div className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Choose the plan that best fits your business needs. No hidden fees.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl p-8 border ${plan.featured ? 'border-primary-600 ring-2 ring-primary-100 shadow-xl relative' : 'border-gray-200 shadow-sm hover:shadow-md transition-shadow'}`}
                        >
                            {plan.featured && <div className="absolute top-0 right-0 -mr-1 -mt-1 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wide">Popular</div>}
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                            <div className="flex items-baseline mb-4">
                                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                                {plan.period && <span className="text-gray-500 ml-1">{plan.period}</span>}
                            </div>
                            <p className="text-gray-600 mb-6 text-sm">{plan.description}</p>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                                        <span className="text-gray-600 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to={plan.name === 'Enterprise' ? '/contact' : '/signup'}
                                className={`block w-full text-center py-3 rounded-xl font-semibold transition-colors ${plan.featured ? 'bg-primary-600 text-white hover:bg-primary-700' : 'bg-primary-50 text-primary-700 hover:bg-primary-100'}`}
                            >
                                {plan.cta}
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-500">Not sure which plan is right for you?</p>
                    <Link to="/contact" className="text-primary-600 font-medium hover:underline mt-2 inline-block">Talk to our sales team</Link>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
