import { motion } from "framer-motion";

const heroLst = [{ rotate: -45 }, { rotate: 45 }, { rotate: 0 }];

function HeroCard(props) {
    return (
        <motion.div
            className="absolute h-96 w-64 rounded-3xl bg-white bg-opacity-10 shadow-lg"
            style={{ backdropFilter: "blur(25px)", WebkitBackdropFilter: "blur(25px)" }}
            animate={{ transformOrigin: "bottom", transform: `rotate(${props.rotate}deg)` }}
            transition={{ type: "spring", bounce: 0.1, delay: 0.5, duration: 1.5 }}
        ></motion.div>
    );
}

export default function HeroCards() {
    return (
        <div className="relative">
            {heroLst.map((hero, i) => (
                <HeroCard key={i} rotate={hero.rotate} />
            ))}
        </div>
    );
}
