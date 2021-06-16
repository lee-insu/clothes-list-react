import styles from './App.module.css';
import Sticky from 'react-sticky-el';
import Header from './components/header/header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TodayWeather from './components/today/today_weather/today_weather';
import Recruitment from './components/recruit/recruitment/recruit';
import ImportFile from './components/recruit/import-file/import-file';
import Footer from './components/footer/footer';
import {analytics} from './service/firebase';



analytics.logEvent('event', 'screen_view', {
  screen_name: 'app'
});


function App() {
  return (
    <div className = {styles.app}>
      <BrowserRouter>
      <Sticky stickyStyle={{zIndex: 1}} topOffset={42}>
        <div className={styles.header}>
         <Header/>
         </div>
      </Sticky>
      <Switch>
      <Route exact path='/'>
        <div className = {styles.today}>
        <TodayWeather />
        </div>
        <Footer />
        </Route>
        <Route path='/recruit'>
          <Recruitment/>
        </Route>
        <Route path='/import'>
          <ImportFile/>
        </Route>
        </Switch>

      </BrowserRouter>

   </div>
  );
}

export default App;
