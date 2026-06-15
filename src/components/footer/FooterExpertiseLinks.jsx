// components/footer/FooterExpertiseLinks.jsx
import expertiseLinks from "../../data/footer/footerExpertiseData";

function FooterExpertiseLinks() {
    const handleClick = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="flex flex-col gap-5">
            <h4 className="text-blue-400 font-bold text-2xl mb-3">
                Our Expertise
            </h4>
            {expertiseLinks.map((link) => (
                <button
                    key={link.label}
                    onClick={() => handleClick(link.id)}
                    className="text-gray-600 hover:text-white text-md font-semibold transition-colors duration-200 text-left"
                >
                    {link.label}
                </button>
            ))}
        </div>
    );
}

export default FooterExpertiseLinks;