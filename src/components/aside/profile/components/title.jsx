import style from "../../aside.module.css";

export default function TitleProfile() {
  return (
    <div className={style.profilename}>
      <h2>Ivan Ilukhin</h2>
      <a href="mailto:ivan.filmart@yandex.ru">ivan.filmart@yandex.ru</a>
    </div>
  );
}
