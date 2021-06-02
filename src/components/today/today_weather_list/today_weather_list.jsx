import React, { useEffect, useState } from 'react';
import styles from './today_weather_list.module.css';
import {fireStore} from '../../../service/firebase';
import LoadingSpinner from '../../loading/loading';


const TodayWeatherList = ({gender, select, temperature}) => {

    const temp = Math.round(temperature)-273;
    const [clothes,getClothes] = useState([]);
    const [tempSelect,getTempSelect] =useState();
    const [loading,getLoading] = useState(null);


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
                    color = " red"
                    break;
                case (temp < 35):
                    color = " red"
                    break;
                default :
                ;
                return color;
            }
            
             getTempSelect(color);
        }
        
    
    const clothesList = (temp) => {
        fireStore.collection(`${temp}`)
        .onSnapshot(snapshot => {
            const array = snapshot.docs.map(doc => ({
                id:doc.id,
                ...doc.data(),
            }));
          getClothes(array);
        })
    }

    useEffect(()=> {
        try{
            getLoading(true)
            tempList(temp)
            select === undefined ? clothesList(tempSelect) : clothesList(select)
            
        }catch (err) {
            getLoading(false)
        }
    },[tempSelect,temp,select])

    const ClothesLi = clothes.map(cloth => <li key ={cloth.id} gen={cloth.gen}><a href={cloth.link}><img src={cloth.imageURL}/></a></li>)


    return(
        <>
        <div className={styles.loading}>{loading ? <LoadingSpinner />: ``} </div>
        <ul className={styles.ul}>{ClothesLi}</ul>
        </>
    )

}


export default TodayWeatherList;