// components/ctabottom/CTABottomBanner.jsx
import backgroundImage from "../../assets/images/imgi_80_cta.WEBP";

function CTABottomBanner() {
    return (
        <section
            className="relative mx-10 mb-10 rounded-3xl overflow-hidden min-h-[420px] flex items-end p-10 border border-white/5"
            style={{
                background: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 40%, #0369a1 100%)",
            }}
        >
            {/* Glass building background image */}
            <div
                className="absolute inset-0 bg-cover bg-right bg-no-repeat opacity-40"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-3xl">
                <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
                    Transforming spaces
                    <br />
                    with innovative facade
                    <br />
                    solutions
                </h2>
                <p className="text-lg font-normal text-white leading-tight mt-4 max-w-xl">
                    Partner with Glassage for premium architectural, glass, aluminium, and exterior solutions tailored to your project needs.
                </p>
                <button className="flex mt-5 items-center gap-2 sm:gap-3 bg-black hover:bg-gray-100 text-white text-sm font-semibold pl-4 sm:pl-6 pr-1.5 sm:pr-2 py-1.5 sm:py-2 rounded-full transition-all duration-200 shadow-lg">
                    Enquire Now
                    <span className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-1.5 sm:p-2 transition-all">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </span>
                </button>
            </div>
        </section>
    );
}

export default CTABottomBanner;