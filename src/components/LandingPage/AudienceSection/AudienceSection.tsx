import styles from "./AudienceSection.module.css";

import TeacherIcon from "../../../assets/images/LandingPage/professor.svg";
import SchoolIcon from "../../../assets/images/LandingPage/escola.svg";
import UniversityIcon from "../../../assets/images/LandingPage/universidade.svg";
import CourseIcon from "../../../assets/images/LandingPage/cursinho.svg";

export function AudienceSection() {
  const cards = [
    {
      icon: TeacherIcon,
      title: "Professores",
      text: "Automatiza criação, adaptação e correção de provas com IA, poupando tempo e garantindo acessibilidade.",
    },
    {
      icon: SchoolIcon,
      title: "Escolas",
      text: "Simplifica a gestão de provas e garante padronização nas avaliações dos alunos.",
    },
    {
      icon: UniversityIcon,
      title: "Universidades",
      text: "Facilita avaliações em larga escala, com personalização e correção automática integrada ao sistema acadêmico.",
    },
    {
      icon: CourseIcon,
      title: "Cursinhos",
      text: "Agiliza a geração e correção de simulados, mantendo consistência e praticidade nas provas.",
    },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Para quem é a Sample?</h2>
      <div className={styles.grid}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <img src={card.icon} alt={card.title} className={styles.icon} />
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
