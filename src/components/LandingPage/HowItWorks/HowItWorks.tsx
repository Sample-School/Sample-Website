import { useRef, useEffect } from "react";
import styles from "./HowItWorks.module.css";
import step1 from "../../../assets/images/LandingPage/HowItWorks/step1.svg";
import step2 from "../../../assets/images/LandingPage/HowItWorks/step2.svg";
import step3 from "../../../assets/images/LandingPage/HowItWorks/step3.svg";
import step4 from "../../../assets/images/LandingPage/HowItWorks/step4.svg";
import arrow from "../../../assets/images/LandingPage/HowItWorks/arrow.svg";

const steps = [
  { img: step1, title: "1. Selecione o tipo de questão e adicione o enunciado." },
  { img: step2, title: "2. Selecione o nível de adaptação." },
  { img: step3, title: "3. A IA adapta automaticamente." },
  { img: step4, title: "4. Visualize resultados em segundos." },
];

export function HowItWorks() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      // Verifica se o usuário está tentando rolar para os lados
      const isHorizontal = Math.abs(e.deltaY) > Math.abs(e.deltaX);

      if (isHorizontal) {
        // Verifica se o scroll horizontal ainda não chegou no fim/início
        const atStart = el.scrollLeft === 0;
        const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth;

        // Se ainda há conteúdo horizontal pra mostrar, evita o scroll da página
        if ((!atStart && e.deltaY < 0) || (!atEnd && e.deltaY > 0)) {
          e.preventDefault();
          el.scrollLeft += e.deltaY;
        }
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>COMO FUNCIONA?</h2>

      <div className={styles.scrollArea} ref={scrollRef}>
        {steps.map((step, index) => (
          <div key={index} className={styles.stepWrapper}>
            <div className={styles.stepCard}>
              <img src={step.img} alt={`Etapa ${index + 1}`} className={styles.image} />
              <p className={styles.text}>{step.title}</p>
            </div>

            {index < steps.length - 1 && (
              <img src={arrow} alt="Seta" className={styles.arrow} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
