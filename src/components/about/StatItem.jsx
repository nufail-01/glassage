function StatItem({ value, suffix, description }) {
  return (
    <div className="flex flex-col gap-1 sm:gap-2">
      <div className="text-white text-4xl sm:text-5xl md:text-6xl font-normal">
        {value}
        <span className="text-2xl sm:text-3xl md:text-4xl align-baseline ml-1">{suffix}</span>
      </div>
      <p className="text-white/80 text-sm sm:text-base leading-5 sm:leading-6 max-w-[220px] sm:max-w-[250px] md:max-w-[280px]">
        {description}
      </p>
    </div>
  );
}

export default StatItem;