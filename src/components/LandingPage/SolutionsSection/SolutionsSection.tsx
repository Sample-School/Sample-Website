import styles from "./SolutionsSection.module.css";
import educationImage from "../../../assets/images/LandingPage/educationImage.svg";
import iconCorrecao from "../../../assets/images/LandingPage/correcaoIcon.svg";
import iconInclusivas from "../../../assets/images/LandingPage/adaptacaoIcon.svg";
import iconGestao from "../../../assets/images/LandingPage/gestaoIcon.svg";
import iconEficiencia from "../../../assets/images/LandingPage/eficienciaIcon.svg";
import iconFoco from "../../../assets/images/LandingPage/focoIcon.svg";
import iconBrasil from "../../../assets/images/LandingPage/plataformaIcon.svg";

export function SolutionsSection() {
  const solutions = [
    {
      icon: iconCorrecao,
      title: "Correção Automática",
      text: "A plataforma identifica e corrige provas de forma inteligente, reduzindo o tempo de correção e eliminando erros humanos.",
    },
    {
      icon: iconInclusivas,
      title: "Adaptação de Avaliações Inclusivas",
      text: "Provas adaptadas automaticamente para estudantes com dislexia, autismo e outras necessidades, garantindo equidade na avaliação.",
    },
    {
      icon: iconGestao,
      title: "Gestão de Avaliações",
      text: "Organize, acompanhe e analise o desempenho de alunos e turmas em um só lugar, com dados centralizados e relatórios claros.",
    },
    {
      icon: iconEficiencia,
      title: "Eficiência e Economia de Tempo",
      text: "Economiza tempo dos professores e amplia o aprendizado dos alunos, unindo eficiência e propósito.",
    },
    {
      icon: iconFoco,
      title: "Foco em Inclusão Educacional",
      text: "Automatiza processos, analisa resultados e gera insights que apoiam decisões pedagógicas mais inteligentes.",
    },
    {
      icon: iconBrasil,
      title: "Plataforma 100% Brasileira e Personalizável",
      text: "Desenvolvida por uma startup nacional focada em inovação educacional e inclusão.",
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <h3 className={styles.leftText}>
          Transformando a educação com propósito e tecnologia
        </h3>
        <img
          src={educationImage}
          alt="Ilustração de professora e aluno"
          className={styles.illustration}
        />
      </div>

      <div className={styles.right}>
        <div className={styles.grid}>
          {solutions.map((item, index) => (
            <div key={index} className={styles.card}>
              <img src={item.icon} alt="" className={styles.icon} />
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
