import { createElement } from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import * as cardIcons from "react-icons/fi";

import { serviceData } from "../assets/db";

const ServiceCard = ({ service, history }) => {
    const cardIcon = cardIcons[service.icon];

    return (
        <motion.div
            className="relative w-full h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-400 rounded-3xl"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", bounce: 0.6 }}
            onClick={() => history.push(`/services/${service.link}`)}
        >
            <div className="mx-auto pt-8 text-3xl text-text">{createElement(cardIcon)}</div>
            <div className="flex flex-col m-auto p-8 space-y-2 text-text text-center">
                <p className="font-semibold text-xl md:text-2xl tracking-wide bg-clip-text text-text">
                    {service.title}
                </p>
                <p>{service.description}</p>
            </div>
        </motion.div>
    );
};

export default function Services({ padding, inView, wasViewed }) {
    const history = useHistory();

    return (
        <div className={`flex flex-col ${padding}`}>
            <div className="flex flex-col my-auto space-y-24">
                <div>
                    <p className="font-bold text-3xl xs:text-4xl md:text-5xl tracking-wide md:leading-tight pb-16 md:pb-24 xl:pb-16 text-text text-center">
                        What services do we offer?
                    </p>
                    <p className="md:text-lg text-textSecondary text-left md:text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-x-12 gap-y-12">
                    {serviceData.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 100, opacity: 0 }}
                            animate={
                                inView
                                    ? { y: 0, opacity: 1 }
                                    : wasViewed
                                    ? { y: 0, opacity: 1 }
                                    : { y: 100, opacity: 0 }
                            }
                            transition={{ delay: i * 0.1, type: "spring", bounce: 0.4 }}
                        >
                            <ServiceCard service={service} history={history} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
