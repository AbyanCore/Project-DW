import React, { useEffect, useRef, useState } from "react";
import Homeview from "./Home/Home.view";
import Descriptionview from "./Description/Description.view";
import Detailview from "./Detail/Detail.view";
import Feedbackview from "./Feedback/Feedback.view";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineArrowUp } from "react-icons/ai";
import { motion } from "framer-motion";

interface ClientParam {
    scrollToSection?: string;
}

export const ClientPageContext = React.createContext<any>(null);

const Clientpage: React.FC<ClientParam> = ({ scrollToSection }) => {
    const HomeSection = useRef<HTMLElement | null>(null);
    const DescriptionSection = useRef<HTMLElement | null>(null);
    const DetailSection = useRef<HTMLElement | null>(null);
    const FeedbackSection = useRef<HTMLElement | null>(null);

    const location = useLocation();
    const navigate = useNavigate();

    const [wisataselected, setwisataselected] = useState(1);

    const [EnableScrollToTop, setEnableScrollToTop] = useState(false);

    useEffect(() => {
        let targetSectionRef: React.RefObject<HTMLElement | null> | null = null;

        switch (scrollToSection) {
            case "home":
                targetSectionRef = HomeSection;
                break;
            case "description":
                targetSectionRef = DescriptionSection;
                break;
            case "detail":
                targetSectionRef = DetailSection;
                break;
            case "feedback":
                targetSectionRef = FeedbackSection;
                break;
            default:
                targetSectionRef = HomeSection;
                break;
        }

        if (targetSectionRef && targetSectionRef.current) {
            targetSectionRef.current.scrollIntoView({
                behavior: "smooth",
            });
        }
    }, [scrollToSection, location]);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > window.screen.height / 2) {
                setEnableScrollToTop(true);
            } else {
                setEnableScrollToTop(false);
            }
        });

        return () => {
            window.removeEventListener("scroll", () => {});
        };
    }, []);

    return (
        <ClientPageContext.Provider value={[wisataselected, setwisataselected]}>
            <div>
                {EnableScrollToTop && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="cursor-pointer fixed bg-gray-500 flex items-center justify-center bottom-0 left-0 m-10 w-10 h-10 rounded-full"
                        onClick={() => navigate("/Home")}
                    >
                        <AiOutlineArrowUp />
                    </motion.div>
                )}
                <div className="overflow-x-hidden">
                    <section ref={HomeSection} className="w-screen h-screen">
                        <Homeview />
                    </section>
                    <section
                        ref={DescriptionSection}
                        className="w-screen h-screen"
                    >
                        <Descriptionview />
                    </section>
                    <section ref={DetailSection} className="w-screen h-screen">
                        <Detailview />
                    </section>
                    <section
                        ref={FeedbackSection}
                        className="w-screen h-screen"
                    >
                        <Feedbackview />
                    </section>
                </div>

                <footer className="bg-red-400 h-24 w-screen">Footer</footer>
            </div>
        </ClientPageContext.Provider>
    );
};

export default Clientpage;
