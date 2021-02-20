import { motion } from "framer-motion";

import AEH from "../assets/client_logos/AEH.png";
import AIMS from "../assets/client_logos/AIMS.png";
import EV from "../assets/client_logos/EV.png";
import FCHABEYS from "../assets/client_logos/FCHABEYS.png";
import LONS from "../assets/client_logos/LONS.png";
import TCHA from "../assets/client_logos/TCHA.png";

const clientLogos = [AEH, AIMS, EV, TCHA, FCHABEYS, LONS];

export default function Projects({ padding, inView, wasViewed }) {
    return (
        <div className={`xl:h-screen flex flex-col ${padding}`}>
            <div className="pt-24 md:pt-52 xl:pt-32 mb-2" />
            <div className="flex flex-col">
                <p className="font-bold text-3xl xs:text-4xl md:text-6xl tracking-wide xl:hidden pb-16 md:pb-24 text-text">
                    Clients
                </p>
                <div className="grid justify-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-52 md:gap-y-16 p-8 md:p-0">
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
                            <img alt="client" src={client} className="p-8 md:p-0" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
