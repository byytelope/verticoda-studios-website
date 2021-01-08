import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import IconButton from "@material-ui/core/IconButton";

import { MenuIcon } from "../MenuIcon";
import DropDownMenu from "../DropDownMenu";

export default function Navbar({ refs, activeTab, menuOpen, toggleMenuOpen }) {
    const [isScrolling, setIsScrolling] = useState(false);
    const navBgAnimation = useAnimation();
    const navTextAnimation = useAnimation();

    useEffect(() => {
        const navBgAnim = {
            initial: () => {
                navBgAnimation.start({
                    backgroundColor: "rgba(255,255,255,0)",
                    // backdropFilter: "blur(0px)",
                });
            },
            final: () => {
                navBgAnimation.start({
                    backgroundColor: "rgba(200,200,200,0.1)",
                    // backdropFilter: "blur(10px)",
                });
            },
        };

        const navTextAnim = {
            initial: () => {
                navTextAnimation.start({
                    color: "#FFF",
                });
            },
            final: () => {
                navTextAnimation.start({
                    color: "#2E2E2E",
                });
            },
        };

        if (menuOpen) {
            navBgAnim.final();
            navTextAnim.final();
        } else if (!menuOpen) {
            const yPos = window.scrollY;

            if (yPos < 50) {
                navBgAnim.initial();
                navTextAnim.initial();
            }
        }

        const handleScroll = () => {
            const yPos = window.scrollY;

            if (yPos > 50) {
                navBgAnim.final();
                navTextAnim.final();
                setIsScrolling(true);
            } else {
                navBgAnim.initial();
                navTextAnim.initial();
                setIsScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [navBgAnimation, navTextAnimation, menuOpen, activeTab]);

    return (
        <div>
            <motion.div
                className={`fixed flex flex-col w-full z-50 transition-all duration-200 ease-out xl:px-24 2xl:px-36 px-12 md:py-2 2xl:py-4 ${
                    isScrolling || menuOpen ? "shadow-md" : ""
                }`}
                animate={navBgAnimation}
                transition={{ ease: "easeOut" }}
                style={{
                    backdropFilter: isScrolling || menuOpen ? "blur(15px)" : "blur(0px)",
                    WebkitBackdropFilter: isScrolling || menuOpen ? "blur(15px)" : "blur(0px)",
                }}
            >
                <div className="grid grid-cols-2 w-full">
                    <motion.div
                        className={`text-3xl md:text-2xl xl:text-xl items-center tracking-widest py-6 md:py-8 text-white text-shadow-md ${
                            isScrolling ? "flex" : ""
                        }`}
                        layout
                        animate={navTextAnimation}
                        transition={{ ease: "easeOut" }}
                    >
                        <motion.p className="font-bold">
                            {isScrolling ? "" : "VERTICODA "}STUDIOS
                        </motion.p>
                        <motion.p className={`${isScrolling ? "pl-4 text-base" : ""}`}>
                            BY&nbsp;VERTICODA
                        </motion.p>
                    </motion.div>
                    <motion.div
                        className={`items-center justify-end text-white tracking-widest font-medium text-shadow-md pr-16 xl:pr-0 hidden xl:flex ${
                            isScrolling ? "space-x-12" : "space-x-20"
                        }`}
                        animate={navTextAnimation}
                        transition={{ ease: "easeOut" }}
                    >
                        <motion.div
                            className={`cursor-pointer transition-all duration-200 ease-out ${
                                activeTab === "services"
                                    ? "text-xl font-bold"
                                    : isScrolling
                                    ? "text-base"
                                    : "text-lg"
                            }`}
                            onClick={() => {
                                refs.servicesRef.current &&
                                    window.scrollTo({
                                        behavior: "smooth",
                                        top: refs.servicesRef.current.offsetTop,
                                    });
                            }}
                        >
                            OUR&nbsp;SERVICES
                        </motion.div>
                        <motion.div
                            className={`cursor-pointer transition-all duration-200 ease-out ${
                                activeTab === "clients"
                                    ? "text-xl font-bold"
                                    : isScrolling
                                    ? "text-base"
                                    : "text-lg"
                            }`}
                            onClick={() => {
                                refs.clientsRef.current &&
                                    window.scrollTo({
                                        behavior: "smooth",
                                        top: refs.clientsRef.current.offsetTop,
                                    });
                            }}
                        >
                            CLIENTS
                        </motion.div>
                        <motion.div
                            className={`cursor-pointer transition-all duration-200 ease-out ${
                                activeTab === "team"
                                    ? "text-xl font-bold"
                                    : isScrolling
                                    ? "text-base"
                                    : "text-lg"
                            }`}
                            onClick={() => {
                                refs.teamRef.current &&
                                    window.scrollTo({
                                        behavior: "smooth",
                                        top: refs.teamRef.current.offsetTop,
                                    });
                            }}
                        >
                            MEET&nbsp;THE&nbsp;TEAM
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="flex xl:hidden justify-end -mr-2 my-auto"
                        initial={false}
                        animate={menuOpen ? "open" : "closed"}
                    >
                        <IconButton
                            onClick={() => toggleMenuOpen()}
                            className="justify-items-center focus:outline-none"
                            size="medium"
                            centerRipple={false}
                        >
                            <div className="pl-1 pt-1 w-16 h-16 md:w-12 md:h-12">
                                <MenuIcon stroke={isScrolling || menuOpen ? "#2E2E2E" : "white"} />
                            </div>
                        </IconButton>
                    </motion.div>
                </div>
                <motion.div
                    animate={menuOpen ? { height: "auto" } : { height: 0 }}
                    layout
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                    <DropDownMenu
                        activeTab={activeTab}
                        refs={refs}
                        menuOpen={menuOpen}
                        toggleMenuOpen={toggleMenuOpen}
                        navTextAnimation={navTextAnimation}
                    />
                </motion.div>
            </motion.div>
            <div
                className={`h-full w-full fixed z-40 ${menuOpen ? "" : "pointer-events-none"}`}
                onClick={() => toggleMenuOpen(false)}
            />
        </div>
    );
}