import SectionBadge from "../services/SectionBadge";

function ClientsHeader() {
    return (
        <div className="flex flex-col items-center gap-4 text-center px-4 sm:px-6 md:px-8 lg:px-10">
            <SectionBadge label="Our Clients" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold lg:text-5xl font-bold text-white leading-tight">
                Trusted by leading
                <br />
                brands and businesses
            </h2>
            <p className="text-blue-400 text-sm tracking-wide">
                [ 1000+ successful project collaborations ]
            </p>
        </div>
    );
}

export default ClientsHeader;