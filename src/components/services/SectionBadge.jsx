function SectionBadge({ label }) {
  return (
    <div className="inline-flex items-center gap-2 bg-[#10161e] rounded-full px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 w-fit">
      <span className="text-white text-sm sm:text-base font-medium">{label}</span>
    </div>
  );
}

export default SectionBadge;