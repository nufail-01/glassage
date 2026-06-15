function FeatureCard({ icon, title, description, iconBg }) {
    return (
        <div className="relative rounded-3xl bg-slate-900/60 backdrop-blur p-8 border border-slate-700/40">
            <div className="flex flex-col gap-6 pt-16">
                <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: iconBg }}
                >
                    {icon}
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
                    <p className="text-slate-400 leading-relaxed">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default FeatureCard;