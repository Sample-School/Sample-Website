import styles from "./AboutSection.module.css";
import about1 from "../../../assets/images/LandingPage/about1.svg";
import about2 from "../../../assets/images/LandingPage/about2.svg";
import about3 from "../../../assets/images/LandingPage/about3.svg";

export function AboutSection() {
  return (
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <div className={styles.text}>
            <p>
              A Sample School é uma startup brasileira de
              tecnologia educacional (EdTech) que nasceu com um propósito claro:
              transformar a forma como professores e instituições avaliam o
              aprendizado, tornando esse processo mais eficiente, justo e
              inclusivo por meio da Inteligência Artificial.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <img src={about1} alt="Tecnologia e IA" />
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.imageWrapper}>
            <img src={about2} alt="Correção de provas com IA" />
          </div>
          <div className={styles.text}>
            <p>
              Nosso objetivo é reduzir o tempo e o retrabalho envolvidos na
              criação, aplicação e correção de provas, permitindo que educadores
              se concentrem no que realmente importa: ensinar e inspirar.  
              Com tecnologia desenvolvida no Brasil, a plataforma oferece
              soluções automatizadas para criação, adaptação e correção de
              avaliações, integrando dados e métricas que apoiam decisões
              pedagógicas mais inteligentes.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.text}>
            <p>
              A Sample School acredita que a inovação precisa
              servir à educação de forma humana e acessível. Por isso,
              desenvolvemos um ecossistema digital que apoia tanto escolas e
              universidades quanto professores e estudantes, promovendo uma
              educação mais inclusiva, adaptada e conectada ao futuro.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <img src={about3} alt="Inovação na educação" />
          </div>
        </div>
      </div>
  );
}
