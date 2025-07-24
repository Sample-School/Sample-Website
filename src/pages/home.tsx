import { NavBar } from "../components/navBar/navBar";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { AboutSection } from "../components/AboutSection/AboutSection";
import { ServiceSection } from "../components/ServiceSection/ServiceSection";
import { Footer } from "../components/Footer/Footer";

export function Home() {
    return (
        <>
            <NavBar />
            <HeroSection />
            <AboutSection />
            <ServiceSection />
            <div style={{ position: "relative", height: "100px" }}>
                <Footer />
            </div>
        </>
        
    );
}