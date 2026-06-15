
// components/cta/CTAFeatureIcon.jsx

function CTAFeatureIcon({ icon, isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer shrink-0
        ${isActive
          ? "bg-blue-500 text-white shadow-lg shadow-blue-500/40"
          : "bg-white/10 backdrop-blur-sm text-white/80 hover:bg-white/20"
        }`}
    >
      {icon}
    </div>
  );
}

export default CTAFeatureIcon;