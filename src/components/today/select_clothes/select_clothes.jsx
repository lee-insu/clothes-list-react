import React, { useState } from 'react';
import styles from './select_clothes.module.css';
import TodayWeatherList from '../today_weather_list/today_weather_list';
import TodayWeatherShow from '../today_weather_show/today_weather_show';

const SelectClothes = ({weather, temperature}) => {

    const [select,getSelect] = useState();

    const onSelect = (e) => {
        let selectCollect = e.target.getAttribute('name');
        getSelect(selectCollect)
    }

    
    return (
        <>
        <ul className={styles.list}>
            <li name=" red" onClick={onSelect}>red</li>
            <li name="orange" onClick={onSelect}>orange</li>
            <li name="yellow" onClick={onSelect}>yellow</li>
            <li name="green" onClick={onSelect}>green</li>
            <li name="blue" onClick={onSelect}>blue</li>
            <li name="indigo" onClick={onSelect}>indigo</li>
            <li name="purple" onClick={onSelect}>purple</li>
            <li name="black" onClick={onSelect}>black</li>
        </ul>
        <div className = {styles.margin}>
        <TodayWeatherShow weather = {weather}/>
        </div>
        <TodayWeatherList select = {select} temperature = {temperature}/>
        </>

    );
}

export default SelectClothes;