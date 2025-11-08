/* Testimonials section */
const testimonials = [
    {
        name: "Maini Lotfi",
        role: "Junior Full Stack Developer",
        image: "/me.jpg",
        content:
            "CodEx has completely transformed how I approach coding. The AI suggestions are incredibly accurate, and it saves me hours every week!"
    },
    {
        name: "Sara Bennani",
        role: "Frontend Developer",
        image:
            "https://images.pexels.com/photos/8107620/pexels-photo-8107620.jpeg?auto=compress&cs=tinysrgb&w=800",
        content:
            "I love using CodEx for building React components. The code explanations are clear, and the autocomplete is a huge time saver."
    },
    {
        name: "Ahmed Rezki",
        role: "Backend Developer",
        image:
            "https://images.pexels.com/photos/7893740/pexels-photo-7893740.jpeg?auto=compress&cs=tinysrgb&w=800",
        content:
            "The debugging tools in CodEx are amazing. It instantly points out logical errors and gives optimized fixes, which makes my workflow so much smoother."
    },
    {
        name: "Yasmine Khelifi",
        role: "UI/UX Designer & Developer",
        image:
            "https://images.pexels.com/photos/7681217/pexels-photo-7681217.jpeg?auto=compress&cs=tinysrgb&w=800",
        content:
            "I’m impressed by how CodEx generates production-ready components. It helps me focus more on design and less on repetitive coding tasks."
    }
];
/* Testimonials component */
export default function Testimonials() {
    return <section id="testimonials"
        className=" py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">
                {/* Header - left side */}
                <div className="lg:w-1/2 w-full text-center lg:text-left">
                    <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                        Trusted by Coders Worldwide
                    </h2>
                    <p className="text-gray-400 text-base text-xl sm:text-lg max-w-2xl mx-auto ">See how our AI-powered tools are transforming coding workflows.</p>
                </div>
                {/* Testimonials - right side */}
                <div className="lg:w-1/2 w-full ">
                    <div className="space-y-6 sm:space-y-8">
                        {testimonials.map((testimonial, key) => (
                            <div key={key} className="bg-slate-900/50 p-4 sm:p-6 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl">
                                <div className="flex items-start space-x-3 sm:space-x-4">
                                    <div className="flex-shrink-0 ">
                                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400
                                            bg-clip-text text-transparent"
                                        >
                                            "
                                        </div>
                                    </div>

                                    <div className="flex-grow">
                                        <p className="text-white text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">{testimonial.content}</p>
                                        <div className="flex items-center space-x-2 sm:space-x-3">
                                            <img src={testimonial.image} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" />

                                            <div>
                                                <h3 className="font-semibold text-white text-sm sm:text-base">{testimonial.name}</h3>
                                                <p className="text-xs sm:text-sm text-gray-400">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>

}
