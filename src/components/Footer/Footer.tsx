import styles from './Footer.module.css'
import { SocialIcons } from '../SocialIcons/SocialIcons';

export function Footer() {
  return (
    <footer className={styles.footer} id='contato'>
      <div className={styles.content}>
        <p className={styles.label}>NOSSO CONTATOS</p>
        <SocialIcons />
      </div>
      <div className={styles.bottomBar}>
        <p>© COPYRIGHT 2025 - SAMPLESCHOOL</p>
      </div>
    </footer>
  );
}