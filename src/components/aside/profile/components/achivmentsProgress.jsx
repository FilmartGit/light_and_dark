import { useMemo } from 'react';
import ACHIVE from '../../../constants/achievements';
import IconsUI from "../../../ui/icons";
import style from "../../aside.module.css";


export default function AchivmentsProgress() {
  
  const progress = useMemo(() => {
    return Math.floor(ACHIVE.reduce((acc, cur) =>  acc + cur.progress, 0) / ACHIVE.length);
  }, []);

  return (
    <div className={style.achivementProfile}>
      <span>Прогресс достижений</span>
      <div className={style.progressAchive}>
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            height: "5px",
            backgroundColor: "var(--text-color-progress)",
            width: `${progress}%`,
          }}
        ></div>
        <div>
          <p className={style.progressCount}>{progress}%</p>
          <p className={style.progressTitle}>
            Маленький шаг для интернета - большой шаг для творчества!
          </p>
        </div>
        <IconsUI.Clap className={style.clap} />
      </div>
    </div>
  );
}
