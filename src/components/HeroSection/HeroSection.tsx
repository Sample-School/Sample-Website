import style from './HeroSection.module.css';
import { HeroText } from './HeroText.tsx';
import { SocialIcons } from '../SocialIcons/SocialIcons';

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
        {/* Aqui futuramente vai a ilustração da mãe e filho */}
      </div>
    </div>
  );
}
