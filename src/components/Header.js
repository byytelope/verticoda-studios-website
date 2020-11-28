import Button from "@material-ui/core/Button";

import Navbar from "./Navbar";
import "../styles/header.css";

export default function Home() {
    return (
        <div className="mainHeader">
            <Navbar />
            <div className="xl:px-72 px-12">
                <div className="py-8 pt-32 text-6xl font-bold text-white tracking-wide leading-snug text-shadow-md">
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
                <div className="py-8 flex">
                    <Button
                        variant="outlined"
                        size="large"
                        className="focus:outline-none h-12 shadow-lg"
                        href="tel:+9607821610"
                    >
                        CALL US NOW!
                    </Button>
                </div>
            </div>
        </div>
    );
}

// style={{ backgroundImage: "linear-gradient(134deg, #C261FF, #26DE81)" }}
