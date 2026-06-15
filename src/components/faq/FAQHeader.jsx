// components/faq/FAQHeader.jsx
import SectionBadge from "../services/SectionBadge";

function FAQHeader() {
    return (
        <div className="flex flex-col items-center gap-4 text-center">
            <SectionBadge label="FAQ" />
            <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight">
                Frequently asked questions
            </h2>
        </div>
    );
}

export default FAQHeader;