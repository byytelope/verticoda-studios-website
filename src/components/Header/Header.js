import HeaderButton from "./HeaderButton";
// import HeaderIcons from "./HeaderIcons";
import "../../styles/header.css";

export default function Header() {
    return (
        <div className="mainHeader xl:h-screen z-30 flex flex-col xl:flex-row xl:px-24 2xl:px-36 px-12 pt-44 pb-24 my-auto">
            <div className="w-full xl:pr-36">
                <p className="py-6 text-8xl md:text-7xl lg:text-6xl xl:text-6xl font-bold text-white tracking-wide leading-snug md:leading-snug lg:leading-snug xl:leading-snug text-shadow-md">
                    Marketing
                    <br />
                    Web&nbsp;Development
                    <br />
                    Photo/Video/Music
                </p>
                <p className="font-light xl:font-extralight text-3xl xl:text-lg text-white opacity-80 tracking-wide leading-normal">
                    Verticoda Studios is the next generation of segmented marketing for your
                    customised marketing needs.
                </p>
                <div className="pt-10 pb-16 flex">
                    <HeaderButton />
                </div>
            </div>
            <div className="pt-24 xl:pt-16 w-full h-full pl-36">
                {/* <HeaderIcons /> */}
            </div>
        </div>
    );
}
