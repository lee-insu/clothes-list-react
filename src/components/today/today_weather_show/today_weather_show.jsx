import React from 'react';
import styles from './today_weather_show.module.css';

const TodayWeatherShow = (e) => {
    

    return (
        <>
        <nav className={styles.locationBox}>
        {(typeof e.weather.main !== "undefined") ? (
            <div className={styles.location}>{e.weather.name}&nbsp;
            {Math.round(e.weather.main.temp)-273}°C&nbsp; 
            {e.weather.weather[0].main}
            </div>
        ):('')}
        </nav>
        </>
    )
};

export default TodayWeatherShow;