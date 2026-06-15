import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import SlidePanel from "./SlidePanel";
import Navbar from "../navbar/Navbar";

function HeroSection() {
    return (
        <section className="relative w-full min-h-screen overflow-hidden bg-black px-6 sm:px-10">
            <HeroBackground />

            {/* Navbar floats over hero */}
            <Navbar />

            {/* Main content pinned to bottom on all screens */}
            <div className="relative z-10 flex flex-col justify-end min-h-screen pb-8 sm:pb-10 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-10">
                <HeroContent />
            </div>

            {/* Slide card pinned to bottom-right */}
            <SlidePanel />
        </section>
    );
}

export default HeroSection;