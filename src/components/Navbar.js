import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import IconButton from "@material-ui/core/IconButton";

import { MenuIcon } from "./MenuIcon";
import DropDownMenu from "./DropDownMenu";
import { ReactComponent as Logo } from "../assets/Verticoda_Logo.svg";

export default function Navbar({ refs, activeTab, menuOpen, setMenuOpen }) {
    const [isScrolling, setIsScrolling] = useState(false);
    const navBgAnimation = useAnimation();
    const navTextAnimation = useAnimation();

    useEffect(() => {
        const navBgAnim = {
            initial: () => {
                navBgAnimation.start({
                    backgroundColor: "rgba(255,255,255,0)",
                });
            },
            final: () => {
                navBgAnimation.start({
                    backgroundColor: "rgba(255,255,255, 0.5)",
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
    }, [navBgAnimation, navTextAnimation, menuOpen]);

    return (
        <div>
            <motion.div
                className={`fixed flex flex-col w-full z-50 transition-all duration-200 ease-out px-6 md:px-12 xl:px-24 2xl:px-36 ${
                    isScrolling ? "xs:py-2 md:py-4" : "py-4 xs:py-6 md:py-10 lg:py-12"
                } ${isScrolling || menuOpen ? "shadow-md" : ""}`}
                animate={navBgAnimation}
                transition={{ ease: "easeOut" }}
                style={{
                    backdropFilter: isScrolling || menuOpen ? "blur(25px)" : "blur(0px)",
                    WebkitBackdropFilter: isScrolling || menuOpen ? "blur(25px)" : "blur(0px)",
                }}
            >
                <div className="flex w-full">
                    <motion.div
                        className={"flex items-center tracking-widest text-white text-shadow-md"}
                        animate={navTextAnimation}
                        transition={{ ease: "easeOut" }}
                    >
                        <div
                            className={`z-40 cursor-pointer ${
                                isScrolling || menuOpen
                                    ? "w-10 xs:w-14 md:w-16 text-text"
                                    : "w-12 xs:w-16 md:w-20 text-white"
                            } transition-all duration-400 ease-out`}
                            style={{ filter: "drop-shadow(0 0.15rem 0.2rem rgba(0,0,0,0.2))" }}
                            onClick={() => {
                                setMenuOpen(false);
                                window.scroll({ top: 0, behavior: "smooth" });
                            }}
                        >
                            <Logo />
                        </div>
                        <div className="overflow-hidden w-full">
                            <motion.div
                                className="pl-4 md:pl-6 z-30 text-xs xs:text-sm md:text-xl lg:text-2xl xl:text-xl"
                                animate={
                                    isScrolling
                                        ? menuOpen
                                            ? { x: 0, opacity: 1 }
                                            : { x: -150, opacity: 0 }
                                        : {}
                                }
                                transition={{ type: "tween", ease: "easeOut" }}
                            >
                                <p className="font-bold">VERTICODA&nbsp;STUDIOS</p>
                                <p>BY&nbsp;VERTICODA</p>
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.div
                        className={`items-center ml-auto text-white tracking-widest font-medium text-shadow-md pr-16 xl:pr-0 hidden xl:flex ${
                            activeTab !== null ? "space-x-12" : "space-x-20"
                        }`}
                        animate={navTextAnimation}
                        transition={{ ease: "easeOut" }}
                    >
                        <motion.div
                            className={`cursor-pointer transition-all duration-200 ease-out ${
                                activeTab === "services"
                                    ? "text-xl font-bold"
                                    : activeTab !== null
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
                                    : activeTab !== null
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
                                    : activeTab !== null
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
                        className="flex xl:hidden -mr-2 my-auto ml-auto"
                        initial={false}
                        animate={menuOpen ? "open" : "closed"}
                    >
                        <IconButton
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="justify-items-center focus:outline-none"
                            size="medium"
                            centerRipple={false}
                        >
                            <div className="pl-1 pt-1 w-8 h-8 xs:w-10 xs:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14">
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
                        setMenuOpen={setMenuOpen}
                        navTextAnimation={navTextAnimation}
                    />
                </motion.div>
            </motion.div>
            <div
                className={`h-full w-full fixed z-40 ${menuOpen ? "" : "pointer-events-none"}`}
                onClick={() => setMenuOpen(false)}
            />
        </div>
    );
}
