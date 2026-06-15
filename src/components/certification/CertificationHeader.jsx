// components/certification/CertificationHeader.jsx
import SectionBadge from "../services/SectionBadge";

function CertificationHeader() {
    return (
        <div className="flex flex-col items-center gap-4 text-center">
            <SectionBadge label="Certification" />
            <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight">
                Certified standards for
                <br />
                quality and performance
            </h2>
        </div>
    );
}

export default CertificationHeader;