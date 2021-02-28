import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

import { serviceData } from "../assets/db";

const ServiceCard = ({ service, history }) => (
    <motion.div
        className="relative w-full h-64 flex shadow-lg hover:shadow-xl transition-shadow duration-400 rounded-3xl"
        // style={{
        //     backdropFilter: "blur(15px)",
        //     WebkitBackdropFilter: "blur(15px)",
        //     backgroundImage: service.img,
        // }}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", bounce: 0.6 }}
        onClick={() => history.push(`/services/${service.link}`)}
    >
        <div className="font-semibold text-center text-xl md:text-3xl xl:text-2xl tracking-wide text-text text-shadow-md flex m-auto p-8">
            {service.title}
        </div>
        {/* <div className="p-4 md:p-6 font-semibold text-left text-xl md:text-3xl xl:text-2xl tracking-wide text-text text-shadow-md absolute">
            {service.title}
        </div> */}
        {/* <img src={TileImg} alt="service" className="rounded-3xl w-full" /> */}
    </motion.div>
);

export default function Services({ padding, inView, wasViewed }) {
    const history = useHistory();

    return (
        <div className={`xl:h-screen flex flex-col ${padding}`}>
            <div className="pt-20 xs:pt-28 md:pt-40 xl:pt-0 mb-2" />
            <div className="flex flex-col my-auto">
                <p className="font-bold text-3xl xs:text-4xl md:text-6xl tracking-wide xl:hidden pb-16 md:pb-24 text-text">
                    Our Services
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:gap-x-12 gap-y-12">
                    {serviceData.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            animate={
                                inView ? { scale: 1 } : wasViewed ? { scale: 1 } : { scale: 0 }
                            }
                            transition={{ delay: i * 0.2, type: "spring", bounce: 0.4 }}
                            className={`${service.wide ? "md:col-span-2" : ""}`}
                        >
                            <ServiceCard service={service} history={history} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
