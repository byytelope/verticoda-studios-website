import { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Skeleton from "@material-ui/lab/Skeleton";

import { clientData } from "../assets/db";

const ClientCard = ({ client, imageLoaded, loading }) => (
    <motion.div
        className="flex flex-col w-full h-full bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-400 "
        whileHover={{ scale: 1.03 }}
        animate={loading ? { opacity: 0 } : { opacity: 1 }}
        transition={{ type: "spring", bounce: 0.6 }}
    >
        <img
            src={client.logo}
            alt="ClientLogo"
            className="rounded-xl h-48 w-48 mx-auto"
            onLoad={imageLoaded}
        />
        <div className="flex flex-col m-auto p-8 space-y-2 text-text text-center">
            <p className="font-semibold text-xl md:text-2xl tracking-wide bg-clip-text text-text">
                {client.name}
            </p>
            <p className="font-light">{client.description}</p>
        </div>
    </motion.div>
);

export default function Projects({ padding }) {
    const [loading, setLoading] = useState(true);
    const loadCount = useRef(0);
    const imageLoaded = () => {
        loadCount.current += 1;
        if (loadCount.current >= clientData.length) {
            setLoading(false);
        }
    };

    const initTh = 0.1;
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
                    <p className="font-bold text-3xl xs:text-4xl md:text-5xl tracking-wide md:leading-tight pb-16 md:pb-24 xl:pb-16 text-text text-center">
                        Chosen by the best
                    </p>
                    <p className="font-light md:text-lg text-textSecondary text-left md:text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-x-12 gap-y-12"
                    ref={cardsRef}
                >
                    {clientData.map((client, i) => (
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
                            <ClientCard
                                className={`p-8 md:p-0 ${loading ? "hidden" : "block"}`}
                                imageLoaded={imageLoaded}
                                client={client}
                                loading={loading}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
