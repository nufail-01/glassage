function StatsCard() {
    return (
        <div className="relative rounded-3xl bg-slate-900/60 backdrop-blur p-8 border border-slate-700/40 overflow-hidden flex flex-col items-center text-center min-h-[360px]">
            <div className="absolute inset-4 rounded-2xl pointer-events-none" />
            <div className="relative">
                <div className="text-6xl md:text-7xl font-bold bg-linear-to-b from-orange-300 to-orange-500 bg-clip-text text-transparent">
                    1000+
                </div>
                <p className="text-slate-400 mt-2">Projects Delivered</p>

                <div className="flex justify-center -space-x-3 my-6">
                    <img
                        src="https://i.pravatar.cc/56?img=12"
                        alt="User"
                        className="w-14 h-14 rounded-full border-2 border-slate-900 object-cover"
                    />
                    <img
                        src="https://i.pravatar.cc/56?img=32"
                        alt="User"
                        className="w-14 h-14 rounded-full border-2 border-slate-900 object-cover"
                    />
                    <img
                        src="https://i.pravatar.cc/56?img=45"
                        alt="User"
                        className="w-14 h-14 rounded-full border-2 border-slate-900 object-cover"
                    />
                </div>

                <p className="text-slate-400 leading-relaxed max-w-[220px] mx-auto">
                    Successfully completed commercial and residential projects across sectors
                </p>
            </div>
        </div>
    );
}

export default StatsCard;