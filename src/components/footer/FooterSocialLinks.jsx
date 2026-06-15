// components/footer/FooterSocialLinks.jsx
import socials from "../../data/footer/footerSocialData";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "./FooterSocialIcons";

const iconMap = {
    facebook: <FacebookIcon />,
    instagram: <InstagramIcon />,
    whatsapp: <WhatsAppIcon />,
};

function FooterSocialLinks() {
    return (
        <div className="flex items-center gap-3">
            {socials.map((s) => (
                <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    className="w-10 h-10 rounded-full border border-white/60 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/40 transition-all duration-200"
                >
                    {iconMap[s.iconType]}
                </a>
            ))}
        </div>
    );
}

export default FooterSocialLinks;