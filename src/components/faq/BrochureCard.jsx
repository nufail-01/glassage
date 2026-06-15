// components/faq/BrochureCard.jsx
function BrochureCard() {
    return (
        <div
            className="relative rounded-xl overflow-hidden border border-white/5 shadow-xl flex-1 flex flex-col justify-between p-6 min-h-62"
            style={{
                background: "linear-gradient(135deg, #071524 0%, #0d2a3f 100%)",
            }}
        >
            {/* Title */}
            <h3 className="text-white font-semibold text-xl leading-snug z-10 relative">
                Download our
                <br />
                company brochure
            </h3>

            {/* 3D book illustration */}
            <div className="absolute bottom-0 left-6 z-10">
                <div className="relative w-28 h-32">
                    {/* Book spine */}
                    <div
                        className="absolute left-0 top-2 w-6 h-28 rounded-l-lg"
                        style={{
                            background: "#0c171a",
                        }}
                    />
                    {/* Book cover */}
                    <div
                        className="absolute left-4 top-0 w-24 h-28 rounded-r-lg rounded-tl-sm flex items-center justify-center shadow-2xl"
                        style={{
                            background: "linear-gradient(135deg, #6b8ee8 0%, #4f6fd0 60%, #3a52b5 100%)",
                            transform: "perspective(300px) rotateY(-10deg)",
                        }}
                    >
                        {/* G logo on cover */}
                        <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                            <span className="text-white font-black text-2xl">G</span>
                        </div>
                    </div>
                    {/* Book pages edge */}
                    <div
                        className="absolute right-0 top-1 w-2 h-28 rounded-r-sm"
                        style={{ background: "linear-gradient(180deg, #e8edf8 0%, #c5cce0 100%)" }}
                    />
                </div>
            </div>

            {/* Download button bottom-right */}
            <div className="flex justify-end z-10 relative">
                <button className="flex items-center gap-3 bg-[#1a2a3a] hover:bg-[#243447] border border-white/10 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all">
                    Download Brochure
                    <div className="w-8 h-8 rounded-full bg-[#0d1f35] border border-white/10 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                            <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default BrochureCard;