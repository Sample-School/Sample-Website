import sample from '../../assets/images/logo/sample.png'
import school from '../../assets/images/logo/school.png'
import ss from '../../assets/images/logo/SS.png'
import style from './sampleSchoolLogo.module.css'

export function SampreSchoolLogo() {
    return(
        <div className={style.logo}>
            <img src={ss} alt="" className={style.image}/>
            <div className={style.name}>
                <img src={sample} alt="" className={style.imagetext}/>
                <img src={school} alt="" className={style.imagetext}/>
            </div>
        </div>
    );
}