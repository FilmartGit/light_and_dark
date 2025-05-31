import style from "../dashboard.module.css";

export default function TagsDashboard({ achive }) {
  const front = achive.filter((item) => item.side === "frontend");
  const back = achive.filter((item) => item.side === "backend");
  const full = achive.filter((item) => item.side === "fullstack");
  return (
    <div className={style.tagsLine}>
       <div className={style.tag}>FrontEnd <span>{front.length}</span></div>
       <div className={style.tag}>BackEnd <span>{back.length}</span></div>
       <div className={style.tag}>FullStack <span>{full.length}</span></div>
    </div>
  );
}
