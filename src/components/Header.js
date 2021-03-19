import { motion } from "framer-motion";

import CustomButton from "./CustomButton";
// import HeroCards from "./HeroCards";
import headerImg from "../assets/yeo-feature-1.webp";
import "../styles/header.css";

export default function Header({ footerRef, padding }) {
    const headerText = ["Marketing", "Web Development", "Photo/Video/Music"];

    return (
        <div
            className={`mainHeader h-full xl:h-screen z-30 flex flex-col xl:flex-row pt-24 xs:pt-32 md:pt-44 lg:pt-64 xl:pt-44 md:pb-24 my-auto ${padding}`}
        >
            <div className="w-full xl:pr-36 my-auto">
                <div className="py-6 text-2.5xl xs:text-3.5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl font-bold text-white tracking-wide leading-snug xs:leading-snug sm:leading-snug md:leading-snug lg:leading-snug xl:leading-snug text-shadow-md">
                    {headerText.map((line, i) => (
                        <motion.p
                            key={i}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1, type: "spring", bounce: 0.4 }}
                        >
                            {line}
                        </motion.p>
                    ))}
                </div>
                <p className="font-light xl:font-extralight text-sm xs:text-lg md:text-xl lg:text-2xl xl:text-lg text-white opacity-80 tracking-wide leading-normal">
                    Verticoda Studios is the next generation of segmented marketing for your
                    customised marketing needs.
                </p>
                <div className="pt-10 flex">
                    <CustomButton
                        textColor="rgba(255,255,255,1)"
                        bgColor="rgba(255,255,255,0)"
                        borderColor="rgba(255,255,255,0.2)"
                        ringColor="ring-white"
                        onClick={() => {
                            footerRef.current &&
                                window.scrollTo({
                                    behavior: "smooth",
                                    top: footerRef.current.offsetTop,
                                });
                        }}
                    >
                        CONTACT US
                    </CustomButton>
                </div>
            </div>
            <div className="my-auto w-full p-12 md:p-16 lg:px-32 xl:px-16 pointer-events-none">
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: "tween", duration: 1 }}
                    src={headerImg}
                    alt="head"
                    style={{ filter: "drop-shadow(0 0.5rem 0.35rem rgba(0,0,0,0.1))" }}
                />
                {/* <HeroCards /> */}
            </div>
        </div>
    );
}
