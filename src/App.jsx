/* Import section */
import { useEffect, useState } from "react";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";

/* App component */
function App() {
    /* useState section */
    const [scrolled, setScrolled] = useState(false)
    /* useEffect section */
    useEffect(() => {
        /* Scroll handler */
        function handleScroll() {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)

        /* Cleaning the listener */
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    /* Return section */
    return (
        <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
            <Navbar scrolled={scrolled} />
            <Hero />
            <Features />
            <Pricing />
            <Testimonials />
            <Footer />
        </div>
    );
}

/* Export section */
export default App;
