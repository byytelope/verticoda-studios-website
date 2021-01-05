import { motion } from "framer-motion";
import IconButton from "@material-ui/core/IconButton";
import { BiRightArrowAlt } from "react-icons/bi";
import { BiLeftArrowAlt } from "react-icons/bi";

import AEHUni from "../assets/Website Tile.jpg";

const projectData = [
    {
        id: 0,
        img: AEHUni,
        title: "Addu Equatorial Hospital",
        category: "Uniform Design",
        details: "Bla bla lorem ipsum nice shirt beautiful shirt",
    },
];

const ProjectCard = (props) => (
    <motion.div
        className="rounded-xl shadow-lg flex flex-col w-full xl:max-w-md px-4"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", bounce: 0.6 }}
    >
        <img src={props.img} alt="CardImg" className="rounded-xl pointer-events-none" />
        <div className="pt-8 pb-12 px-2">
            <p className="font-medium text-4xl xl:text-2xl text-text">{props.title}</p>
            <p className="text-2xl xl:text-xl text-text">{props.category}</p>
            <p className="text-xl xl:text-base text-gray-600 font-light pt-4">{props.details}</p>
        </div>
    </motion.div>
);

export default function Projects() {
    return (
        <div className="xl:h-screen flex flex-col">
            <div className="pt-32 mb-2" />
            <div className="flex flex-col my-auto">
                <p className="font-bold text-6xl tracking-wide xl:hidden pb-24 text-text">
                    Projects
                </p>
                <div className="flex justify-around space-x-8">
                    <div className="my-auto">
                        <IconButton
                            className="focus:outline-none hover:shadow-md transition-shadow duration-300"
                            centerRipple={false}
                        >
                            <BiLeftArrowAlt fontSize="3.5rem" color="#2E2E2E" />
                        </IconButton>
                    </div>
                    {projectData.map((project) => (
                        <ProjectCard
                            key={project.id}
                            img={project.img}
                            title={project.title}
                            details={project.details}
                            category={project.category}
                        />
                    ))}
                    <div className="my-auto">
                        <IconButton
                            className="focus:outline-none hover:shadow-md transition-shadow duration-300"
                            centerRipple={false}
                        >
                            <BiRightArrowAlt fontSize="3.5rem" color="#2E2E2E" />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
