import HeaderButton from "./HeaderButton";
import HeaderCard from "./HeaderCard";
import Navbar from "./Navbar";
import "../../styles/header.css";

export default function Header({ refs, activeTab }) {
    return (
        <div className="mainHeader">
            <Navbar refs={refs} activeTab={activeTab} />
            <div className="z-40 grid grid-cols-1 grid-rows-2 xl:grid-rows-1 xl:grid-cols-2 2xl:px-32 px-12 mt-32">
                <div className="w-full xl:pr-36">
                    <p className="py-6 text-6xl font-bold text-white tracking-normal leading-snug text-shadow-md">
                        Marketing
                        <br />
                        Web&nbsp;Development
                        <br />
                        Photo/Video/Music
                    </p>
                    <p className="font-extralight text-lg text-white opacity-80 tracking-wide leading-normal">
                        Verticoda Studios is the next generation of segmented marketing for your
                        customised marketing needs.
                    </p>
                    <div className="pt-6 pb-16 flex">
                        <HeaderButton />
                    </div>
                </div>
                <div className="py-8 w-full h-full">
                    <HeaderCard />
                </div>
            </div>
            {/* <div
                className="z-10 h-full w-full absolute top-0"
                style={{ backdropFilter: "blur(10px)" }}
            /> */}
        </div>
    );
}
