import AchiveCard from "./components/AchivCard";
import AchivItems from "./components/AchivItems";
import TagsDashboard from './components/tags';
import TitleDashboard from "./components/title";
import ACHIVE from "./constant"; 
export default function Dashboard() {
  return (
    <main>
      <TitleDashboard />
      <TagsDashboard achive={ACHIVE}/>
      <AchivItems>
        {ACHIVE.map(item => {
          return (
            <AchiveCard
              key={item.id}
              title={item.title}
              description={item.description}
              img={item.img}
              progress={item.progress}
              side={item.side}
            />
          );
        })}
      </AchivItems>
    </main>
  );
}
