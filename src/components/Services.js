import { motion } from "framer-motion";

const serviceData = [
    { id: 0, title: "Weddings", wide: true },
    { id: 1, title: "Weddings", wide: false },
    { id: 2, title: "Weddings", wide: false },
    { id: 3, title: "Weddings", wide: false },
    { id: 4, title: "Weddings", wide: false },
    { id: 5, title: "Weddings", wide: true },
];

const ServiceCard = (props) => (
    <motion.div
        className={`w-full h-64 flex shadow-lg rounded-xl ${props.wide ? "col-span-2" : ""}`}
        whileHover={{ scale: 1.06 }}
        transition={{ type: "spring", bounce: 0.6 }}
    >
        <div className="p-6 font-semibold text-xl">{props.title}</div>
    </motion.div>
);

export default function Services() {
    return (
        <div className="xl:h-screen pt-44 pb-12 grid grid-cols-2 xl:grid-cols-4 grid-rows-2 gap-x-12 gap-y-12">
            {serviceData.map((service) => (
                <ServiceCard
                    wide={service.wide}
                    key={service.id}
                    title={service.title}
                    color={service.color}
                />
            ))}
        </div>
    );
}
