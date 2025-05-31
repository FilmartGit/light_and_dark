import style from "../../aside.module.css";

export default function AboutProfile() {
  return (
    <div className={style.about}>
      <span>Описание профиля</span>
      <p>
        Junior developer JavaScript. Love: TypeScript, React, Next.js,
        TailwindCSS, Sass, Scss. Backend: Nest.Js, MongoDB
      </p>
    </div>
  );
}
