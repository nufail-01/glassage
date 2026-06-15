import companyLinks from "../../data/footer/footerLinksData";

function FooterCompanyLinks() {
    const handleClick = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="flex flex-col gap-5">
            <h4 className="text-blue-400 font-semibold text-2xl mb-3">
                Company
            </h4>
            {companyLinks.map((link) => (
                <button
                    key={link.label}
                    onClick={() => handleClick(link.id)}
                    className="text-gray-600 font-semibold hover:text-white text-md transition-colors duration-200 text-left"
                >
                    {link.label}
                </button>
            ))}
        </div>
    );
}

export default FooterCompanyLinks;