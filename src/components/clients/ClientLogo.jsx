function ClientLogo({ name, bgColor = "#0d1f35", children }) {
    return (
        <div
            className="flex items-center justify-center px-6 py-5 border border-white/5 shadow-md"
            style={{ background: bgColor, minHeight: "88px" }}
            title={name}
        >
            {children}
        </div>
    );
}

export default ClientLogo;