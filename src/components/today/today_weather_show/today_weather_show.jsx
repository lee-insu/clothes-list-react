import React from 'react';
import styles from './today_weather_show.module.css';

const TodayWeatherShow = (e) => {
    
    const reHandlePosition = () => {
        console.log('dd');
    }


    return (
        <>
        <nav className={styles.locationBox}>
        {(e.weather.main !== undefined) ? (
            <div className={styles.location}>{e.weather.name}&nbsp;
            {Math.round(e.weather.main.temp)-273}°C&nbsp; 
            {e.weather.weather[0].main}
            </div>
        ):
        (
            <div onClick={()=> {reHandlePosition()}} className={styles.not}> 날씨에 맞는 코디를 원한다면 클릭해 위치를 허용해주세요</div>
        )}
        </nav>
        </>
    )
};

export default TodayWeatherShow;