import React, { useEffect, useState } from 'react';
import styles from './select_clothes.module.css';
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

            <li name="red" onClick={onSelect}>
                <div name="red" className={isActive === 'red' ? styles.isActive: styles.name}>27-35°C</div>
                </li>

            <li name="orange" onClick={onSelect}>
                <div name="orange" className={isActive === 'orange' ? styles.isActive: styles.name}>22-26°C</div>
            </li>

            <li name="yellow" onClick={onSelect}>
                <div name="yellow" className={isActive === 'yellow' ? styles.isActive: styles.name}>19-21°C</div>
            </li>

            <li name="green" onClick={onSelect}>
                <div name="green"  className={isActive === 'green' ? styles.isActive: styles.name}>16-18°C</div>
            </li>

            <li name="blue" onClick={onSelect}>
                <div name="blue" className={isActive === 'blue' ? styles.isActive: styles.name}>11-15°C</div>
            </li>

            <li name="indigo" onClick={onSelect}> 
                <div name="indigo" className={isActive === 'indigo' ? styles.isActive: styles.name}>8-10°C</div>
            </li>

            <li name="purple" onClick={onSelect}>
                <div name="purple" className={isActive === 'purple' ? styles.isActive: styles.name}>4-7°C</div>
            </li>

            <li name="black" onClick={onSelect }>
                <div name="black" className={isActive === 'black' ? styles.isActive: styles.name}>-2-3°C</div>
            </li>
        </ul>
        </div>
        
        <TodayWeatherList gender = {gender} select = {select} temp = {tempSelect}/>
        </>

    );
}

export default SelectClothes;