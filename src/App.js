import { ThemeProvider } from "@material-ui/core/styles";
import { useInView } from "react-intersection-observer";

import Team from "./components/Team";
import Header from "./components/Header/Header";
import theme from "./styles/theme";
import "./App.css";

export default function App() {
    const [servicesRef, servicesInView] = useInView({ threshold: 0.5 });
    const [projectsRef, projectsInView] = useInView({ threshold: 0.5 });
    const [teamRef, teamInView] = useInView({ threshold: 0.5 });

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
                <div ref={servicesRef} className="bg-blue-200">
                    <Team />
                </div>
                <div ref={projectsRef} className="bg-blue-500">
                    <Team />
                </div>
                <div ref={teamRef} className="bg-blue-800">
                    <Team />
                </div>
            </div>
        </ThemeProvider>
    );
}
