import { useRef, useEffect, useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useCycle } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Team from "./components/Team";
import Clients from "./components/Clients";
import theme from "./styles/theme";
import "./App.css";

export default function App() {
    const [targetElement, setTargetElement] = useState(null);
    const [menuOpen, toggleMenuOpen] = useCycle(false, true);
    const [servicesInViewRef, servicesInView] = useInView({ threshold: 0.5 });
    const [clientsInViewRef, clientsInView] = useInView({ threshold: 0.5 });
    const [teamInViewRef, teamInView] = useInView({ threshold: 0.5 });

    const clientsRef = useRef(null);
    const servicesRef = useRef(null);
    const teamRef = useRef(null);
    const navRef = useRef(null);

    const refs = { clientsRef, servicesRef, teamRef };

    const activeTab = () => {
        if (servicesInView) {
            return "services";
        } else if (clientsInView) {
            return "clients";
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
                <div ref={servicesRef} className="px-4 md:px-12 xl:px-24 2xl:px-36">
                    <div ref={servicesInViewRef}>
                        <Services />
                    </div>
                </div>
                <div ref={clientsRef} className="px-4 md:px-12 xl:px-24 2xl:px-36">
                    <div ref={clientsInViewRef}>
                        <Clients />
                    </div>
                </div>
                <div ref={teamRef} className="px-4 md:px-12 xl:px-24 2xl:px-36">
                    <div ref={teamInViewRef}>
                        <Team />
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}
