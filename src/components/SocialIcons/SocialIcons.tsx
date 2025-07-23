import WhatsApp from '../../assets/images/redes/WhatsApp.png'
import Instagram from '../../assets/images/redes/Instagram.png'
import LinkedIn from '../../assets/images/redes/LinkedIn.png'
import styles from '../SocialIcons/SocialIcons.module.css';

export function SocialIcons() {
  return (
    <div className={styles.social}>
        <a href=""><img src={WhatsApp} alt="" className={styles.icon} /></a>
        <a href=""><img src={Instagram} alt="" className={styles.icon} /></a>
        <a href=""><img src={LinkedIn} alt="" className={styles.icon} /></a>
    </div>
  );
}