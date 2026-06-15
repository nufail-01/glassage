// components/footer/FooterContactInfo.jsx
import FooterContactItem from "./FooterContactItem";
import contactInfo from "../../data/footer/footerContactData";
import { PhoneIcon, EmailIcon, AddressIcon } from "./FooterIcons";

const iconsMap = {
    phone: <PhoneIcon />,
    email: <EmailIcon />,
    address: <AddressIcon />,
};

function FooterContactInfo() {
    return (
        <div className="flex flex-col gap-5">
            <h4 className="text-blue-400 font-bold text-2xl mb-3">Contact Us</h4>
            <div className="flex flex-col gap-5">
                {contactInfo.map((item) => (
                    <FooterContactItem key={item.id} icon={iconsMap[item.id]}>
                        <div className="text-white text-md font-semibold mb-0.5">{item.title}</div>
                        {item.details.map((detail, idx) => (
                            <div key={idx}>{detail}</div>
                        ))}
                    </FooterContactItem>
                ))}
            </div>
        </div>
    );
}

export default FooterContactInfo;