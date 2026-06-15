// components/certification/ISOBadge.jsx
function ISOBadge({ code, image }) {
    return (
        <div className="flex flex-col items-center gap-4 border border-white/10 p-6 bg-[#020711] w-48">
            <div className="w-20 h-20">
                <img
                    src={image}
                    alt={`ISO ${code}`}
                    className="w-full h-full object-contain"
                />
            </div>

            <span className="text-gray-300 text-sm font-medium text-center">
                ISO {code}
            </span>
        </div>
    );
}

export default ISOBadge;