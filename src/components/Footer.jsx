/* Import section */
import { Github, Linkedin, Mailbox, Twitter } from "lucide-react";
/* Footer links section */
const footerLinks = {
    Product: ["Features", "Pricing", "Security", "Roadmap", "Changelog"],
    Company: ["About", "Careers", "Blog", "Press", "Partners"],
    Resources: ["Documentation", "Help Center", "Community", "API Reference", "System Status"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookies Policy", "Licenses", "Compliance"],
};
/* Footer components */
export default function Footer() {
    /* Return section */
    return (
        <footer className="border-t border-slate-800 bg-slate-950/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 items-start">
                    {/* Left: Logo & description */}
                    <div className="col-span-1 sm:col-span-3 lg:col-span-2 flex flex-col justify-start">
                        <div className="flex items-center space-x-2 mb-3">
                            <img src="/logo.png" className="w-10 h-10 sm:w-12 sm:h-12" />
                            <span className="text-lg sm:text-xl font-bold">
                                <span className="text-white">cod</span>
                                <span className="text-blue-300">Ex</span>
                            </span>
                        </div>
                        <p className="text-gray-400 mb-4 sm:mb-6 max-w-xs sm:max-w-full text-sm sm:text-base">
                            Compile your ideas with codEx.
                        </p>
                        {/* Social icons */}
                        <div className="flex space-x-3 sm:space-x-4">
                            <a href="#" className="p-2 sm:p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200">
                                <Twitter className="w-5 h-5 sm:w-5 sm:h-5" />
                            </a>
                            <a href="#" className="p-2 sm:p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200">
                                <Github className="w-5 h-5 sm:w-5 sm:h-5" />
                            </a>
                            <a href="#" className="p-2 sm:p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200">
                                <Linkedin className="w-5 h-5 sm:w-5 sm:h-5" />
                            </a>
                            <a href="#" className="p-2 sm:p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-200">
                                <Mailbox className="w-5 h-5 sm:w-5 sm:h-5" />
                            </a>
                        </div>
                    </div>
                    {/* Right: Footer links */}
                    <div className="col-span-1 sm:col-span-3 lg:col-span-4">
                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
                            {Object.entries(footerLinks).map(([category, links]) => (
                                <div key={category}>
                                    <h3 className="font-semibold text-white mb-3 text-sm sm:text-base">
                                        {category}
                                    </h3>
                                    <ul className="space-y-2 sm:space-y-3">
                                        {links.map((link) => (
                                            <li key={link}>
                                                <a
                                                    href="#"
                                                    className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-base"
                                                >
                                                    {link}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}

