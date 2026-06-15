import ClientsHeader from "./ClientsHeader";
import ClientsGrid from "./ClientsGrid";
import SeeMoreButton from "./SeeMoreButton";

function ClientsSection() {
    return (
        <section className="bg-[#020711] px-6 sm:px-10 py-10 sm:py-12 md:py-14 lg:py-16 flex flex-col gap-6 sm:gap-8 md:gap-10">
            <ClientsHeader />
            <ClientsGrid />
            <SeeMoreButton />
        </section>
    );
}

export default ClientsSection;