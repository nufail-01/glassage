function ExperienceCard() {
  return (
    <div className="relative rounded-3xl bg-slate-900/60 backdrop-blur p-8 border border-slate-700/40 overflow-hidden flex flex-col items-center justify-center text-center min-h-[380px]">
      <div className="text-6xl md:text-7xl font-medium text-sky-300">13+</div>
      <div className="mt-4 inline-block border border-sky-500/50 rounded-md px-4 py-1.5 text-sm text-sky-400">
        Years of Expertise
      </div>
    </div>
  );
}

export default ExperienceCard;