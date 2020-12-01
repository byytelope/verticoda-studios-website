import HeaderCard from "./HeaderCard";
import Navbar from "./Navbar";
import HeaderButton from "./HeaderButton";
import "../../styles/header.css";

export default function Home() {
    return (
        <div className="mainHeader">
            <Navbar />
            <div className="flex xl:px-32 px-12 pt-32">
                <div className="w-full pr-36">
                    <div className="py-6 text-6xl font-bold text-white tracking-wide leading-snug text-shadow-md">
                        Marketing
                        <br />
                        Web Development
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
                <div className="w-full">
                    <div className="absolute flex">
                        <div className="self-start">
                            <div
                                className="p-32 bg-white bg-opacity-10 rounded-full"
                                style={{ backdropFilter: "blur(10px)" }}
                            />
                        </div>
                        <div className="self-end pl-8 pt-56">
                            <div
                                className="p-24 bg-white bg-opacity-10 rounded-full"
                                style={{ backdropFilter: "blur(10px)" }}
                            />
                        </div>
                        <div className="self-start pl-16 pt-16">
                            <div
                                className="p-20 bg-white bg-opacity-10 rounded-full"
                                style={{ backdropFilter: "blur(10px)" }}
                            />
                        </div>
                    </div>
                    <div className="py-8 w-full">
                        <HeaderCard />
                    </div>
                </div>
            </div>
        </div>
    );
}
