import styles from "./TimeComparison.module.css";
import chartImg from "../../../assets/images/LandingPage/grafico.svg";

export function TimeComparison() {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <h2>TEMPO MÉDIO GASTO COM E SEM A SAMPLE SCHOOL</h2>
        </div>
      <div className={styles.imageWrapper}>
        <img
          src={chartImg}
          alt="Tempo médio gasto com e sem a Sample School"
          className={styles.image}
        />
      </div>

      <p className={styles.text}>
        Estamos apenas no começo dessa jornada — e nossa missão é clara:
        tornar o processo avaliativo mais simples, transparente e inteligente
        para todos.
      </p>
    </div>
  );
}
