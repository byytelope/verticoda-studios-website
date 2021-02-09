import CustomButton from "./CustomButton";
import headerImg from "../assets/yeo-feature-1.webp";
import "../styles/header.css";

export default function Header({ footerRef, padding }) {
    return (
        <div
            className={`mainHeader h-full xl:h-screen z-30 flex flex-col xl:flex-row pt-16 xs:pt-24 md:pt-44 md:pb-24 my-auto ${padding}`}
        >
            <div className="w-full xl:pr-36 my-auto">
                <p className="py-6 text-2.5xl xs:text-3.5xl md:text-6xl lg:text-7xl xl:text-6xl 2xl:text-7xl font-bold text-white tracking-wide leading-snug xs:leading-snug md:leading-snug lg:leading-snug xl:leading-snug 2xl:leading-snug text-shadow-md">
                    Marketing
                    <br />
                    Web&nbsp;Development
                    <br />
                    Photo/Video/Music
                </p>
                <p className="font-light xl:font-extralight text-sm xs:text-lg md:text-2xl xl:text-lg text-white opacity-80 tracking-wide leading-normal">
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
            <div className="my-auto w-full p-12 md:p-16 lg:px-32 xl:px-0 pointer-events-none">
                <img
                    src={headerImg}
                    alt="head"
                    style={{ filter: "drop-shadow(0 0.5rem 0.35rem rgba(0,0,0,0.1))" }}
                />
            </div>
        </div>
    );
}
