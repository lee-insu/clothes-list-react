import React, { useEffect, useState } from 'react';
import styles from './select_clothes.module.css';
import './select_clothes.css';
import TodayWeatherList from '../today_weather_list/today_weather_list';
import TodayWeatherShow from '../today_weather_show/today_weather_show';



const SelectClothes = ({weather, temperature}) => {

    const [select,getSelect] = useState();
    const [isActive,getIsActive] =useState();

    const onSelect = (e) => {

        let selectCollect = e.target.getAttribute('name');
        getSelect(selectCollect);
        
    }

    useEffect(() =>{
        getIsActive(select)
    }
        ,[select]);

    return (
        
        <>
         <div className = {styles.margin}>
        <TodayWeatherShow weather = {weather}/>
        </div>
        <ul className={styles.ul}>

            <li name=" red" onClick={onSelect} className={isActive === ' red' ? 'isActive':''}>
                <div name=" red" className={styles.circle}></div>
                <div name=" red" className={styles.name}>red</div>
                </li>

            <li name="orange" onClick={onSelect} className={isActive === 'orange' ? 'isActive':''}>
                <div name="orange" className={styles.circle}></div>
                <div name="orange" className={styles.name}>orange</div>
            </li>

            <li name="yellow" onClick={onSelect} className={isActive === 'yellow' ? 'isActive':''}>
                <div name="yellow" className={styles.circle}></div>
                <div name="yellow" className={styles.name}>yellow</div>
            </li>

            <li name="green" onClick={onSelect} className={isActive === 'green' ? 'isActive':''}>
                <div name="green"  className={styles.circle}></div>
                <div name="green"  className={styles.name}>green</div>
            </li>

            <li name="blue" onClick={onSelect} className={isActive === 'blue' ? 'isActive':''}>
                <div name="blue" className={styles.circle}></div>
                <div name="blue" className={styles.name}>blue</div>
            </li>

            <li name="indigo" onClick={onSelect} className={isActive === 'indigo' ? 'isActive':''}>
                <div name="indigo" className={styles.circle}></div>
                <div name="indigo" className={styles.name}>indigo</div>
            </li>

            <li name="purple" onClick={onSelect} className={isActive === 'purple' ? 'isActive':''}>
                <div name="purple" className={styles.circle}></div>
                <div name="purple" className={styles.name}>purple</div>
            </li>

            <li name="black" onClick={onSelect } className={isActive === 'black' ? 'isActive':''}>
                <div name="black" className={styles.circle}></div>
                <div name="black" className={styles.name}>black</div>
            </li>
        </ul>
        <TodayWeatherList select = {select} temperature = {temperature}/>
        </>

    );
}

export default SelectClothes;