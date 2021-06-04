import React, { useEffect, useState } from 'react';
import dateBulider from '../../../service/dateBulider'
import handleGeoSuccess from '../../../service/navigator';
import SelectClothes from '../../today/select_clothes/select_clothes';
import TodayWeatherShow from '../today_weather_show/today_weather_show';
import styles from './today_weather.module.css';

const TodayWeather = () => {

    const todayShow = dateBulider(new Date());
    const [weather,setWeather] = useState({});
    const [temperature, setTemp] = useState({});
    const [gender, getGender] =useState();

    const setGender = (e) => {
      const gen = e.target.name;
      getGender(gen);
    }
    
    useEffect(() => {

      navigator.geolocation.getCurrentPosition(handleGeo)
      function handleGeo(position){
          try{
          handleGeoSuccess(position)
          .then(res => res.json())
          .then(result => {
              setWeather(result);
              setTemp(result.main.temp);
          });
        } catch(error) {
            console.log(`location error:${error}`);
        }
      };
    },[])

    
    return (
        <>
        <div className={styles.info}>
        {/* <div className={styles.date}>{todayShow}</div> */}
        <TodayWeatherShow weather = {weather} />
        </div>
        
        <div className={styles.select}>
        <img className= {styles.img} src="https://storage.googleapis.com/clothes-list-react-314206.appspot.com/flower4.png" onClick={setGender} name="m" alt=""/>
        <img className= {styles.img} src="https://storage.googleapis.com/clothes-list-react-314206.appspot.com/flower3.png" onClick={setGender} name="w" alt=""/>
        </div>
       <SelectClothes gender ={gender} temperature ={temperature}/>

       </>
    )

};

export default TodayWeather;