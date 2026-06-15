function FeatureItem({ icon, text }) {
  return (
    <div className="hidden md:flex items-start gap-2 sm:gap-3 text-white/90 max-w-[130px] sm:max-w-[145px] md:max-w-[160px]">
      <div className="text-white/70 mt-0.5 shrink-0">{icon}</div>
      <span className="text-sm sm:text-base leading-snug font-light">{text}</span>
    </div>
  );
}

export default FeatureItem;