// components/footer/FooterWatermark.jsx
import footerLogo from "../../assets/images/imgi_66_ftr-logo.webp";

function FooterWatermark() {
    return (
        <div className="relative overflow-hidden py-4 select-none pointer-events-none">
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    background:
                        "radial-gradient(ellipse at 50% 80%, #0369a1 0%, transparent 70%)",
                }}
            />

            <img
                src={footerLogo}
                alt="Glassage"
                className="relative mx-auto w-full max-w-4xl opacity-80"
            />
        </div>
    );
}

export default FooterWatermark;