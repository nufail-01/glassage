// components/certification/CertificationSection.jsx
import CertificationHeader from "./CertificationHeader";
import CertificationsGrid from "./CertificationsGrid";

function CertificationSection() {
    return (
        <section className="relative bg-[#020711] px-6 sm:px-10 py-16 flex flex-col gap-12 overflow-hidden">
            {/* Ambient glow top-left */}
            {/* <div
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #1d4ed8, transparent)" }}
        /> */}

            <CertificationHeader />
            <CertificationsGrid />
        </section>
    );
}

export default CertificationSection;