import ButtonsUI from '../../../ui/buttons';
import style from "../../aside.module.css";

export default function FormProfile() {
    
  return (
    <div className={style.form}>
      <span>Контакты:</span>
      <div className={style.formInputs}>
        <input
          className={style.input}
          type="email"
          name="email"
          placeholder="ivan.filmart@yandex.ru"
          readOnly
        />
        <ButtonsUI.Link href="mailto:ivan.filmart@yandex.ru" className="">Написать письмо</ButtonsUI.Link>
      </div>
    </div>
  );
}

