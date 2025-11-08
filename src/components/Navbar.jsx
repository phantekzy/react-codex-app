/* Import section */
import { Menu, X } from "lucide-react";
import { useState } from "react";
/* Navbar component section */
export default function Navbar({ scrolled }) {
    /* useState section */
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
    /* Return section */
    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
            ? "bg-slate-950/80 backdrop-blur-lg border-b border-slate-800"
            : "bg-slate-950/20 backdrop-blur-sm"
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Navigation bar */}
                <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
                    <div className="flex items-center space-x-1 group cursor-pointer">
                        {/* Logo section */}
                        <div>
                            {/* Logo image */}
                            <img
                                src="/logo.png"
                                alt="CodEx"
                                className="w-10 h-10 sm:w-20 sm:h-20"
                            />
                        </div>
                        {/* Logo text span */}
                        <span className="text-lg sm:text-xl md:text-2xl font-medium">
                            <span className="text-white">cod</span>
                            <span className="text-blue-300">Ex</span>
                        </span>
                    </div>
                    {/* Navigation links */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        {/* links of navigations */}
                        <a href="#features" className="text-gray-300 hover:text-white text-sm lg:text-base">Feature</a>
                        <a href="#pricing" className="text-gray-300 hover:text-white text-sm lg:text-base">Pricing</a>
                        <a href="#testimonials" className="text-gray-300 hover:text-white text-sm lg:text-base">Testimonials</a>
                    </div>

                    <button className="md:hidden p-2 text-gray-300 hover:text-white"
                        onClick={() => setMobileMenuIsOpen((prev) => !prev)}>
                        {mobileMenuIsOpen ?
                            (<X className="w-5 h-5 sm:w-6 sm:h-6" />) :
                            < Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                        }
                    </button>
                </div>
            </div>

            {/* Mobile menu section */}
            {mobileMenuIsOpen && (
                <div className="md:hidden bg-blue-500/35 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
                    <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
                        <a href="#features" onClick={() => setMobileMenuIsOpen(false)} className="block text-gray-300 hover:text-white text-sm lg:text-base text-center">Feature</a>
                        <a href="#pricing" onClick={() => setMobileMenuIsOpen(false)} className=" block text-gray-300 hover:text-white text-sm lg:text-base text-center">Pricing</a>
                        <a href="#testimonials" onClick={() => setMobileMenuIsOpen(false)} className="block text-gray-300 hover:text-white text-sm lg:text-base text-center">Testimonials</a>

                    </div>
                </div>
            )
            }
        </nav>
    );
}
