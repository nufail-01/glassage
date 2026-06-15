import FAQHeader from "./FAQHeader";
import FAQList from "./FAQList";
import FAQSidebar from "./FAQSidebar";

function FAQSection() {
    return (
        <section className="bg-[#020711] px-6 sm:px-10 py-10 sm:py-12 md:py-14 lg:py-16 flex flex-col gap-6 sm:gap-8 md:gap-10">
            <FAQHeader />

            {/* Two-column layout */}
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start">
                {/* Left: accordion */}
                <div className="flex-1 w-full">
                    <FAQList />
                </div>

                {/* Right: sidebar cards */}
                <FAQSidebar />
            </div>
        </section>
    );
}

export default FAQSection;