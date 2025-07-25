import styles from './HeroSection.module.css';

export function HeroText() {
  return (
    <div>
      <p className={styles.heroSubtitle}>
        MAIS QUE UMA <span className={styles.heroHighlight}>PLATAFORMA</span>
      </p>
      <h1 className={styles.heroTitle}>
        Transformamos desafios em<br />
        oportunidades de aprendizado<br />
        uma adaptação por vez.
      </h1>
    </div>
  );
}
