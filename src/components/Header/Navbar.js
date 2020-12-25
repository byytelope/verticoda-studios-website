import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Lottie from "lottie-react";

import menuAnimationLight from "../../assets/lottie/MenuLight.json";
import menuAnimationDark from "../../assets/lottie/MenuDark.json";

export default function Navbar({ refs, activeTab }) {
    const [isScrolling, setIsScrolling] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navBgAnimation = useAnimation();
    const navTextAnimation = useAnimation();
    const lottieRefDark = useRef();
    const lottieRefLight = useRef();

    const lottieStyle = {
        height: 65,
        width: 65,
    };

    const lottieOptions = {
        loop: false,
        autoplay: false,
        style: lottieStyle,
    };

    const handleMenuClick = () => {
        if (lottieRefDark.current && lottieRefLight.current) {
            if (menuOpen) {
                lottieRefDark.current.playSegments([30, 0], true);
                lottieRefLight.current.playSegments([30, 0], true);
                setMenuOpen(false);
            } else if (!menuOpen) {
                lottieRefDark.current.playSegments([0, 30], true);
                lottieRefLight.current.playSegments([0, 30], true);
                setMenuOpen(true);
            }
        }
    };

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
            className={`fixed grid grid-cols-2 w-full z-50 2xl:px-32 px-12 border-b-2 border-black border-opacity-0 ${
                isScrolling ? "border-opacity-10" : ""
            } transition ease-out`}
            animate={navBgAnimation}
            transition={{ ease: "easeOut" }}
        >
            <motion.div
                className={"text-xl items-center tracking-widest py-8 text-white text-shadow-md"}
                animate={navTextAnimation}
                transition={{ ease: "easeOut" }}
            >
                <div className="font-bold">VERTICODA&nbsp;STUDIOS</div>
                <div>BY&nbsp;VERTICODA</div>
            </motion.div>
            <motion.div
                className="items-center justify-center space-x-20 text-white text-shadow-md text-lg pr-16 xl:pr-0 hidden xl:flex"
                animate={navTextAnimation}
                transition={{ ease: "easeOut" }}
            >
                <div
                    className={`cursor-pointer tracking-wider font-medium border-current ${
                        activeTab === "services" ? "border-b-2" : ""
                    }`}
                    onClick={() => {
                        refs.servicesRef.current && console.log(refs);
                        window.scrollTo({
                            behavior: "smooth",
                            top: refs.servicesRef.current.offsetTop,
                        });
                    }}
                >
                    OUR&nbsp;SERVICES
                </div>
                <div
                    className={`cursor-pointer tracking-wider font-medium border-current ${
                        activeTab === "projects" ? "border-b-2" : ""
                    }`}
                    onClick={() =>
                        refs.projectsRef.current &&
                        window.scrollTo({
                            behavior: "smooth",
                            top: refs.projectsRef.current.offsetTop,
                        })
                    }
                >
                    PROJECTS
                </div>
                <div
                    className={`cursor-pointer tracking-wider font-medium border-current ${
                        activeTab === "team" ? "border-b-2" : ""
                    }`}
                    onClick={() =>
                        refs.teamRef.current &&
                        window.scrollTo({
                            behavior: "smooth",
                            top: refs.teamRef.current.offsetTop,
                        })
                    }
                >
                    MEET&nbsp;THE&nbsp;TEAM
                </div>
            </motion.div>
            <div className="flex xl:hidden justify-end -mr-7 my-7" onClick={() => handleMenuClick()}>
                <div
                    className={`absolute z-10 transition-opacity ${
                        isScrolling ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <Lottie
                        {...lottieOptions}
                        animationData={menuAnimationDark}
                        lottieRef={lottieRefDark}
                    />
                </div>
                <div className="absolute z-0">
                    <Lottie
                        {...lottieOptions}
                        animationData={menuAnimationLight}
                        lottieRef={lottieRefLight}
                    />
                </div>
            </div>
        </motion.div>
    );
}
