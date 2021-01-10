import CustomButton from "../CustomButton";
import "../../styles/header.css";

export default function Header() {
    return (
        <div className="mainHeader h-screen sm:h-full md:h-screen z-30 flex flex-col xl:flex-row px-4 md:px-12 xl:px-24 2xl:px-36 pt-20 md:pt-44 md:pb-24 my-auto">
            <div className="w-full xl:pr-36 my-auto">
                <p className="py-6 text-4xl lg:text-7xl xl:text-6xl font-bold text-white tracking-wide leading-snug lg:leading-snug xl:leading-snug text-shadow-md">
                    Marketing
                    <br />
                    Web&nbsp;Development
                    <br />
                    Photo/Video/Music
                </p>
                <p className="font-light xl:font-extralight text-lg md:text-2xl xl:text-lg text-white opacity-80 tracking-wide leading-normal xl:pr-96">
                    Verticoda Studios is the next generation of segmented marketing for your
                    customised marketing needs.
                </p>
                <div className="pt-10 pb-16 flex">
                    <CustomButton
                        textColor="rgba(255,255,255,1)"
                        bgColor="rgba(255,255,255,0)"
                        borderColor="rgba(255,255,255,0.2)"
                        ringColor="white"
                    >
                        CALL US NOW
                    </CustomButton>
                </div>
            </div>
            {/* <div className="pt-24 xl:pt-16 w-full h-full pl-36"><HeaderIcons /></div> */}
        </div>
    );
}
