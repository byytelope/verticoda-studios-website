export default function DropDownMenu({
    menuOpen,
    toggleMenuOpen,
    navTextAnimation,
    refs,
    activeTab,
}) {
    return (
        <div
            className={`${
                menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            } flex-col text-2xl md:text-3xl font-medium text-text tracking-widest leading-loose text-shadow-md space-y-8 md:space-y-20 py-12 md:py-16 transition duration-500 ease-out`}
        >
            <div
                className={`cursor-pointer border-b-2 ${
                    activeTab === "services" ? "border-current" : "border-transparent"
                } transition-all duration-500 ease-in-out`}
                onClick={() => {
                    refs.servicesRef.current &&
                        window.scrollTo({
                            behavior: "smooth",
                            top: refs.servicesRef.current.offsetTop,
                        });
                    toggleMenuOpen(false);
                }}
            >
                Our&nbsp;Services
            </div>
            <div
                className={`cursor-pointer border-b-2 ${
                    activeTab === "clients" ? "border-current" : "border-transparent"
                } transition-all duration-500 ease-out`}
                onClick={() => {
                    refs.clientsRef.current &&
                        window.scrollTo({
                            behavior: "smooth",
                            top: refs.clientsRef.current.offsetTop,
                        });
                    toggleMenuOpen(false);
                }}
            >
                Clients
            </div>
            <div
                className={`cursor-pointer border-b-2 ${
                    activeTab === "team" ? "border-current" : "border-transparent"
                } transition-all duration-500 ease-out`}
                onClick={() => {
                    refs.teamRef.current &&
                        window.scrollTo({
                            behavior: "smooth",
                            top: refs.teamRef.current.offsetTop,
                        });
                    toggleMenuOpen(false);
                }}
            >
                Meet&nbsp;The&nbsp;Team
            </div>
        </div>
    );
}
