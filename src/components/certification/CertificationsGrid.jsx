// components/certification/CertificationsGrid.jsx
import ISOBadge from "./ISOBadge";
import certifications from "../../data/certification/certificationsData";

function CertificationsGrid() {
    return (
        <div className="flex justify-center gap-10 flex-wrap">
            {certifications.map((c) => (
                <ISOBadge
                    key={c.code}
                    code={c.code}
                    image={c.image}
                />
            ))}
        </div>
    );
}

export default CertificationsGrid;