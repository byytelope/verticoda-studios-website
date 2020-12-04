import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Navbar({ refs, activeTab }) {
    const [isScrolling, setIsScrolling] = useState(false);
    const navBgAnimation = useAnimation();
    const navTextAnimation = useAnimation();

    useEffect(() => {
        const navBgAnim = {
            initial: () => {
                navBgAnimation.start({
                    backgroundColor: "rgba(255,255,255,0)",
                    backdropFilter: "",
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
            className={`fixed grid grid-cols-2 w-full z-50 2xl:px-32 px-12 ${
                isScrolling ? "shadow-md" : ""
            } transition ease-out`}
            animate={navBgAnimation}
            transition={{ ease: "easeOut" }}
        >
            <motion.div
                className={"text-xl items-center tracking-widest py-8 text-white text-shadow-md"}
                animate={navTextAnimation}
                transition={{ ease: "easeOut" }}
            >
                <div className="font-bold">{"VERTICODA STUDIOS"}</div>
                <div>{"BY VERTICODA"}</div>
            </motion.div>
            <motion.div
                className="flex items-center justify-center space-x-20 text-white text-shadow-md text-lg"
                animate={navTextAnimation}
                transition={{ ease: "easeOut" }}
            >
                <div
                    className={`cursor-pointer tracking-wide border-current ${
                        activeTab === "services" ? "border-b" : ""
                    }`}
                    onClick={() => {
                        refs.servicesRef && console.log(refs);
                        window.scrollTo({
                            behavior: "smooth",
                            top: refs.servicesRef.offsetTop,
                        });
                    }}
                >
                    OUR&nbsp;SERVICES
                </div>
                <div
                    className={`cursor-pointer tracking-wide border-current ${
                        activeTab === "projects" ? "border-b" : ""
                    }`}
                    onClick={() =>
                        refs.projectsRef &&
                        window.scrollTo({
                            behavior: "smooth",
                            top: refs.projectsRef.offsetTop,
                        })
                    }
                >
                    PROJECTS
                </div>
                <div
                    className={`cursor-pointer tracking-wide border-current ${
                        activeTab === "team" ? "border-b" : ""
                    }`}
                    onClick={() =>
                        refs.teamRef &&
                        window.scrollTo({
                            behavior: "smooth",
                            top: refs.teamRef.offsetTop,
                        })
                    }
                >
                    MEET&nbsp;THE&nbsp;TEAM
                </div>
            </motion.div>
        </motion.div>
    );
}
