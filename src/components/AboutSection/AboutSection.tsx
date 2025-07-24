import styles from './AboutSection.module.css';
import { AboutTitle } from './AboutTitle';
import { AboutIntro } from './AboutIntro';
import { AboutCard } from './AboutCard';

import img1 from '../../assets/images/sobrenos1.png';
import img2 from '../../assets/images/sobrenos2.png';
import img3 from '../../assets/images/sobrenos3.png';

export function AboutSection() {
  return (
    <section className={styles.container} id='sobre-nos'>
        <AboutTitle />
        <AboutIntro />
        <AboutCard 
            image={img1}
            imagePosition="right"
            customWidth="35%" // 👈 largura personalizada só para esse card
        />
        <AboutCard 
            image={img2} 
            text="Nosso foco está em desenvolver soluções que utilizam inteligência artificial para facilitar a criação, adaptação e correção de avaliações escolares. Com isso, oferecemos suporte real para instituições de ensino que lidam com alunos neurodivergentes, respeitando seus ritmos, perfis cognitivos e formas únicas de aprender." 
            imagePosition="left"
        />
        <AboutCard 
            image={img3} 
            text="Unimos tecnologia e empatia para criar um sistema educacional mais justo, acessível e eficiente. Somos movidos pela ideia de que a inovação na educação não é só possível é necessária." 
            imagePosition="right"
        />
    </section>
  );
}
