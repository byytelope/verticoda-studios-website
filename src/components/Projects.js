import { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import { BsArrowRightShort } from "react-icons/bs";
import { BsArrowLeftShort } from "react-icons/bs";

import ProjectCards from "./ProjectCards";
import AEHUni from "../assets/Website Tile.jpg";

const projectData = [
    {
        img: AEHUni,
        title: "Addu Equatorial Hospital 1",
        category: "Uniform Design",
        details: "Bla bla lorem ipsum nice shirt beautiful shirt",
    },
    {
        img: AEHUni,
        title: "Addu Equatorial Hospital 2",
        category: "Uniform Design",
        details: "Bla bla lorem ipsum nice shirt beautiful shirt",
    },
    {
        img: AEHUni,
        title: "Addu Equatorial Hospital 3",
        category: "Uniform Design",
        details: "Bla bla lorem ipsum nice shirt beautiful shirt",
    },
];

export default function Projects() {
    const [activeCard, setActiveCard] = useState(0);

    return (
        <div className="xl:h-screen flex flex-col">
            <div className="pt-52 xl:pt-12 mb-2" />
            <div className="flex flex-col my-auto">
                <div className="flex pb-24 justify-between">
                    <p className="font-bold text-6xl tracking-wide xl:hidden text-text">Projects</p>
                    <div className="my-auto xl:hidden flex space-x-8">
                        <IconButton
                            className="focus:outline-none hover:shadow-md"
                            disabled={activeCard === 0}
                            centerRipple={false}
                            onClick={() => setActiveCard(activeCard - 1)}
                        >
                            <BsArrowLeftShort className="transition-color duration-400 text-7xl" />
                        </IconButton>
                        <IconButton
                            className="focus:outline-none hover:shadow-md"
                            disabled={activeCard === projectData.length - 1}
                            centerRipple={false}
                            onClick={() => setActiveCard(activeCard + 1)}
                        >
                            <BsArrowRightShort className="transition-color duration-400 text-7xl" />
                        </IconButton>
                    </div>
                </div>
                <div className="flex justify-center xl:justify-around xl:space-x-8">
                    <div className="my-auto hidden xl:flex">
                        <IconButton
                            className="focus:outline-none hover:shadow-md"
                            disabled={activeCard === 0}
                            centerRipple={false}
                            onClick={() => setActiveCard(activeCard - 1)}
                        >
                            <BsArrowLeftShort
                                fontSize="3.5rem"
                                className="transition-color duration-400"
                            />
                        </IconButton>
                    </div>
                    <div className="w-full h-full">
                        <ProjectCards
                            projectData={projectData}
                            activeCard={activeCard}
                            setActiveCard={setActiveCard}
                        />
                    </div>
                    <div className="my-auto hidden xl:flex">
                        <IconButton
                            className="focus:outline-none hover:shadow-md"
                            disabled={activeCard === projectData.length - 1}
                            centerRipple={false}
                            onClick={() => setActiveCard(activeCard + 1)}
                        >
                            <BsArrowRightShort
                                fontSize="3.5rem"
                                className="transition-color duration-400"
                            />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
