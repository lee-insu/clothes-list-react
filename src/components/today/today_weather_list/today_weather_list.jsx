import React, { useEffect, useState } from 'react';
import {fireStore} from '../../../service/firebase';


const TodayWeatherList = ({temperature}) => {

    const temp = Math.round(temperature)-273;
    const [clothes,getClothes] = useState([]);
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
                    color = `orange`
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
        tempList()
        clothesList(tempSelect)
    },[tempSelect])

    

    const summerClothes = clothes.map(cloth => <li key ={cloth.id}><a href={cloth.link}><img src={cloth.imageURL}/></a></li>)



        let season = ""

        switch(true) {
            case (temp < -3):
                season = "패딩,두꺼운 옷"
                break;
            case (temp < 4):
                season = "패딩,두꺼운 코트,누빔 옷, 기모, 목도리"
                break;
            case (temp < 8):
                season = "울 코트, 히트텍, 가죽 옷, 기모"
                break;
            case (temp < 11):
                season = "트렌치 코트, 야상, 점퍼, 스타킹, 기모바지"
                break;
            case (temp < 16):
                season = "자켓, 가디건, 청자켓, 니트, 스타킹, 청바지"
                break;
            case (temp < 19):
                season = "얇은 가디건, 니트, 맨투맨, 후드, 긴 바지"
                break;
            case (temp < 22):
                season = "블라우스, 긴발티, 면바지, 슬렉스"
                break;
            case (temp < 27):
                season = summerClothes
                break; 
             case (temp < 35):
                season = "반팔, 얇은 셔츠, 반바지, 면바지, 나시"
                break; 
            default :
                ;

            return season;
        }






    return(
        <ul>{season}</ul>
    )

}


export default TodayWeatherList;