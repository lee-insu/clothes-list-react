import React from 'react';
import styles from './today_weather_show.module.css';

const TodayWeatherShow = ({weather,renderPosition}) => {


    return (
        <>
        <nav className={styles.locationBox}>
        {weather.weather === undefined ? (
            <div onClick={()=>{return renderPosition()}} className={styles.not}>날씨에 맞는 코디를 원한다면 위치를 허용해주세요</div>
        ):
        (
            <div className={styles.location}>{weather.name}&nbsp;
            {Math.round(weather.main.temp)-273}°C&nbsp; 
            {weather.weather[0].main}
            </div>            
        )}
        </nav>
        </>
    )
};

export default TodayWeatherShow;