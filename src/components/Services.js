import { motion } from "framer-motion";

const serviceData = [
    { id: 0, title: "Event Coverage", link: "event-coverage", wide: true },
    { id: 1, title: "Social Media Management", link: "social-media-mgmt", wide: false },
    { id: 2, title: "Branding", link: "branding", wide: false },
    { id: 3, title: "Videography", link: "videography", wide: false },
    { id: 4, title: "Photoshoots", link: "photoshoots", wide: false },
    { id: 5, title: "Website Development & Design", link: "web-dev", wide: true },
];

const ServiceCard = (props) => (
    <motion.div
        className={`w-full h-64 flex shadow-lg hover:shadow-xl transition-shadow duration-400 rounded-3xl ${
            props.wide ? "col-span-2" : ""
        }`}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", bounce: 0.6 }}
    >
        <div className="p-6 font-semibold text-center mx-auto md:mx-0 md:text-left text-xl md:text-3xl xl:text-2xl tracking-wide text-text">
            {props.title}
        </div>
    </motion.div>
);

export default function Services() {
    return (
        <div className="xl:h-screen flex flex-col">
            <div className="pt-24 md:pt-52 xl:pt-32 mb-2" />
            <div className="flex flex-col my-auto">
                <p className="font-bold text-4xl md:text-6xl tracking-wide xl:hidden pb-16 md:pb-24 text-text">
                    Our Services
                </p>
                <div className="grid grid-cols-2 xl:grid-cols-4 grid-rows-2 gap-x-4 md:gap-x-12 gap-y-4 md:gap-y-12">
                    {serviceData.map((service) => (
                        <ServiceCard
                            wide={service.wide}
                            key={service.id}
                            title={service.title}
                            color={service.color}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
