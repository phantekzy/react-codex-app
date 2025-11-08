/* Import section */
import { Check, Star } from "lucide-react";
/* Pricing plans section */
const plans = [
    {
        name: "Starter",
        price: "Free",
        description: "Get started with core AI coding tools. Perfect for beginners exploring CodEx.",
        features: [
            "Basic AI code completion",
            "Syntax highlighting",
            "1 active project",
            "Community support"
        ],
        mostPopular: false,
        buttonText: "Unlock Starter",
    },
    {
        name: "Pro",
        price: "$12/month",
        description: "Unlock powerful AI assistance for daily coding and small team projects.",
        features: [
            "Full AI code suggestions",
            "Debugging & explanations",
            "Unlimited projects",
            "Priority email support"
        ],
        mostPopular: true,
        buttonText: "Power Up Pro",
    },
    {
        name: "Enterprise",
        price: "$39/month",
        description: "For advanced developers and teams needing collaboration and custom models.",
        features: [
            "Custom AI fine-tuning",
            "Team collaboration tools",
            "Advanced refactoring",
            "24/7 dedicated support"
        ],
        mostPopular: false,
        buttonText: "Claim Ultimate",
    }
];
export default function Pricing() {
    return <section id="pricing"
        className=" py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative">
        {/* IDE prices section */}
        {/* Title section */}
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                    <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent"> Choose your power</span>
                    <br />
                    <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">Pay only for what you need</span>
                </h2>
                <p className="text-gray-400 text-base text-xl sm:text-lg max-w-2xl mx-auto">Advanced AI features and smart tools at a price that makes sense for every developer</p>
            </div>

            {/* Prices choice option */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6">
                {plans.map((plan, key) => (
                    <div key={key} className={`relative bg-slate-900/50 backdrop-blur-sm  border rounded-xl sm:rounded-2xl p-6 sm:p-8 
                            transition-all duration-300 overflow-visible group flex flex-col h-full
                            ${plan.mostPopular ? "border-blue-500 shadow-2xl shadow-blue-500/20 lg:scale-105"
                            : "border-slate-800 hover:border-slate-700"}`}>

                        {plan.mostPopular && (
                            <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 z-10">
                                <div className="flex items-center space-x-1 px-3 sm:px-4 py-1 sm:py-1.5 bg-gradient-to-b from-blue-500 to-cyan-500 
                                    rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                                    <Star className="w-3 h-3  sm:w-3 sm:h-3 fill-white" />
                                    <span>Most Popular</span>
                                </div>
                            </div>
                        )}

                        {/* Price cards */}
                        <div className="text-center mb-6 sm:mb-8">
                            <h3 className="text-xl sm:text-2xl font-bold mb-2">{plan.name}</h3>
                            <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">{plan.description}</p>
                            <div className="flex items-baseline justify-center">
                                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold
                                    bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent
                                    ">{plan.price}</span>

                            </div>
                        </div>

                        {/* Plan features */}
                        <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-row">
                            {plan.features.map((feature, featureKey) => (
                                <li key={featureKey} className="flex items-start space-x-2 sm:space-x-3 ">
                                    <div className=" flex-shrink-0  w-4 h-4  sm:w-4 sm:h-4 rounded-full bg-blue-500/20 
                                                    flex items-center justify-center mt-0.5">
                                        <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-400" />
                                    </div>
                                    <span className="text-gray-300 text-small sm:text-base">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Pusrchase buttons */}
                        <button className={`group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/10 
                            rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-white/10 flex items-center 
                            justify-center space-x-2
                            ${plan.mostPopular
                                ? "bg-gradient-to-b from-blue-500 to-cyan-500"
                                : "bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-700"
                            }
                            `}>
                            <span>{plan.buttonText}</span>
                        </button>
                    </div>
                ))}
            </div>
            {/* Contact support team section */}
            <div className="mt-8 sm:mt-12 text-center">
                <p className="text-gray-400 text-base text-xl">
                    Need a custom plan?
                    <a href="#" className="text-blue-400 hover:text-blue-300">Contact codEx sales team</a>
                </p>
            </div>
        </div>
    </section>
}
