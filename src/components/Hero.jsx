/* Import section */
import { ArrowRight, ChevronDownIcon, Play, Sparkles } from "lucide-react"
import { useEffect } from "react"
import { useState } from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { codeExemples, floatingCards } from "../data/codeExemples"
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs"
/* Hero function logic */
export default function Hero() {
    /* useState section */
    // Mouse state
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    // Active state
    const [activeTab, setActiveTab] = useState("app.jsx")
    /* UseEffect section */
    useEffect(() => {
        /* Mouse handler */
        function handelMouseMove(e) {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        /* Event listener */
        window.addEventListener('mousemove', handelMouseMove)
        /* Cleaning the event to avoid memory leaks */
        return () => window.removeEventListener('mousemove', handelMouseMove)
    }, [])
    /* Current tab shortcut */
    const currentCard = floatingCards[activeTab]
    /* Return section */
    return <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:p-8 overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px 
            , rgba(59,130,246,0.15),transparent 40%)`
        }} />

        <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse " />
        <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="max-w-7xl mx-auto text-center relative w-full">
            <div className="max-w-7xl mx-auto  flex flex-col lg:grid lg:grid-cols-2 text-center lg:text-left gap-6 sm:gap-8 lg:gap-12 items-center relative">
                <div>
                    <div className="inline-flex items-center  space-x-2 px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700">
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        <span className="text-blue-300 text-xs sm:text-sm">Introducing codEx 1.0 </span>
                    </div>
                    <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4  sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight">
                        <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">Code faster</span>
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent block mb-1 sm:mb-2">Think smarter</span>
                        <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">Build with AI</span>
                    </h1>
                    <p className="text-md sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700 delay-200 leading-relaxed">
                        codEx, developed by Imainigination Software Group, is an AI-powered IDE that helps developers code faster, smarter, and cleaner.
                        Built to turn imagination into innovation, it blends powerful AI assistance with a modern, intuitive interface.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12 animate-in slide-in-from-bottom duration-700 delay-300">
                        <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-b from-blue-600 to-blue-400 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2">
                            <span>Start coding</span>
                            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>

                        <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-white/10 flex items-center justify-center space-x-2">
                            <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors duration-300">
                                <Play className="h-4 w-4 sm:h-5 sm:w-5 fill-white" />
                            </div>
                            <span>Watch Demo</span>
                        </button>
                    </div>
                </div>
                <div className="relative order-2 w-full">
                    <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
                        <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:h-[350px] lg:h-[450px] border border-white/5">
                            {/* IDE HEADER */}
                            <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10">
                                {/* IDE window control */}
                                <div className="flex items-center space-x-2">
                                    <div className="flex items-center space-x-1 sm:space-x-2">
                                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500 " />
                                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500 " />
                                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 " />
                                    </div>
                                    <span className="text-xs sm:text-sm text-gray-300  ">codex</span>
                                </div>
                                <ChevronDownIcon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                            </div>

                            <div className="relative p-3 sm:p-4 h-full">
                                {/* File tabs section */}
                                <div className="flex space-x-1 sm:space-x-2 mb-3 sm:mb-4 overflow-x-auto">
                                    {/* app.jsx Tab */}
                                    <button
                                        onClick={() => setActiveTab("app.jsx")}
                                        className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${activeTab === "app.jsx"
                                            ? "bg-blue-500/30 text-white border-blue-400/20"
                                            : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"} 
                                        transition-all duration-200 whitespace-nowrap`}>App.jsx
                                    </button>
                                    {/* Hero.jsx Tab */}
                                    <button
                                        onClick={() => setActiveTab("Hero.jsx")}
                                        className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${activeTab === "Hero.jsx"
                                            ? "bg-blue-500/30 text-white border-blue-400/20"
                                            : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"} 
                                        transition-all duration-200 whitespace-nowrap`}>Hero.jsx
                                    </button>
                                    {/* Navbar.jsx Tab */}
                                    <button
                                        onClick={() => setActiveTab("Navbar.jsx")}
                                        className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${activeTab === "Navbar.jsx"
                                            ? "bg-blue-500/30 text-white border-blue-400/20"
                                            : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"} 
                                        transition-all duration-200 whitespace-nowrap`}>Navbar.jsx
                                    </button>
                                </div>
                                {/* Current content section */}
                                <div className="relative overflow-hidden flex-grow">
                                    {/* Syntax Highlighting */}
                                    <SyntaxHighlighter
                                        language="javascript"
                                        style={nightOwl}
                                        customStyle={{
                                            margin: 0,
                                            borderRadius: "8px",
                                            fontSize: "11px",
                                            lineHeight: 1.4,
                                            height: "100%",
                                            border: "1px solid #3c3c3c",
                                            wordWrap: 'break-word',
                                            whiteSpace: "pre-wrap",
                                            textAlign: "left"
                                        }}
                                        wrapLines={true}
                                        showLineNumbers={true}
                                    >
                                        {codeExemples[activeTab]}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                        </div>
                        {/* Cards section */}
                        <div className={`hidden lg:block absolute bottom-4 right-4 transform translate-x-8 translate-y-8 w-72 ${currentCard.bgColor} backdrop-blur-xl rounded-lg p-4 border border-white/20 shadow-2xl`}>
                            <div className="flex items-center space-x-2 mb-2">
                                <div className={`w-6 h-6 ${currentCard.iconColor} flex items-center justify-center text-sm font-bold`}>{currentCard.icon}</div>
                                <span className={`text-sm font-medium ${currentCard.textColor}`}>{currentCard.title}</span>
                            </div>
                            <div className={`text-sm text-left ${currentCard.contentColor}`}>{currentCard.content}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}


