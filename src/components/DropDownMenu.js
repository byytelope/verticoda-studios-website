import { motion } from "framer-motion";

export default function DropDownMenu({ menuOpen, setMenuOpen, navTextAnimation, refs, activeTab }) {
    return (
        <motion.div
            initial={{ opacity: 0, pointerEvents: "none" }}
            animate={menuOpen ? { opacity: 1, pointerEvents: "auto" } : {}}
            className="flex-col text-lg xs:text-2xl md:text-3xl lg:text-4xl font-semibold text-text text-center tracking-widest leading-loose text-shadow-md xs:space-y-8 md:space-y-20 lg:space-y-24 py-4 xs:py-12 md:py-24 lg:py-20"
        >
            <div
                className={`p-8 cursor-pointer border-b-2 ${
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
                className={`p-8 cursor-pointer border-b-2 ${
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
                className={`p-8 cursor-pointer border-b-2 ${
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
        </motion.div>
    );
}
