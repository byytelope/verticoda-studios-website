import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Navbar() {
    const navBgAnimation = useAnimation();
    const navTextAnimation = useAnimation();

    useEffect(() => {
        const navBgAnim = {
            initial: () => {
                navBgAnimation.start({
                    backgroundColor: "rgba(255,255,255,0)",
                    backdropFilter: "",
                });
            },
            final: () => {
                navBgAnimation.start({
                    backgroundColor: "rgba(155,155,155,0.1)",
                    backdropFilter: "blur(10px)",
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
            className="fixed flex flex-col w-full z-50 xl:px-72 px-12"
            animate={navBgAnimation}
            transition={{ ease: "easeOut" }}
        >
            <motion.div
                className={"text-xl items-center tracking-widest py-8 text-white"}
                animate={navTextAnimation}
                transition={{ ease: "easeOut" }}
            >
                <div className="font-bold">{"VERTICODA STUDIOS"}</div>
                <div>{"BY VERTICODA"}</div>
            </motion.div>
        </motion.div>
    );
}
