function ServiceCard({ badge, title, description, imageUrl }) {
  return (
    <div className="relative flex flex-col rounded-3xl overflow-hidden bg-[#0d1f35] min-w-[260px] sm:min-w-[280px] md:min-w-[300px] h-[420px] sm:h-[450px] md:h-[480px] w-[270px] sm:w-[300px] md:w-[320px] shrink-0 border border-white/5 shadow-xl">

      {/* Top content */}
      <div className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 pb-3">

        {/* Badge row */}
        <div className="flex items-center justify-between">
          <span className="bg-white text-black text-xs font-semibold px-3 sm:px-4 py-1.5 rounded-full">
            {badge}
          </span>
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-white text-lg sm:text-xl font-semibold leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="text-white/80 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      </div>

      {/* Image */}
      <div className="relative h-52 sm:h-60 md:h-65 rounded-2xl mt-auto overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Read More overlay button */}
        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
          <button className="flex items-center gap-2 sm:gap-3 bg-white/90 hover:bg-white text-black text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 sm:py-3 rounded-full transition-all">
            Read More
            <span className="bg-white text-black rounded-full p-1.5 sm:p-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3 sm:w-4 sm:h-4">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;