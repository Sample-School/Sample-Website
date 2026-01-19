import styles from "./LandingPage.module.css";

import { NavBar } from "../../components/LandingPage/NavBar/NavBar";
import { HeroSection } from "../../components/LandingPage/HeroSection/HeroSection";
import { AboutSection } from "../../components/LandingPage/AboutSection/AboutSection";
import { ImpactSection } from "../../components/LandingPage/ImpactSection/ImpactSection";
import { TimeComparison } from "../../components/LandingPage/TimeComparison/TimeComparison";
import { SolutionsSection } from "../../components/LandingPage/SolutionsSection/SolutionsSection";
import { AudienceSection } from "../../components/LandingPage/AudienceSection/AudienceSection";
import { HowItWorks } from "../../components/LandingPage/HowItWorks/HowItWorks";
import Footer from "../../components/LandingPage/Footer/Footer";

export function LandingPage() {
  return (
    <div className={styles.container}>
      <NavBar />

      <div className={styles.blueContainer}>
        <section className={styles.heroSection}>
          <HeroSection />
        </section>

        <h2 className={styles.titleLeft}>SOBRE NÓS</h2>
        <section id="sobre" className={styles.sobreNosConteiner}>
          <AboutSection />
          <ImpactSection />
          <TimeComparison />
        </section>

        <h2 className={styles.titleright}>SOLUÇÕES E DIFERENCIAIS</h2>
        <section id="solucoes">
          <SolutionsSection />
        </section>

        <section id="paraquem">
          <AudienceSection />
        </section>

        <section id="contato" className={styles.HowItWorksContainer}>
          <HowItWorks />
        </section>

        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}