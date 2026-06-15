// components/faq/FAQList.jsx
import FAQItem from "./FAQItem";
import faqs from "../../data/faq/faqsData";

function FAQList() {
    return (
        <div className="flex flex-col gap-3">
            {faqs.map((faq) => (
                <FAQItem key={faq.number} {...faq} />
            ))}
        </div>
    );
}

export default FAQList;