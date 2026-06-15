// // components/footer/Footer.jsx
// import FooterDivider from "./FooterDivider";
// import FooterLinksRow from "./FooterLinksRow";
// import FooterWatermark from "./FooterWatermark";
// import FooterBottomBar from "./FooterBottomBar";

// function Footer() {
//     return (
//         <footer className="relative bg-[#020711] px-10  pt-12 pb-6 flex flex-col gap-10 overflow-hidden">
//             {/* Ambient glow bottom-center */}
//             <div
//                 className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full blur-3xl opacity-15 pointer-events-none"
//                 style={{ background: "radial-gradient(circle, #0369a1, transparent)" }}
//             />

//             <FooterDivider />
//             <FooterLinksRow />
//             <FooterWatermark />
//             <FooterBottomBar />
//         </footer>
//     );
// }

// export default Footer;


// components/footer/Footer.jsx
import FooterDivider from "./FooterDivider";
import FooterLinksRow from "./FooterLinksRow";
import FooterWatermark from "./FooterWatermark";
import FooterBottomBar from "./FooterBottomBar";

function Footer() {
    return (
        <footer className="relative bg-[#020711] px-6 sm:px-10 pt-12 pb-6 flex flex-col gap-10 overflow-hidden">
            {/* Ambient glow bottom-center */}
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full blur-3xl opacity-15 pointer-events-none"
                style={{ background: "radial-gradient(circle, #0369a1, transparent)" }}
            />

            <FooterDivider />
            <FooterLinksRow />
            <FooterWatermark />
            <FooterBottomBar />
        </footer>
    );
}

export default Footer;