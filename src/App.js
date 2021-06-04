import styles from './App.module.css';
import Header from './components/header/header';
import TodayWeather from './components/today/today_weather/today_weather';

function App() {
  return (
    <div className = {styles.app}>
   <Header className = {styles.header}/>
   <TodayWeather />
   </div>
  );
}

export default App;
