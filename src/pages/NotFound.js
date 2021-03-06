import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

import CustomButton from "../components/CustomButton";
import "../styles/header.css";

export default function NotFound() {
    const history = useHistory();

    return (
        <motion.div
            className="mainHeader flex flex-col items-center justify-around h-screen text-white text-center text-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
        >
            <div>
                <p className="font-bold text-5xl p-8">THIS PAGE DO BE NOT FOUND DOE</p>
                <p className="font-light text-3xl p-8">Stop snoopin' around!</p>
            </div>
            <div onClick={() => history.push("/")}>
                <CustomButton
                    textColor="rgba(255,255,255,1)"
                    bgColor="rgba(255,255,255,0)"
                    borderColor="rgba(255,255,255,0.2)"
                    ringColor="ring-white"
                >
                    BACK TO HOME
                </CustomButton>
            </div>
            <div
                className={
                    "text-md md:text-xl lg:text-2xl xl:text-xl items-center tracking-widest py-4 md:py-8 "
                }
            >
                <p className="font-bold">VERTICODA&nbsp;STUDIOS</p>
                <p>BY&nbsp;VERTICODA</p>
            </div>
        </motion.div>
    );
}
