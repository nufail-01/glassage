import { ArrowLeft, ArrowRight } from "lucide-react";

function SlideCard({ number, title, imageUrl, currentSlide, totalSlides, onPrev, onNext }) {
  return (
    <div
      className="hidden md:flex relative overflow-hidden w-[280px] h-[150px] gap-3 p-2 shadow-2xl rounded-2xl"
      style={{
        background: "rgba(30, 25, 20, 0.45)",
        backdropFilter: "blur(20px) saturate(1.4)",
        WebkitBackdropFilter: "blur(20px) saturate(1.4)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      {/* Subtle inner glow top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

      {/* Left side: Large Featured Image */}
      <div className="w-[110px] h-full rounded-xl overflow-hidden shrink-0 bg-neutral-800">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side: Content & Controls Layout */}
      <div className="flex flex-col justify-between flex-1 py-1">

        {/* Top Text Section */}
        <div>
          <div className="text-white/40 text-[15px] font-medium tracking-wide mb-1">
            {String(number).padStart(2, "0")}
          </div>
          <h3 className="text-white text-base font-normal leading-tight tracking-tight line-clamp-3">
            {title}
          </h3>
        </div>

        {/* Bottom Navigation Section */}
        <div className="flex items-center justify-between mt-auto">

          {/* Pagination Indicators */}
          <div className="flex gap-2 items-center">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <div
                key={index}
                className={`transition-all duration-300 rounded-full ${index === currentSlide
                  ? "w-2 h-2 bg-white"
                  : "w-2 h-2 bg-white/30"
                  }`}
              />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              onClick={onPrev}
              className="w-5 h-5 rounded-full bg-white/90 flex items-center justify-center text-neutral-800 hover:bg-white transition-colors cursor-pointer"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-3.5 h-3.5" strokeWidth={2.5} />
            </button>
            <button
              onClick={onNext}
              className="w-5 h-5 rounded-full bg-white/90 flex items-center justify-center text-neutral-800 hover:bg-white transition-colors cursor-pointer"
              aria-label="Next slide"
            >
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideCard;