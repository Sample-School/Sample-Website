import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/navBar/navBar";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { AboutSection } from "./components/AboutSection/AboutSection";
import { ServiceSection } from "./components/ServiceSection/ServiceSection";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<><NavBar /> <HeroSection /> <AboutSection /> <ServiceSection /></>} />
        </Routes>
    );
}