import React, { useEffect, useState } from 'react';
import TodayWeatherCtn from '../today_weather_ctn/today_weather_ctn';
import TodayWeatherList from '../today_weather_list/today_weather_list';
import dateBulider from '../../../service/dateBulider'
import handleGeoSuccess from '../../../service/navigator';

const TodayWeather = () => {

    const todayShow = dateBulider(new Date());
    const [weather,setWeather] = useState({});
    const [temperature, setTemp] = useState({});
    

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
        <div className="date">{todayShow}</div>
       <TodayWeatherCtn weather={weather}/>
       <TodayWeatherList temperature ={temperature}/>
       </>
    )

};

export default TodayWeather;