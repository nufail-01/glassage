function RankCard() {
  return (
    <div className="relative rounded-3xl bg-slate-900/60 backdrop-blur p-8 border border-slate-700/40 overflow-hidden flex flex-col items-center text-center min-h-[360px]">
      <p className="text-slate-300 tracking-wider text-sm uppercase">South India's</p>
      <div className="text-7xl md:text-8xl font-bold text-sky-300 my-3">#1</div>
      <p className="text-slate-400 leading-relaxed max-w-[260px]">
        Leading provider of premium facade and exterior solutions
      </p>
    </div>
  );
}

export default RankCard;