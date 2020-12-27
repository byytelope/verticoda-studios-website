import { useEffect, useState } from "react";
import { motion, useAnimation, useCycle } from "framer-motion";
import IconButton from "@material-ui/core/IconButton";

import { MenuIcon } from "./MenuIcon";

export default function Navbar({ refs, activeTab }) {
    const [isScrolling, setIsScrolling] = useState(false);
    const [menuOpen, toggleMenuOpen] = useCycle(false, true);
    const navBgAnimation = useAnimation();
    const navTextAnimation = useAnimation();

    useEffect(() => {
        const navBgAnim = {
            initial: () => {
                navBgAnimation.start({
                    backgroundColor: "rgba(255,255,255,0)",
                    backdropFilter: "blur(0px)",
                });
                setIsScrolling(false);
            },
            final: () => {
                navBgAnimation.start({
                    backgroundColor: "rgba(155,155,155,0.1)",
                    backdropFilter: "blur(10px)",
                });
                setIsScrolling(true);
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

        const handleScroll = () => {
            const yPos = window.scrollY;

            if (yPos > 50) {
                navBgAnim.final();
                navTextAnim.final();
            } else {
                navBgAnim.initial();
                navTextAnim.initial();
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [navBgAnimation, navTextAnimation]);

    return (
        <motion.div
            className={`fixed grid grid-cols-2 w-full z-50 2xl:px-32 px-12 md:py-2 xl:py-4 border-b-2 border-black border-opacity-0 ${
                isScrolling ? "border-opacity-10" : ""
            } transition ease-out`}
            animate={navBgAnimation}
            transition={{ ease: "easeOut" }}
        >
            <motion.div
                className={"text-3xl md:text-2xl lg:text-xl items-center tracking-widest py-6 md:py-8 text-white text-shadow-md"}
                animate={navTextAnimation}
                transition={{ ease: "easeOut" }}
            >
                <p className="font-bold">VERTICODA&nbsp;STUDIOS</p>
                <p>BY&nbsp;VERTICODA</p>
            </motion.div>
            <motion.div
                className="items-center justify-center space-x-24 text-white text-shadow-md text-lg pr-16 xl:pr-0 hidden xl:flex"
                animate={navTextAnimation}
                transition={{ ease: "easeOut" }}
            >
                <div
                    className={`cursor-pointer tracking-wider font-medium border-b-2 ${
                        activeTab === "services" ? "border-current" : "border-transparent"
                    } transition-all duration-250 ease-out`}
                    onClick={() => {
                        refs.servicesRef.current &&
                            window.scrollTo({
                                behavior: "smooth",
                                top: refs.servicesRef.current.offsetTop,
                            });
                    }}
                >
                    OUR&nbsp;SERVICES
                </div>
                <div
                    className={`cursor-pointer tracking-wider font-medium border-b-2 ${
                        activeTab === "projects" ? "border-current" : "border-transparent"
                    } transition-all duration-250 ease-out`}
                    onClick={() => {
                        refs.projectsRef.current &&
                            window.scrollTo({
                                behavior: "smooth",
                                top: refs.projectsRef.current.offsetTop,
                            });
                    }}
                >
                    PROJECTS
                </div>
                <div
                    className={`cursor-pointer tracking-wider font-medium border-b-2 ${
                        activeTab === "team" ? "border-current" : "border-transparent"
                    } transition-all duration-250 ease-out`}
                    onClick={() => {
                        refs.teamRef.current &&
                            window.scrollTo({
                                behavior: "smooth",
                                top: refs.teamRef.current.offsetTop,
                            });
                    }}
                >
                    MEET&nbsp;THE&nbsp;TEAM
                </div>
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
                        <MenuIcon
                            stroke={isScrolling ? "#2E2E2E" : "white"}
                        />
                    </div>
                </IconButton>
            </motion.div>
        </motion.div>
    );
}
