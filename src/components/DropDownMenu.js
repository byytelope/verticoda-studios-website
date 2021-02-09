export default function DropDownMenu({
    menuOpen,
    setMenuOpen,
    navTextAnimation,
    refs,
    activeTab,
}) {
    return (
        <div
            className={`${
                menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            } flex-col text-lg xs:text-2xl md:text-3xl lg:text-4xl font-medium text-text tracking-widest leading-loose text-shadow-md space-y-6 xs:space-y-12 md:space-y-20 lg:space-y-24 py-8 xs:py-12 md:py-16 lg:py-20 transition duration-500 ease-out`}
        >
            <div
                className={`pb-2 cursor-pointer border-b-2 ${
                    activeTab === "services" ? "border-current" : "border-transparent"
                } transition-all duration-500 ease-in-out`}
                onClick={() => {
                    refs.servicesRef.current &&
                        window.scrollTo({
                            behavior: "smooth",
                            top: refs.servicesRef.current.offsetTop,
                        });
                        setMenuOpen(false);
                }}
            >
                Our&nbsp;Services
            </div>
            <div
                className={`pb-2 cursor-pointer border-b-2 ${
                    activeTab === "clients" ? "border-current" : "border-transparent"
                } transition-all duration-500 ease-out`}
                onClick={() => {
                    refs.clientsRef.current &&
                        window.scrollTo({
                            behavior: "smooth",
                            top: refs.clientsRef.current.offsetTop,
                        });
                        setMenuOpen(false);
                }}
            >
                Clients
            </div>
            <div
                className={`pb-2 cursor-pointer border-b-2 ${
                    activeTab === "team" ? "border-current" : "border-transparent"
                } transition-all duration-500 ease-out`}
                onClick={() => {
                    refs.teamRef.current &&
                        window.scrollTo({
                            behavior: "smooth",
                            top: refs.teamRef.current.offsetTop,
                        });
                        setMenuOpen(false);
                }}
            >
                Meet&nbsp;The&nbsp;Team
            </div>
        </div>
    );
}
