import style from "../aside.module.css";
import AboutProfile from './components/about';
import AchivmentsProgress from './components/achivmentsProgress';
import Avatar from './components/avatar';
import FormProfile from './components/form';
import TagsProfile from './components/tags';
import TitleProfile from './components/title';

export default function ProfileAside(){
    return <div className={style.profile}>
        <Avatar />         
        <TitleProfile />
        <TagsProfile />
        <AboutProfile />
        <FormProfile />
        <div className={style.spacing}></div>
        <AchivmentsProgress />
    </div>
}