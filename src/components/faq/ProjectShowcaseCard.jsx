// components/faq/ProjectShowcaseCard.jsx
import image from "../../assets/images/imgi_77_video-tags.WEBP";

function ProjectShowcaseCard() {
    return (
        <div className="relative rounded-2xl overflow-hidden border border-white/5 shadow-xl h-64">
            {/* Background image */}
            <img
                src={image}
                alt="Project showcase"
                className="w-full h-full object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

            {/* Title top-left */}
            <div className="absolute top-5 left-5">
                <h3 className="text-white font-bold text-xl leading-snug">
                    Explore our
                    <br />
                    project showcase
                </h3>
            </div>

            {/* Watch video button bottom-left */}
            <div className="absolute bottom-5 left-5">
                <button className="flex items-center gap-3 bg-black/50 backdrop-blur-sm hover:bg-black/70 border border-white/10 text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-all">
                    {/* Play icon */}
                    <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center shrink-0">
                        <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4 ml-0.5">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                    Watch our video
                </button>
            </div>
        </div>
    );
}

export default ProjectShowcaseCard;