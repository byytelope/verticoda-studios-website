import { motion } from "framer-motion";

import { serviceData } from "../assets/db";

export default function Service({
    match: {
        params: { service: serviceLink },
    },
}) {
    const service = serviceData.find((obj) => {
        return obj.link === serviceLink;
    });

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeOut", duration: 0.4 }}
        >
            {JSON.stringify(service)}
        </motion.div>
    );
}
