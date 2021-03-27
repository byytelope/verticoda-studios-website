import { createElement, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import * as cardIcons from "react-icons/fi";

import { serviceData } from "../assets/db";

const ServiceCard = ({ service, history }) => {
    const cardIcon = cardIcons[service.icon];

    return (
        <motion.div
            className="relative w-full h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-[400] rounded-3xl bg-white"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", bounce: 0.6 }}
            onClick={() => history.push(`/services/${service.link}`)}
        >
            <div className="mx-auto pt-8 text-3xl lg:text-5xl xl:text-4xl text-text">
                {createElement(cardIcon)}
            </div>
            <div className="flex flex-col m-auto p-8 space-y-8 text-text text-center">
                <p className="font-medium text-xl md:text-2xl lg:text-3xl xl:text-2xl text-text">
                    {service.title}
                </p>
                <p className="font-light lg:text-xl xl:text-base">{service.description}</p>
            </div>
        </motion.div>
    );
};

export default function Services({ padding }) {
    const initTh = 0.1;

    const history = useHistory();
    const [cardsHeight, setCardsHeight] = useState(0);
    const [cardsWasViewed, setCardsWasViewed] = useState(false);
    const [cardsThreshold, setCardsThreshold] = useState(initTh);
    const [cardsRef, cardsInView] = useInView({ threshold: cardsThreshold });

    useEffect(() => {
        if (cardsInView) {
            setCardsWasViewed(true);
        }
    }, [cardsInView]);

    useEffect(() => {
        setCardsHeight(cardsRef.current && cardsRef.current.getBoundingClientRect().height);

        const winHeight = window.innerHeight;

        if (cardsHeight > winHeight * initTh) {
            const newTh = ((winHeight * initTh) / cardsHeight) * initTh;
            setCardsThreshold(newTh);
        }
    }, [cardsHeight, cardsRef]);

    return (
        <div className={`flex flex-col ${padding}`}>
            <div className="flex flex-col my-auto space-y-24">
                <div>
                    <p className="font-semibold text-3xl xs:text-3xl md:text-4xl lg:text-5xl xl:text-4xl md:leading-tight pb-16 md:pb-24 xl:pb-8 text-text text-center">
                        What services do we offer?
                    </p>
                    <p className="font-light md:text-lg lg:text-2xl xl:text-lg text-textSecondary text-center">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, neque
                        voluptatum reprehenderit adipisci itaque quisquam laborum tempore porro
                        vitae accusamus explicabo ex fuga quae nesciunt blanditiis dicta provident
                        quasi numquam!
                    </p>
                </div>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-x-12 gap-y-12"
                    ref={cardsRef}
                >
                    {serviceData.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 100, opacity: 0 }}
                            animate={
                                cardsInView
                                    ? { y: 0, opacity: 1 }
                                    : cardsWasViewed
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
