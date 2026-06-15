import ClientLogo from "./ClientLogo";
import clients from "../../data/clients/clientsData";

function ClientsGrid() {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
            {clients.map((c) => (
                <ClientLogo key={c.name} name={c.name} bgColor={c.bg}>
                    <img
                        src={c.logo}
                        alt={c.name}
                        className="max-w-full max-h-16 object-contain"
                    />
                </ClientLogo>
            ))}
        </div>
    );
}

export default ClientsGrid;