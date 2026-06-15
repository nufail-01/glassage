// components/footer/FooterContactItem.jsx
function FooterContactItem({ icon, children }) {
    return (
        <div className="flex items-start gap-4">
            {/* Icon box */}
            <div className="w-11 h-11 rounded-xl bg-[#0d1f35] border border-white/10 flex items-center justify-center shrink-0">
                <div className="text-white w-5 h-5">{icon}</div>
            </div>
            <div className="text-gray-400 text-sm leading-relaxed">{children}</div>
        </div>
    );
}

export default FooterContactItem;