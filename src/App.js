import { useRef } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { useInView } from "react-intersection-observer";

import Team from "./components/Team";
import Header from "./components/Header/Header";
import theme from "./styles/theme";
import "./App.css";

export default function App() {
    const [servicesInViewRef, servicesInView] = useInView({ threshold: 0.5 });
    const [projectsInViewRef, projectsInView] = useInView({ threshold: 0.5 });
    const [teamInViewRef, teamInView] = useInView({ threshold: 0.5 });

    const projectsRef = useRef(null);
    const servicesRef = useRef(null);
    const teamRef = useRef(null);

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

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Header refs={refs} activeTab={activeTab()} />
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
