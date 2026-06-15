import { useState } from "react";
import StarRating from "./StarRating";
import CTAWindow from "./CTAWindow";
import { ctaBackgrounds } from "../../data/cta/ctaBackgroundsData";

function CTABanner() {
  const [activeIndex, setActiveIndex] = useState(4);

  return (
    <section
      className="relative mx-3 sm:mx-6 md:mx-10 rounded-3xl overflow-hidden flex flex-col items-center px-4 sm:px-6 md:px-10 pt-8 sm:pt-10 md:pt-12 lg:pt-14 pb-0 transition-all duration-700 min-h-[420px] sm:min-h-[460px] md:min-h-[500px]"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: `url(${ctaBackgrounds[activeIndex].bg})`,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Floating glow blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
        {[
          { w: 200, h: 200, top: 10, left: 65, op: 0.35 },
          { w: 160, h: 160, top: 40, left: 80, op: 0.25 },
          { w: 120, h: 120, top: 5, left: 50, op: 0.2 },
          { w: 180, h: 100, top: 60, left: 70, op: 0.3 },
          { w: 100, h: 140, top: 20, left: 88, op: 0.2 },
        ].map((blob, index) => (
          <div
            key={index}
            className="absolute rounded-full blur-3xl"
            style={{
              width: blob.w,
              height: blob.h,
              top: `${blob.top}%`,
              left: `${blob.left}%`,
              background: "radial-gradient(circle, #ff6a00, #ee0979)",
              opacity: blob.op,
            }}
          />
        ))}
      </div>

      {/* Rating badge */}
      <div className="relative flex items-center gap-2 bg-black/40 backdrop-blur-sm border border-white/15 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-5 text-center">
        <StarRating count={5} />
        <span className="text-white text-xs sm:text-sm">
          Trusted excellence in facade solutions
        </span>
      </div>

      {/* Headline */}
      <h2 className="relative text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-white text-center leading-tight mb-2 px-2 transition-all duration-500">
        {ctaBackgrounds[activeIndex].title.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            {i === 0 && <br />}
          </span>
        ))}
      </h2>

      {/* Window product + icons */}
      <CTAWindow
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </section>
  );
}

export default CTABanner;