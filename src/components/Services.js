import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

import TileImg from "../assets/51.jpg";

const serviceData = [
    { title: "Event Coverage", link: "event-coverage", wide: true },
    { title: "Social Media Management", link: "social-media-mgmt", wide: false },
    { title: "Branding", link: "branding", wide: false },
    { title: "Videography", link: "videography", wide: false },
    { title: "Photoshoots", link: "photoshoots", wide: false },
    { title: "Website Development & Design", link: "web-dev", wide: true },
];

const ServiceCard = (props) => (
    <motion.div
        className={`relative w-full h-64 flex shadow-lg hover:shadow-xl transition-shadow duration-400 rounded-3xl ${
            props.wide ? "col-span-2" : ""
        }`}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", bounce: 0.6 }}
        onClick={() => props.history.push(`/services/${props.link}`)}
    >
        <div className="p-4 md:p-6 font-semibold text-center mx-auto md:mx-0 md:text-left text-lg md:text-3xl xl:text-2xl tracking-wide text-white text-shadow-lg absolute">
            {props.title}
        </div>
        <motion.img src={TileImg} alt="service" className="rounded-3xl"/>
    </motion.div>
);

export default function Services() {
    const history = useHistory();

    return (
        <div className="xl:h-screen flex flex-col">
            <div className="pt-24 md:pt-52 xl:pt-32 mb-2" />
            <div className="flex flex-col my-auto">
                <p className="font-bold text-4xl md:text-6xl tracking-wide xl:hidden pb-16 md:pb-24 text-text">
                    Our Services
                </p>
                <div className="grid grid-cols-2 xl:grid-cols-4 grid-rows-2 gap-x-4 md:gap-x-12 gap-y-4 md:gap-y-12">
                    {serviceData.map((service, i) => (
                        <ServiceCard
                            key={i}
                            wide={service.wide}
                            title={service.title}
                            history={history}
                            link={service.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
