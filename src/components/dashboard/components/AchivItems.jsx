import style from "../dashboard.module.css";

export default function AchivItems({children}) {
    return <div className={style.grid}>
        {children}
    </div>
}