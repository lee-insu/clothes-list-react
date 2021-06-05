import React, { useEffect, useState } from 'react';
import styles from './select_clothes.module.css';
import './select_clothes.css';
import TodayWeatherList from '../today_weather_list/today_weather_list';




const SelectClothes = ({gender,temperature}) => {

    const temp = Math.round(temperature)-273;
    const [select,getSelect] = useState();
    const [isActive,getIsActive] =useState();
    const [tempSelect,getTempSelect] =useState();

    const tempList = (temp) => {
        let color = ""
            switch(true) {
                case (temp < -3):
                    color = "black"
                    break;
                case (temp < 4):
                    color = "purple"
                    break;
                case (temp < 8):
                    color = "indigo"
                    break;
                case (temp < 11):
                    color = "blue"
                    break;
                case (temp < 16):
                    color = "green"
                    break;
                case (temp < 19):
                    color = "yellow"
                    break;
                case (temp < 22):
                    color = "orange"
                    break;
                case (temp < 27):
                    color = "red"
                    break;
                case (temp < 35):
                    color = "red"
                    break;
                default :
                ;
                return color;
            }
            
             getTempSelect(color);
        }
        




    const onSelect = (e) => {

        let selectCollect = e.target.getAttribute('name');
        getSelect(selectCollect);
        
    }

    useEffect(() =>{
        getIsActive(select === undefined ? tempSelect : select)
        tempList(temp)
    }
        ,[temp,select,tempSelect]);

    return (
        
        <>
        <div className = {styles.container}>
        <ul className={styles.ul}>

            <li name="red" onClick={onSelect} className={isActive === 'red' ? 'isActive':''}>
                <div name="red" className={styles.circle}></div>
                <div name="red" className={styles.name}>27-35°C</div>
                </li>

            <li name="orange" onClick={onSelect} className={isActive === 'orange' ? 'isActive':''}>
                <div name="orange" className={styles.circle}></div>
                <div name="orange" className={styles.name}>22-26°C</div>
            </li>

            <li name="yellow" onClick={onSelect} className={isActive === 'yellow' ? 'isActive':''}>
                <div name="yellow" className={styles.circle}></div>
                <div name="yellow" className={styles.name}>19-21°C</div>
            </li>

            <li name="green" onClick={onSelect} className={isActive === 'green' ? 'isActive':''}>
                <div name="green"  className={styles.circle}></div>
                <div name="green"  className={styles.name}>16-18°C</div>
            </li>

            <li name="blue" onClick={onSelect} className={isActive === 'blue' ? 'isActive':''}>
                <div name="blue" className={styles.circle}></div>
                <div name="blue" className={styles.name}>11-15°C</div>
            </li>

            <li name="indigo" onClick={onSelect} className={isActive === 'indigo' ? 'isActive':''}>
                <div name="indigo" className={styles.circle}></div>
                <div name="indigo" className={styles.name}>8-10°C</div>
            </li>

            <li name="purple" onClick={onSelect} className={isActive === 'purple' ? 'isActive':''}>
                <div name="purple" className={styles.circle}></div>
                <div name="purple" className={styles.name}>4-7°C</div>
            </li>

            <li name="black" onClick={onSelect } className={isActive === 'black' ? 'isActive':''}>
                <div name="black" className={styles.circle}></div>
                <div name="black" className={styles.name}>-2-3°C</div>
            </li>
        </ul>
        </div>
        
        <TodayWeatherList gender = {gender} select = {select} temp = {tempSelect}/>
        </>

    );
}

export default SelectClothes;