import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import style from "./header.module.css";
import Logotype from "./logo";

export default function Header() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className={style.header}>
      <nav className={style.nav}>
          <Logotype />
          <button className="" onClick={toggleTheme}>
            Сменить тему
          </button>
      </nav>
    </div>
  );
}
