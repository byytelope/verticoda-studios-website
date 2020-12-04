import HeaderButton from "./HeaderButton";
import HeaderCard from "./HeaderCard";
import Navbar from "./Navbar";
import "../../styles/header.css";

export default function Header({ refs, activeTab }) {
    return (
        <div className="mainHeader">
            <Navbar refs={refs} activeTab={activeTab} />
            <div className="grid grid-cols-2 2xl:px-32 px-12 pt-32">
                <div className="w-full pr-36">
                    <div className="py-6 text-6xl font-bold text-white tracking-normal leading-snug text-shadow-md">
                        Marketing
                        <br />
                        Web&nbsp;Development
                        <br />
                        Photo/Video/Music
                    </div>
                    <p className="font-extralight text-lg text-white opacity-80 tracking-wide leading-normal">
                        Verticoda Studios is the next generation of segmented marketing for
                        <br /> your customised marketing needs.
                    </p>
                    <div className="pt-6 pb-16 flex">
                        <HeaderButton />
                    </div>
                </div>
                <div className="py-8 w-full hidden xl:flex">
                    <HeaderCard />
                </div>
            </div>
        </div>
    );
}
