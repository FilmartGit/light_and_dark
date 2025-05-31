import style from "../aside.module.css";

export default function PluginsAchive() {
  return (
    <div className={style.plugins}>
      <span>Дополнительные награды</span>
      <a href="https://www.codewars.com/users/FilmartGit" target="_blank" rel="noreferrer">
        <img
          src="https://www.codewars.com/users/FilmartGit/badges/large"
          alt="CodeWars"
        />
      </a>
    </div>
  );
}
