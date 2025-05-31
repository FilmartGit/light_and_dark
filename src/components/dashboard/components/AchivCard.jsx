import style from "../dashboard.module.css";

export default function AchiveCard({ img, title, description, progress }) {
  return (
    <div className={style.card}>
      <img src={img} alt={title} style={progress < 50 ? {filter: "grayscale(100)"} : {}} />
      <div style={{display: "flex", flexDirection: "column", gap: "5px"}}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      {/* Отдельный компонент под прогресс */}
    </div>
  );
}
