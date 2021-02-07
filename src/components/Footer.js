import { motion } from "framer-motion";
import { IconButton } from "@material-ui/core";
import {
    FaFacebook,
    FaFacebookMessenger,
    FaInstagram,
    FaPhoneAlt,
    FaTwitter,
    FaViber,
    FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import CustomButton from "./CustomButton";

export default function Footer() {
    return (
        <div className="flex flex-col justify-start py-4 bg-gray-500 bg-opacity-5 px-6 md:px-12 xl:px-24 2xl:px-36">
            <div className="flex flex-col xl:flex-row xl:justify-between">
                <p className="w-full text-text text-xl md:text-2xl font-bold tracking-wider py-4">
                    CONTACT US
                </p>
                <div className="w-full grid grid-cols-3 md:grid-cols-6 gap-y-4 justify-items-center xl:justify-items-end text-text pt-4 xl:pt-2 pb-8">
                    <div>
                        <IconButton
                            className="focus:outline-none"
                            centerRipple={false}
                            onClick={() =>
                                window.open("https://www.facebook.com/VerticodaStudios/", "_blank")
                            }
                        >
                            <div className="text-3xl md:text-4xl xl:text-3xl">
                                <FaFacebook />
                            </div>
                        </IconButton>
                    </div>
                    <div>
                        <IconButton
                            className="focus:outline-none"
                            centerRipple={false}
                            onClick={() => window.open("https://m.me/VerticodaStudios/", "_blank")}
                        >
                            <div className="text-3xl md:text-4xl xl:text-3xl">
                                <FaFacebookMessenger />
                            </div>
                        </IconButton>
                    </div>
                    <div>
                        <IconButton
                            className="focus:outline-none"
                            centerRipple={false}
                            onClick={() =>
                                window.open("https://twitter.com/verticodastudios", "_blank")
                            }
                        >
                            <div className="text-3xl md:text-4xl xl:text-3xl">
                                <FaTwitter />
                            </div>
                        </IconButton>
                    </div>
                    <div>
                        <IconButton
                            className="focus:outline-none"
                            centerRipple={false}
                            onClick={() =>
                                window.open("https://www.instagram.com/verticodastudios/", "_blank")
                            }
                        >
                            <div className="text-3xl md:text-4xl xl:text-3xl">
                                <FaInstagram />
                            </div>
                        </IconButton>
                    </div>
                    <div>
                        <IconButton
                            className="focus:outline-none"
                            centerRipple={false}
                            onClick={() => window.open("https://wa.link/n4yk31/", "_blank")}
                        >
                            <div className="text-3xl md:text-4xl xl:text-3xl">
                                <FaWhatsapp />
                            </div>
                        </IconButton>
                    </div>
                    <div>
                        <IconButton
                            className="focus:outline-none"
                            centerRipple={false}
                            onClick={() => window.open("viber://chat?number=9607821610", "_blank")}
                        >
                            <div className="text-3xl md:text-4xl xl:text-3xl">
                                <FaViber />
                            </div>
                        </IconButton>
                    </div>
                </div>
            </div>
            <div className="xl:flex justify-between items-end">
                <div className="text-text hidden xl:flex flex-col">
                    <div className="font-bold tracking-wider flex">
                        A subsidary of&nbsp;
                        <motion.p
                            animate={{ color: ["#8D61FF", "#20BF6B"] }}
                            transition={{
                                ease: "easeOut",
                                duration: 30,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                        >
                            VERTICODA
                        </motion.p>
                    </div>
                    <p className="text-sm md:text-base">Copyright © 2021</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 xl:gap-y-0 md:gap-x-8 px-6 xs:px-8 xl:px-0">
                    <CustomButton
                        textColor="#2e2e2e"
                        borderColor="#2e2e2e33"
                        variant="outlined"
                        size="small"
                        href="tel:+9607821610"
                    >
                        {
                            <div className="flex items-center space-x-4">
                                <FaPhoneAlt />
                                <p>CALL US</p>
                            </div>
                        }
                    </CustomButton>
                    <CustomButton
                        textColor="#2e2e2e"
                        borderColor="#2e2e2e33"
                        variant="outlined"
                        size="small"
                        href="mailto:hello@verticoda.com"
                    >
                        {
                            <div className="flex items-center space-x-4">
                                <MdEmail />
                                <p>EMAIL US</p>
                            </div>
                        }
                    </CustomButton>
                </div>
                <div className="text-text xl:hidden flex flex-col pt-12">
                    <p className="font-bold tracking-wider">A subsidary of VERTICODA</p>
                    <p className="text-sm md:text-base">Copyright © 2021</p>
                </div>
            </div>
        </div>
    );
}
