import style from "../../aside.module.css";

export default function Avatar() {
  return (
    <div className={style.photoRounded}>
      <div className={style.avatar} />
    </div>
  );
}
