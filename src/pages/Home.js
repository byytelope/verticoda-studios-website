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
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesInViewRef, servicesInView] = useInView({ threshold: 0.5 });
    const [clientsInViewRef, clientsInView] = useInView({ threshold: 0.5 });
    const [teamInViewRef, teamInView] = useInView({ threshold: 0.5 });

    const clientsRef = useRef(null);
    const servicesRef = useRef(null);
    const teamRef = useRef(null);
    const navRef = useRef(null);
    const footerRef = useRef(null);

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
                    activeTab={activeTab()}
                    menuOpen={menuOpen}
                    setMenuOpen={setMenuOpen}
                />
            </div>
            <div>
                <Header footerRef={footerRef} />
            </div>
            <div ref={servicesRef} className="px-6 md:px-12 xl:px-24 2xl:px-36">
                <div ref={servicesInViewRef}>
                    <Services />
                </div>
            </div>
            <div ref={clientsRef} className="px-6 md:px-12 xl:px-24 2xl:px-36">
                <div ref={clientsInViewRef}>
                    <Clients />
                </div>
            </div>
            <div ref={teamRef} className="px-6 md:px-12 xl:px-24 2xl:px-36">
                <div ref={teamInViewRef}>
                    <Team />
                </div>
            </div>
            <div ref={footerRef}>
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}
