import style from './aside.module.css'
import HeaderAside from './header'
import PluginsAchive from './plugins'
import ProfileAside from './profile'

export default function Aside(){
    return(
        <div className={style.aside}>
            <HeaderAside />
            <ProfileAside />
            <PluginsAchive />
        </div>
    )
}