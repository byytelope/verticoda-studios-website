import { motion } from "framer-motion";
import { GiMicrophone } from "react-icons/gi";
import { DiTerminalBadge } from "react-icons/di";
import { VscFileMedia } from "react-icons/vsc";

function IconCardBase({ children }) {
    return (
        <motion.div
            className="w-40 h-40 border border-white border-opacity-20 bg-white bg-opacity-10 flex justify-center"
            style={{ backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}
            initial={{ y: 0, boxShadow: "none" }}
            whileHover={{
                y: -40,
                boxShadow:
                    "20px 5px 40px rgba(0,0,0,0.05), 0px 5px 40px rgba(0,0,0,0.05), -20px 5px 40px rgba(0,0,0,0.05)",
            }}
        >
            {children}
        </motion.div>
    );
}

function MarketingHeaderIcon() {
    return (
        <IconCardBase>
            <div class="my-auto">
                <GiMicrophone fontSize="4.5rem" color="white" />
            </div>
        </IconCardBase>
    );
}

function WebDevHeaderIcon() {
    return (
        <IconCardBase>
            <div class="my-auto">
                <DiTerminalBadge fontSize="8rem" color="white" />
            </div>
        </IconCardBase>
    );
}

function MediaHeaderIcon() {
    return (
        <IconCardBase>
            <div class="my-auto">
                <VscFileMedia fontSize="4.5rem" color="white" />
            </div>
        </IconCardBase>
    );
}

export default function HeaderIcons() {
    return (
        <div className="flex justify-around xl:justify-start">
            <div className="z-0 relative">
                <div className="absolute left-0 top-0 hidden xl:flex">
                    <MarketingHeaderIcon />
                </div>
                <div className="flex xl:hidden">
                    <MarketingHeaderIcon />
                </div>
            </div>
            <div className="z-10 relative">
                <div className="absolute left-20 top-20 hidden xl:flex">
                    <WebDevHeaderIcon />
                </div>
                <div className="flex xl:hidden">
                    <WebDevHeaderIcon />
                </div>
            </div>
            <div className="z-20 relative">
                <div className="absolute left-40 top-40 hidden xl:flex">
                    <MediaHeaderIcon />
                </div>
                <div className="flex xl:hidden">
                    <MediaHeaderIcon />
                </div>
            </div>
        </div>
    );
}
