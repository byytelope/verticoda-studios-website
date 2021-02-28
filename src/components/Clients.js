import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Skeleton from "@material-ui/lab/Skeleton";

import AEH from "../assets/client_logos/AEH.png";
import AIMS from "../assets/client_logos/AIMS.png";
import EV from "../assets/client_logos/EV.png";
import FCHABEYS from "../assets/client_logos/FCHABEYS.png";
import LONS from "../assets/client_logos/LONS.png";
import TCHA from "../assets/client_logos/TCHA.png";

const clientLogos = [AEH, AIMS, EV, TCHA, FCHABEYS, LONS];

export default function Projects({ padding, inView, wasViewed }) {
    const [loading, setLoading] = useState(true);
    const loadCount = useRef(0);
    const imageLoaded = () => {
        loadCount.current += 1;
        if (loadCount.current >= clientLogos.length) {
            setLoading(false);
        }
    };

    return (
        <div className={`xl:h-screen flex flex-col ${padding}`}>
            <div className="pt-20 xs:pt-28 md:pt-40 xl:pt-0 mb-2" />
            <div className="flex flex-col my-auto">
                <p className="font-bold text-3xl xs:text-4xl md:text-6xl tracking-wide xl:hidden pb-16 md:pb-24 text-text">
                    Clients
                </p>
                <div
                    className={`grid justify-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ${
                        loading ? "gap-16" : "gap-x-64 md:gap-y-16"
                    } xs:p-8 md:p-0`}
                >
                    {clientLogos.map((client, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: -100, opacity: 0 }}
                            animate={
                                inView
                                    ? { y: 0, opacity: 1 }
                                    : wasViewed
                                    ? { y: 0, opacity: 1 }
                                    : { y: -100, opacity: 0 }
                            }
                            transition={{ delay: i * 0.075, type: "spring", bounce: 0.4 }}
                        >
                            <motion.div
                                className={loading ? "block" : "hidden"}
                                animate={loading ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ ease: "easeOut", duration: 0.5 }}
                            >
                                <Skeleton
                                    className="w-full rounded-3xl opacity-60"
                                    height={250}
                                    animation="wave"
                                    variant="rect"
                                />
                            </motion.div>
                            <motion.img
                                alt="client"
                                src={client}
                                className={`p-8 md:p-0 ${loading ? "hidden" : "block"}`}
                                onLoad={imageLoaded}
                                animate={loading ? { opacity: 0 } : { opacity: 1 }}
                                transition={{ ease: "easeOut", duration: 0.5 }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
