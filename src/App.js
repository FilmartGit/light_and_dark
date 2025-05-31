import Aside from "./components/aside";
import Dashboard from "./components/dashboard";
import Header from "./components/header";
import ThemeProvider from "./context/ThemeContext";
import style from "./styles/app.module.css";

function App() {
  return (
    <ThemeProvider>
      <div className={style.background}>
        <Header />
        <div className={style.layout}>
          <Aside />
          <Dashboard />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;