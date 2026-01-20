import { useNavigate } from "react-router-dom";
import styles from "./HeroSection.module.css";
import heroImage from "../../../assets/images/LandingPage/Notebook_heroImage.svg";

export function HeroSection() {
  // const navigate = useNavigate();

  return (
    <section className={styles.hero}>
      <div className={styles.textContent}>
        <h1>
          Avaliações mais <span>rápidas</span>, <span>justas</span> e{" "}
          <span>inteligentes</span> com IA.
        </h1>
        <p>
          Economize tempo, reduza erros e acompanhe o desempenho de alunos com
          tecnologia automatizada.
        </p>

        {/* 🔹 Redireciona para /login
        <button
          className={styles.ctaButton}
          onClick={() => navigate("/Register")}
        >
          Cadastre sua instituição
        </button> */}
      </div>

      <div className={styles.imageContainer}>
        <img src={heroImage} alt="Notebook com a plataforma aberta" />
      </div>
    </section>
  );
}
