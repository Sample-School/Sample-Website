import styles from "./ImpactSection.module.css";
import impactImage from "../../../assets/images/LandingPage/impacto.svg";

export function ImpactSection() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <span className={styles.icon}>📊</span>
        <h2>Impacto da Sample School</h2>
      </div>

      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img src={impactImage} alt="Gráficos e professora apresentando resultados" />
        </div>

        <div className={styles.text}>
          <p>
            Com a automação das correções e adaptações de provas, a Sample School tem
            transformado a rotina de professores e instituições de ensino em todo o Brasil.
            Nossos dados internos mostram que professores{" "}
            <strong>reduzem em até 80% o tempo gasto na elaboração e correção de avaliações</strong>,
            enquanto instituições relatam{" "}
            <strong>um aumento de 65% na eficiência da gestão de provas.</strong>
          </p>

          <p>
            Além disso,{" "}
            <strong>
              a adaptação automática para estudantes com dislexia, autismo e outras
              necessidades específicas garante que cada prova seja realmente inclusiva,
              sem exigir tempo extra do educador.
            </strong>{" "}
            Tudo isso acontece em uma única plataforma integrada, que centraliza o processo
            de criação, correção e acompanhamento das avaliações — tornando a experiência
            mais rápida, precisa e acessível para todos.
          </p>
        </div>
      </div>
    </section>
  );
}
