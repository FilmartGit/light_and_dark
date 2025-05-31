import IconsUI from "../../ui/icons";
import style from "../header.module.css";

export default function Logotype() {
  return (
    <div className={style.logotype}>
      <IconsUI.Logotype className={style.logotypeIcon}/>
      Achivements Profile
    </div>
  );
}
