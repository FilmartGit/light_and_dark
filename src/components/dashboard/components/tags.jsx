import Tag from '../../ui/tag';
import style from "../dashboard.module.css";

export default function TagsDashboard({ achive }) {
  const front = achive.filter((item) => item.side === "frontend");
  const back = achive.filter((item) => item.side === "backend");
  const full = achive.filter((item) => item.side === "fullstack");
  return (
    <div className={style.tagsLine}>
      <Tag >FrontEnd <span>{front.length}</span></Tag>
      <Tag >BackEnd <span>{back.length}</span></Tag>
      <Tag >FullStack <span>{full.length}</span></Tag>
    </div>
  );
}
