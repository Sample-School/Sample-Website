import { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../../assets/images/Logo/logo-full.svg";

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.navbar}>
      {/* 🔹 Logo */}
      <div className={styles.logoContainer}>
        <img src={logo} alt="Sample School" className={styles.logo} />
      </div>

      {/* 🔹 Botão Hamburguer */}
      <button
        className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
        onClick={toggleMenu}
        aria-label="Abrir menu"
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

      {/* 🔹 Menu Links */}
      <nav className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
        <a href="#sobre" onClick={closeMenu}>SOBRE</a>
        <a href="#solucoes" onClick={closeMenu}>SOLUÇÕES</a>
        <a href="#paraquem" onClick={closeMenu}>PARA QUEM É</a>
        <a href="#contato" onClick={closeMenu}>CONTATO</a>

        {/* 🔹 Botão que navega para /login 
        <button
          className={styles.ctaButton}
          onClick={() => {
            closeMenu();
            navigate("/home");
          }}
        >
          Acessar Plataforma
        </button> */}
      </nav>

      {/* 🔹 Overlay */}
      {menuOpen && <div className={styles.overlay} onClick={closeMenu} />}
    </header>
  );
}