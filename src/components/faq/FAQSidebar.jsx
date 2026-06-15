// components/faq/FAQSidebar.jsx
import ProjectShowcaseCard from "./ProjectShowcaseCard";
import BrochureCard from "./BrochureCard";

function FAQSidebar() {
    return (
        <div className="flex flex-col gap-4 w-full lg:w-[420px] shrink-0">
            <ProjectShowcaseCard />
            <BrochureCard />
        </div>
    );
}

export default FAQSidebar;