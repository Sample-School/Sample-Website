import { NavBar } from "../../components/LandingPage/NavBar/NavBar";
import styles from "./LandingPage.module.css";
import { HeroSection } from "../../components/LandingPage/HeroSection/HeroSection";

export function LandingPage() {
    return (
        <div className={styles.container}>
            <NavBar />
            <section className={styles.heroSection}>
                <HeroSection />
            </section>
        </div>
    );
}
