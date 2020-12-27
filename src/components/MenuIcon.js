import { motion } from "framer-motion";

const Path = (props) => (
    <motion.path
        strokeWidth="3"
        strokeLinecap="round"
        {...props}
        style={{ transition: "stroke .25s easeOut" }}
    />
);

export function MenuIcon({ stroke }) {
    return (
        <svg
            height="100%"
            width="100%"
            viewBox="0 0 23 23"
            style={{
                filter: "drop-shadow(0rem 0.2rem 0.11rem rgba(0, 0, 0, 0.15))",
            }}
        >
            <Path
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" },
                }}
                stroke={stroke}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                }}
                stroke={stroke}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" },
                }}
                stroke={stroke}
            />
        </svg>
    );
}
