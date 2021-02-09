import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

import { serviceData } from "../assets/db";

const ServiceCard = ({ service, history }) => (
    <motion.div
        className={`relative w-full h-64 flex shadow-lg hover:shadow-xl transition-shadow duration-400 rounded-3xl ${
            service.wide ? "md:col-span-2" : ""
        }`}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", bounce: 0.6 }}
        onClick={() => history.push(`/services/${service.link}`)}
    >
        <div className="p-4 md:p-6 font-semibold text-left text-xl md:text-3xl xl:text-2xl tracking-wide text-text text-shadow-md absolute">
            {service.title}
        </div>
        {/* <img src={TileImg} alt="service" className="rounded-3xl w-full" /> */}
    </motion.div>
);

export default function Services({ padding }) {
    const history = useHistory();

    return (
        <div className={`xl:h-screen flex flex-col ${padding}`}>
            <div className="pt-24 md:pt-52 xl:pt-32 mb-2" />
            <div className="flex flex-col my-auto">
                <p className="font-bold text-3xl xs:text-4xl md:text-6xl tracking-wide xl:hidden pb-16 md:pb-24 text-text">
                    Our Services
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:gap-x-12 gap-y-12">
                    {serviceData.map((service, i) => (
                        <ServiceCard key={i} service={service} history={history} />
                    ))}
                </div>
            </div>
        </div>
    );
}
