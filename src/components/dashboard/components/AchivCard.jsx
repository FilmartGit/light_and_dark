import style from "../dashboard.module.css";
import ProgressBar from "./progress";

export default function AchiveCard({
  img,
  title,
  description,
  progress,
  side,
}) {
  return (
    <div className={style.card}>
      <div className={style.side}>{side}</div>
      <img
        src={img}
        alt={title}
        style={progress < 50 ? { filter: "grayscale(100)" } : {}}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <ProgressBar progress={progress} />{" "}
    </div>
  );
}
