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
            } flex-col text-4xl text-text tracking-widest leading-loose text-shadow-md space-y-16 py-24 transition duration-500 ease-out`}
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
                OUR&nbsp;SERVICES
            </div>
            <div
                className={`cursor-pointer border-b-2 ${
                    activeTab === "projects" ? "border-current" : "border-transparent"
                } transition-all duration-500 ease-out`}
                onClick={() => {
                    refs.projectsRef.current &&
                        window.scrollTo({
                            behavior: "smooth",
                            top: refs.projectsRef.current.offsetTop,
                        });
                    toggleMenuOpen(false);
                }}
            >
                PROJECTS
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
                MEET&nbsp;THE&nbsp;TEAM
            </div>
        </div>
    );
}
