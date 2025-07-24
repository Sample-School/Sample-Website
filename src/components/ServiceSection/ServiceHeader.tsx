import style from './ServiceSection.module.css'

export function ServiceHeader() {
  return (
    <div className={style.header}>
      <div className={style.titlediv}><h2 className={style.title}>NOSSO SERVIÇO</h2></div>
      <p className={style.description}>
        A SampleSchool oferece uma plataforma inteligente voltada para a gestão de avaliações escolares com suporte de IA. Nosso sistema permite que escolas e educadores:
      </p>
    </div>
  )
}