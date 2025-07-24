import style from './HeroSection.module.css';
import { HeroText } from './HeroText.tsx';
import { SocialIcons } from '../SocialIcons/SocialIcons';
import maeefilho from '../../assets/images/maeefilho.png'

export function HeroSection() {
  return (
    <div className={style.background}>
      <div className={style.left}>
        <HeroText />
        <div className={style.line}></div>
        <div className={style.socialWrapper}>
          <SocialIcons />
        </div>
      </div>
      <div className={style.right}>
        <img src={maeefilho} alt="" className={style.maefilho}/>
      </div>
    </div>
  );
}
