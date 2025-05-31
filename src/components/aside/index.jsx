import style from './aside.module.css'
import HeaderAside from './header'

export default function Aside(){
    return(
        <div className={style.aside}>
            <HeaderAside />
            <h1>Aside</h1>
        </div>
    )
}