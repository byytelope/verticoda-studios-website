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
    const [activeTab, setActiveTab] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesThreshold, setServicesThreshold] = useState(0.5);
    const [clientsThreshold, setClientsThreshold] = useState(0.5);
    const [teamThreshold, setTeamThreshold] = useState(0.5);
    const [servicesHeight, setServicesHeight] = useState(0);
    const [clientsHeight, setClientsHeight] = useState(0);
    const [teamHeight, setTeamHeight] = useState(0);
    const [servicesWasViewed, setServicesWasViewed] = useState(false);
    const [clientsWasViewed, setClientsWasViewed] = useState(false);
    const [teamWasViewed, setTeamWasViewed] = useState(false);
    const [servicesInViewRef, servicesInView] = useInView({ threshold: servicesThreshold });
    const [clientsInViewRef, clientsInView] = useInView({ threshold: clientsThreshold });
    const [teamInViewRef, teamInView] = useInView({ threshold: teamThreshold });

    const servicesRef = useRef(null);
    const clientsRef = useRef(null);
    const teamRef = useRef(null);
    const navRef = useRef(null);
    const footerRef = useRef(null);

    const refs = { clientsRef, servicesRef, teamRef };
    const padding = "px-6 md:px-12 xl:px-24 2xl:px-36";

    useEffect(() => {
        setServicesHeight(servicesRef.current.getBoundingClientRect().height);
        setClientsHeight(clientsRef.current.getBoundingClientRect().height);
        setTeamHeight(teamRef.current.getBoundingClientRect().height);

        const winHeight = window.innerHeight;
        const initTh = 0.4;

        if (servicesHeight > winHeight * initTh) {
            const newTh = ((winHeight * initTh) / servicesHeight) * initTh;
            setServicesThreshold(newTh);
        }
        if (clientsHeight > winHeight * initTh) {
            const newTh = ((winHeight * initTh) / clientsHeight) * initTh;
            setClientsThreshold(newTh);
        }
        if (teamHeight > winHeight * initTh) {
            const newTh = ((winHeight * initTh) / teamHeight) * initTh;
            setTeamThreshold(newTh);
        }
    }, [servicesHeight, clientsHeight, teamHeight]);

    useEffect(() => {
        if (servicesInView) {
            setServicesWasViewed(true);
            setActiveTab("services");
        } else if (clientsInView) {
            setClientsWasViewed(true);
            setActiveTab("clients");
        } else if (teamInView) {
            setTeamWasViewed(true);
            setActiveTab("team");
        } else setActiveTab(null);
    }, [clientsInView, teamInView, servicesInView]);

    useEffect(() => {
        setTargetElement(navRef.current);

        if (targetElement) {
            if (menuOpen) {
                disableBodyScroll(targetElement);
            } else if (!menuOpen) {
                enableBodyScroll(targetElement);
            }
        }
    }, [menuOpen, targetElement]);

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
            <div ref={servicesInViewRef}>
                <div ref={servicesRef}>
                    <Services
                        padding={padding}
                        inView={servicesInView}
                        wasViewed={servicesWasViewed}
                    />
                </div>
            </div>
            <div ref={clientsInViewRef}>
                <div ref={clientsRef}>
                    <Clients
                        padding={padding}
                        inView={clientsInView}
                        wasViewed={clientsWasViewed}
                    />
                </div>
            </div>
            <div ref={teamInViewRef}>
                <div ref={teamRef}>
                    <Team padding={padding} inView={teamInView} wasViewed={teamWasViewed} />
                </div>
            </div>
            <div>
                <div ref={footerRef}>
                    <Footer padding={padding} />
                </div>
            </div>
        </div>
    );
}
