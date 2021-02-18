import { useRef, useEffect, useState } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useInView } from "react-intersection-observer";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Team from "../components/Team";
import Clients from "../components/Clients";
import Footer from "../components/Footer";

export default function Home() {
    const [targetElement, setTargetElement] = useState(null);
    const [activeTab, setActiveTab] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesWasViewed, setServicesWasViewed] = useState(false);
    const [clientsWasViewed, setClientsWasViewed] = useState(false);
    const [teamWasViewed, setTeamWasViewed] = useState(false);
    const [servicesInViewRef, servicesInView] = useInView({ threshold: 0.5 });
    const [clientsInViewRef, clientsInView] = useInView({ threshold: 0.5 });
    const [teamInViewRef, teamInView] = useInView({ threshold: 0.5 });

    const clientsRef = useRef(null);
    const servicesRef = useRef(null);
    const teamRef = useRef(null);
    const navRef = useRef(null);
    const footerRef = useRef(null);

    const refs = { clientsRef, servicesRef, teamRef };
    const padding = "px-6 md:px-12 xl:px-24 2xl:px-36";

    useEffect(() => {
        setTargetElement(navRef.current);

        if (targetElement) {
            if (menuOpen) {
                disableBodyScroll(targetElement);
            } else if (!menuOpen) {
                enableBodyScroll(targetElement);
            }
        }

        if (servicesInView) {
            setActiveTab("services");
            setServicesWasViewed(true);
        } else if (clientsInView) {
            setActiveTab("clients");
            setClientsWasViewed(true);
        } else if (teamInView) {
            setActiveTab("team");
            setTeamWasViewed(true);
        } else setActiveTab("");
    }, [menuOpen, targetElement, clientsInView, servicesInView, teamInView]);

    return (
        <div>
            <div ref={navRef}>
                <Navbar
                    refs={refs}
                    activeTab={activeTab}
                    menuOpen={menuOpen}
                    setMenuOpen={setMenuOpen}
                />
            </div>
            <div>
                <Header footerRef={footerRef} padding={padding} />
            </div>
            <div ref={servicesRef}>
                <div ref={servicesInViewRef}>
                    <Services
                        padding={padding}
                        inView={servicesInView}
                        wasViewed={servicesWasViewed}
                    />
                </div>
            </div>
            <div ref={clientsRef}>
                <div ref={clientsInViewRef}>
                    <Clients
                        padding={padding}
                        inView={clientsInView}
                        wasViewed={clientsWasViewed}
                    />
                </div>
            </div>
            <div ref={teamRef}>
                <div ref={teamInViewRef}>
                    <Team padding={padding} inView={teamInView} wasViewed={teamWasViewed} />
                </div>
            </div>
            <div ref={footerRef}>
                <div>
                    <Footer padding={padding} />
                </div>
            </div>
        </div>
    );
}
