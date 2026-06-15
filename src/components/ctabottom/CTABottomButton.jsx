// components/ctabottom/CTABottomButton.jsx
export default function CTABottomButton() {
    return (
        <button className="flex items-center gap-3 bg-gray-900 hover:bg-black text-white text-sm font-semibold pl-6 pr-2 py-2 rounded-full border border-white/10 transition-all duration-200 shadow-lg w-fit">
            Enquire Now
            <span className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 transition-all">
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="w-4 h-4"
                >
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </span>
        </button>
    );
}