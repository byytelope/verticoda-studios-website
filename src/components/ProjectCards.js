import { motion } from "framer-motion";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const ProjectCard = (props) => (
    <motion.div
        className="rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-400 flex flex-col max-w-xl xl:max-w-md p-4 bg-white"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", bounce: 0.6 }}
    >
        <img src={props.img} alt="CardImg" className="rounded-xl pointer-events-none border" />
        <div className="pt-8 pb-4 xl:pt-6 xl:pb-4 px-2">
            <p className="font-medium text-4xl xl:text-2xl text-text">{props.title}</p>
            <p className="text-2xl xl:text-xl text-text">{props.category}</p>
            <p className="text-xl xl:text-base text-gray-600 font-light pt-4">{props.details}</p>
        </div>
    </motion.div>
);

export default function ProjectCards({ projectData, activeCard, setActiveCard }) {
    return (
        <div>
            <AutoPlaySwipeableViews
                index={activeCard}
                slideClassName="justify-center flex"
                resistance
                springConfig={{
                    duration: "1s",
                    easeFunction: "cubic-bezier(0.65, 0, 0.35, 1)",
                    delay: "0s",
                }}
                onChangeIndex={(index) => setActiveCard(index)}
                autoplay
                interval={4000}
            >
                {projectData.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 100, x: 0 }}
                        transition={{ type: "spring", bounce: 0.2 }}
                        className="pb-12 pt-2"
                    >
                        <ProjectCard
                            key={i}
                            img={project.img}
                            title={project.title}
                            details={project.details}
                            category={project.category}
                        />
                    </motion.div>
                ))}
            </AutoPlaySwipeableViews>
        </div>
    );
}
