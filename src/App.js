import styles from './App.module.css';
import Sticky from 'react-sticky-el';
import Header from './components/header/header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TodayWeather from './components/today/today_weather/today_weather';
import Recruitment from './components/recruit/recruitment/recruit';

function App() {
  return (
    <div className = {styles.app}>
      <BrowserRouter>
      <Sticky topOffset={42}>
         <div className = {styles.header}>
         <Header/>
         </div>
      </Sticky>
      <Switch>
      <Route exact path='/'>
        <div className = {styles.today}>
        <TodayWeather />
        </div>
        </Route>
        <Route path='/recruit'>
          <Recruitment/>
        </Route>

        </Switch>
      </BrowserRouter>

   </div>
  );
}

export default App;
