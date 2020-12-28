import { useRef } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useCycle } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Team from "./components/Team";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar";
import theme from "./styles/theme";
import "./App.css";

export default function App() {
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

    if (menuOpen) {
        disableBodyScroll(navRef.current);
    } else if (!menuOpen) {
        enableBodyScroll(navRef.current);
    }

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
                <div ref={servicesRef}>
                    <div ref={servicesInViewRef} className="border-b">
                        <Team />
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
        </ThemeProvider>
    );
}
