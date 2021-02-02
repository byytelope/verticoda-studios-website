import { useHistory } from "react-router-dom";

import CustomButton from "../components/CustomButton";
import "../styles/notFoundText.css";

export default function NotFound() {
    const history = useHistory();

    return (
        <div className="flex flex-col items-center justify-around h-screen">
            <div className="font-bold text-5xl text-center text-transparent bg-clip-text notFoundText">
                THIS PAGE DO BE NOT FOUND DOE
            </div>
            <div onClick={() => history.push("/")}>
                <CustomButton>BACK TO HOME</CustomButton>
            </div>
            <div
                className={
                    "text-md md:text-xl lg:text-2xl xl:text-xl items-center tracking-widest py-4 md:py-8 text-transparent bg-clip-text notFoundText text-center"
                }
            >
                <p className="font-bold">VERTICODA&nbsp;STUDIOS</p>
                <p>BY&nbsp;VERTICODA</p>
            </div>
        </div>
    );
}
