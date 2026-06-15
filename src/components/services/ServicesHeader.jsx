import SectionBadge from "./SectionBadge";

function ServicesHeader({ onPrev, onNext }) {
  return (
    <div className="flex items-start justify-between px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="flex flex-col gap-3 sm:gap-4">
        <SectionBadge label="Our Services" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight">
          Complete facade and
          <br />
          architectural solutions
        </h2>
      </div>

      {/* Prev / Next arrows */}
      <div className="flex gap-2 sm:gap-3 mt-2 shrink-0">
        <button
          onClick={onPrev}
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-black bg-white hover:bg-white/10 transition-all"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 sm:w-5 sm:h-5">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
        </button>
        <button
          onClick={onNext}
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-black bg-white hover:bg-white/10 transition-all"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 sm:w-5 sm:h-5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ServicesHeader;