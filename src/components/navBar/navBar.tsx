import { SampreSchoolLogo } from "../sampleSchoolLogo/sampleSchoolLogo";
import style from "./navBar.module.css"

export function NavBar() {
    return(
        <div className={style.navbar}>
            <div className={style.logoWrapper}>
                <SampreSchoolLogo />
            </div>

            <div className={style.center}>
                <a href="#sobre-nos" className={style.link}>Sobre nós</a>
                <a href="#servicos" className={style.link}>Nossos serviços</a>
                <a href="#contato" className={style.link}>Contato</a>
            </div>

            <div className={style.right}>
                <a href="#contato" className={style.botaoFinal}>Fale Conosco</a>
            </div>
        </div>
    );
}