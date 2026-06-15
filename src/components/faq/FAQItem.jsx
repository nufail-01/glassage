// components/faq/FAQItem.jsx
import { useState } from "react";

function FAQItem({ number, question, answer, isOpenByDefault = false }) {
    const [open, setOpen] = useState(isOpenByDefault);

    return (
        <div className="border border-white/8 rounded-xl overflow-hidden">
            {/* Question row */}
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
            >
                <div className="flex items-center gap-5">
                    <span className="text-gray-500 text-md font-mono w-6 shrink-0">
                        {String(number).padStart(2, "0")}
                    </span>
                    <span className="text-white text-xl font-medium">{question}</span>
                </div>

                {/* +/- toggle */}
                <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${open
                            ? "bg-blue-400 text-white"
                            : "bg-[#0d1f35] text-gray-400 group-hover:bg-[#132840]"
                        }`}
                >
                    {open ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                            <path d="M5 12h14" strokeLinecap="round" />
                        </svg>
                    ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                        </svg>
                    )}
                </div>
            </button>

            {/* Answer */}
            {open && (
                <div className="px-6 pb-5 pl-[68px]">
                    <p className="text-gray-400 text-lg leading-relaxed">{answer}</p>
                </div>
            )}
        </div>
    );
}

export default FAQItem;