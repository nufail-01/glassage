function StrengthCard({ icon, title, isActive }) {
  return (
    <div
      className={`relative flex flex-col justify-between p-8 rounded-2xl border transition-all duration-300 min-h-[240px] flex-1
        ${isActive
          ? "border-blue-500/40 shadow-xl shadow-blue-900/30"
          : "bg-[#090c15]"
        }`}
      style={
        isActive
          ? {
            background:
              "radial-gradient(ellipse at 60% 40%, #0e3a5c 0%, #0a2540 60%, #071829 100%)",
          }
          : {}
      }
    >
      {isActive && (
        <div
          className="absolute inset-0 rounded-2xl opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 28px,rgba(56,189,248,0.15) 28px,rgba(56,189,248,0.15) 29px),repeating-linear-gradient(90deg,transparent,transparent 28px,rgba(56,189,248,0.15) 28px,rgba(56,189,248,0.15) 29px)",
          }}
        />
      )}

      <div className="text-blue-400 w-14 h-14">{icon}</div>

      <p className="text-white text-2xl font-light leading-snug mt-6">
        {title}
      </p>
    </div>
  );
}

export default StrengthCard;