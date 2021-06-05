import React, { useEffect, useState } from 'react';
import styles from './today_weather_list.module.css';
import {fireStore} from '../../../service/firebase';
import LoadingSpinner from '../../loading/loading';


const TodayWeatherList = ({gender, select, temp}) => {


    const [clothes,getClothes] = useState([]);
    const [loading,getLoading] = useState(null);



    const clothesList = (temp,gen) => {
        if(gen === undefined) {

        fireStore.collection(`${temp}`)
        .onSnapshot(snapshot => {
            const array = snapshot.docs.map(doc => ({
                id:doc.id,
                ...doc.data(),
            }));
          getClothes(array);
        })

      } else if (gen === 'm'){

        fireStore.collection(`${temp}`).where("gen","==","m")
        .onSnapshot(snapshot => {
            const array = snapshot.docs.map(doc => ({
                id:doc.id,
                ...doc.data(),
            }));
          getClothes(array);
        })

      } else if (gen === 'w') {

        fireStore.collection(`${temp}`).where("gen","==","w")
        .onSnapshot(snapshot => {
            const array = snapshot.docs.map(doc => ({
                id:doc.id,
                ...doc.data(),
            }));
          getClothes(array);
        })

      }
    }

    
    useEffect(()=> {
        try{
            getLoading(true)
            select === undefined ? clothesList(temp,gender) : clothesList(select,gender);
            
        }catch (err) {
            getLoading(false)
        }
    },[temp,select,gender])

const ClothesLi = clothes.map(cloth => <li key ={cloth.id}><a href={cloth.link}><img src={cloth.url}/></a></li>)
   

    return(
        <>
        <div className={styles.loading}>{loading ? <LoadingSpinner />: ``} </div>
        <ul className={styles.ul}>{ClothesLi}</ul>
        </>
    )

}


export default TodayWeatherList;