import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Navbar() {
    const navAnimation = useAnimation();
    const [navTextColor, setNavTextColor] = useState("white");

    useEffect(() => {
        const navBgAnim = {
            initial: () => {
                navAnimation.start({
                    backgroundColor: "rgba(255,255,255,0)",
                });
            },
            final: () => {
                navAnimation.start({
                    backgroundColor: "rgba(255,255,255,0.1)",
                });
            },
        };

        const handleScroll = () => {
            const yPos = window.scrollY;

            if (yPos > 140) {
                navBgAnim.final();
                setNavTextColor("text");
            } else if (yPos < 140) {
                navBgAnim.initial();
                setNavTextColor("white");
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [navAnimation]);

    return (
        <motion.div
            className="fixed flex flex-col w-full z-50 xl:px-72 px-12"
            style={{
                backdropFilter: "blur(10px)",
            }}
            animate={navAnimation}
        >
            <motion.div
                className={`text-xl items-center tracking-widest py-8 text-${navTextColor}`}
            >
                <div className="font-bold">{"VERTICODA STUDIOS"}</div>
                <div>{"BY VERTICODA"}</div>
            </motion.div>
        </motion.div>
    );
}
