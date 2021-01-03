import { useRef, useEffect, useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useCycle } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Team from "./components/Team";
import theme from "./styles/theme";
import "./App.css";

export default function App() {
    const [targetElement, setTargetElement] = useState(null);
    const [menuOpen, toggleMenuOpen] = useCycle(false, true);
    const [servicesInViewRef, servicesInView] = useInView({ threshold: 0.5 });
    const [projectsInViewRef, projectsInView] = useInView({ threshold: 0.5 });
    const [teamInViewRef, teamInView] = useInView({ threshold: 0.5 });

    const projectsRef = useRef(null);
    const servicesRef = useRef(null);
    const teamRef = useRef(null);
    const navRef = useRef(null);

    const refs = { projectsRef, servicesRef, teamRef };

    const activeTab = () => {
        if (servicesInView) {
            return "services";
        } else if (projectsInView) {
            return "projects";
        } else if (teamInView) {
            return "team";
        } else return null;
    };

    useEffect(() => {
        setTargetElement(navRef.current);

        if (menuOpen) {
            disableBodyScroll(targetElement);
        } else if (!menuOpen) {
            enableBodyScroll(targetElement);
        }
    }, [menuOpen, targetElement]);

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <div ref={navRef}>
                    <Navbar
                        refs={refs}
                        activeTab={activeTab()}
                        menuOpen={menuOpen}
                        toggleMenuOpen={toggleMenuOpen}
                    />
                </div>
                <div>
                    <Header />
                </div>
                <div className="xl:px-24 2xl:px-36 px-12">
                    <div ref={servicesRef}>
                        <div ref={servicesInViewRef} className="border-b">
                            <Services />
                        </div>
                    </div>
                    <div ref={projectsRef}>
                        <div ref={projectsInViewRef} className="border-b">
                            <Team />
                        </div>
                    </div>
                    <div ref={teamRef}>
                        <div ref={teamInViewRef} className="border-b">
                            <Team />
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}
