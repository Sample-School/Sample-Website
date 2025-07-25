import WhatsApp from '../../assets/images/redes/WhatsApp.png'
import Instagram from '../../assets/images/redes/Instagram.png'
import LinkedIn from '../../assets/images/redes/LinkedIn.png'
import styles from '../SocialIcons/SocialIcons.module.css';

export function SocialIcons() {
  return (
    <div className={styles.social}>
        <a href="https://w.app/sampleschool" target="_blank"><img src={WhatsApp} alt="" className={styles.icon} /></a>
        <a href="https://www.instagram.com/sampleschool.oficial/" target="_blank"><img src={Instagram} alt="" className={styles.icon} /></a>
        <a href="https://linkedin.com/company/sampleschool" target="_blank"><img src={LinkedIn} alt="" className={styles.icon} /></a>
    </div>
  );
}