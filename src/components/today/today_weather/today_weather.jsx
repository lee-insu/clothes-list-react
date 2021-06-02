import React, { useEffect, useState } from 'react';
import dateBulider from '../../../service/dateBulider'
import handleGeoSuccess from '../../../service/navigator';
import SelectClothes from '../../today/select_clothes/select_clothes';
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
        <div className={styles.date}>{todayShow}</div>
        <div>
          <button onClick={setGender} name="m">m</button>
          <button onClick={setGender} name="w">w</button>
        </div>
       <SelectClothes gender ={gender} weather={weather} temperature ={temperature}/>

       </>
    )

};

export default TodayWeather;