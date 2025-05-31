import style from "../../dashboard.module.css";
export default function ProgressBar({progress}){
    return <div className={style.progressItems}>
        <div className={style.progressBack} >
            <div className={style.runProgress} style={{width: `${progress}%`}}></div>
        </div>
        <div className={style.progressCount}>{progress} %</div>
    </div>
}