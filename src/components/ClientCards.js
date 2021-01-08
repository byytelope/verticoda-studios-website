import { motion } from "framer-motion";

const ClientCard = (props) => (
    <motion.div
        className="rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-400 flex flex-col max-w-xl xl:max-w-xs p-4 bg-white"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", bounce: 0.6 }}
    >
        <img src={props.img} alt="CardImg" className="rounded-xl pointer-events-none border" />
        <div className="pt-8 pb-4 xl:pt-6 xl:pb-4 px-2">
            <p className="font-medium text-4xl xl:text-2xl text-text pb-2">{props.title}</p>
            <p className="text-2xl xl:text-xl text-text">{props.category}</p>
            <p className="text-xl xl:text-base text-gray-600 font-light pt-4">{props.details}</p>
        </div>
    </motion.div>
);

export default function ClientCards({ clientData }) {
    return (
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2 lg:gap-x-12 xl:grid-cols-3 xl:gap-x-32 xl:gap-y-32">
            {clientData.map((client, i) => (
                <ClientCard
                    key={i}
                    img={client.img}
                    title={client.title}
                    details={client.details}
                    category={client.category}
                />
            ))}
        </div>
    );
}
