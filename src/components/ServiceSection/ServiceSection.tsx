import style from './ServiceSection.module.css'
import { FeatureCard } from './FeatureCard'
import { ServiceFooter } from './ServiceFooter'
import { ServiceHeader } from './ServiceHeader'
import img1 from '../../assets/images/ServiceSection/service-img1.png'
import img2 from '../../assets/images/ServiceSection/service-img2.png'
import img3 from '../../assets/images/ServiceSection/service-img3.png'
import img4 from '../../assets/images/ServiceSection/service-img4.png'

export function ServiceSection() {
  return (
    <section className={style.serviceSection} id='servicos'>
      <ServiceHeader />
      <div className={style.features}>
        <FeatureCard image={img1} text="Criem provas personalizadas com baseno perfil de cada aluno;" imagePosition="right" />
        <FeatureCard image={img2} text="Adaptem questões para diferentes níveis de compreensão e necessidades específicas;" imagePosition="left" />
        <FeatureCard image={img3} text="Corrijam avaliações automaticamente, com análises detalhadas de desempenho;" imagePosition="right" />
        <FeatureCard image={img4} text="Tenham insights pedagógicos que apoiam o processo de ensino-aprendizagem." imagePosition="left" />
      </div>
      <ServiceFooter />
    </section>
  )
}
