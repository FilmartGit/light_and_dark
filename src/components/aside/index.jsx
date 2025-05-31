import style from './aside.module.css'
import HeaderAside from './header'
import ProfileAside from './profile'

export default function Aside(){
    return(
        <div className={style.aside}>
            <HeaderAside />
            <ProfileAside />
        </div>
    )
}