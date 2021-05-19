import React, { useEffect, useState } from 'react';
import TodayWeatherCtn from '../today_weather_ctn/today_weather_ctn';
import TodayWeatherList from '../today_weather_list/today_weather_list';

const TodayWeather = () => {


    const dateBulider = (d) => {
        let months = ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월",];
        let days = ["월","화","수","목","금","토","일"];
        
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${month},${date}일, ${day}요일,  ${year}년`
    }

    const [weather,setWeather] = useState({});
    const [temperature, setTemp] = useState({});


    useEffect(() => {

        navigator.geolocation.getCurrentPosition(handleGeoSucc,handleGeoFail)

        function handleGeoSucc(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const weatherApi = process.env.REACT_APP_WEATHER_API_KEY
            
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApi}`)
            .then(res => res.json())
            .then(result => {
                    setWeather(result);
                    setTemp(result.main.temp);
                    
            });
      };

        function handleGeoFail() {
         console.log('location error');
         navigator.geolocation.getCurrentPosition(handleGeoSucc,handleGeoFail)
    }

    },[])

    
    return (
        <>
        <div className="date">{dateBulider(new Date())}</div>
       <TodayWeatherCtn weather={weather}/>
       <TodayWeatherList temperature ={temperature}/>
       </>
    )

};

export default TodayWeather;