// components/footer/FooterLinksRow.jsx
import FooterCompanyLinks from "./FooterCompanyLinks";
import FooterExpertiseLinks from "./FooterExpertiseLinks";
import FooterContactInfo from "./FooterContactInfo";

function FooterLinksRow() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FooterCompanyLinks />
            <FooterExpertiseLinks />
            <FooterContactInfo />
        </div>
    );
}

export default FooterLinksRow;