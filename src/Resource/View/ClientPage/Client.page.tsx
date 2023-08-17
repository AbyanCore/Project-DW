import React, { useEffect, useRef } from "react";
import Homeview from "./Home/Home.view";
import Descriptionview from "./Description/Description.view";
import Detailview from "./Detail/Detail.view";
import Feedbackview from "./Feedback/Feedback.view";
import { useLocation } from "react-router-dom";

interface ClientParam {
    scrollToSection?: string;
}

const Clientpage: React.FC<ClientParam> = ({ scrollToSection }) => {
    const HomeSection = useRef<HTMLElement | null>(null);
    const DescriptionSection = useRef<HTMLElement | null>(null);
    const DetailSection = useRef<HTMLElement | null>(null);
    const FeedbackSection = useRef<HTMLElement | null>(null);

    const location = useLocation();

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

    return (
        <div>
            <section ref={HomeSection} className="w-screen h-screen">
                <Homeview />
            </section>
            <section ref={DescriptionSection} className="w-screen h-screen">
                <Descriptionview />
            </section>
            <section ref={DetailSection} className="w-screen h-screen">
                <Detailview />
            </section>
            <section ref={FeedbackSection} className="w-screen h-screen">
                <Feedbackview />
            </section>
        </div>
    );
};

export default Clientpage;
