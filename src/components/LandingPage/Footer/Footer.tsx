import styles from "../Footer/Footer.module.css";
import { Link } from "react-router-dom";


// ícones SVG
// import whatsappIcon from "../../../assets/imagens/LandingPage/Footer/Whatsapp.svg";
import instagramIcon from "../../../assets/images/redes/Instagram.png";
import linkedinIcon from "../../../assets/images/redes/LinkedIn.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Coluna Esquerda */}
        <div className={styles.footerLeft}>
          <h3 className={styles.footerTitle}>Sample School</h3>
          <p className={styles.footerSubtitle}>
            tecnologia que ensina com propósito.
          </p>

          <div className={styles.footerLinks}>
            <Link to="/terms">Termos de uso</Link>
            <Link to="/privacy">Política de privacidade</Link>
          </div>
        </div>

        {/* Coluna Central */}
        <div className={styles.footerCenter}>
          <h3 className={styles.footerTitle}>CONTATOS</h3>
          <div className={styles.footerIcons}>
            {/*<a href="https://w.app/sampleschool">
              <img src={whatsappIcon} alt="WhatsApp" />
            </a>*/}
            <a href="https://www.instagram.com/sampleschool.oficial/">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://linkedin.com/company/sampleschool">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </div>
        </div>

        {/* Coluna Direita */}
        <div className={styles.footerRight}>
          {/*<h3 className={styles.footerTitle}>Conheça a Sample</h3>
          <div className={styles.footerContact}>
            <a href="#" className={styles.footerButton}>
              Agendar demonstração
            </a>
          </div>*/}
        </div>
      </div>

      <div className={styles.footerBottom}>
        © COPYRIGHT 2025 - SAMPLESCHOOL
      </div>
    </footer>
  );
};

export default Footer;
