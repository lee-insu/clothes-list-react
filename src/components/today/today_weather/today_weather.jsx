import React, { useEffect, useState } from 'react';
import dateBulider from '../../../service/dateBulider'
import handleGeoSuccess from '../../../service/navigator';
import SelectClothes from '../../today/select_clothes/select_clothes';

const TodayWeather = () => {

    const todayShow = dateBulider(new Date());
    const [weather,setWeather] = useState({});
    const [temperature, setTemp] = useState({});
    



    useEffect(() => {

      navigator.geolocation.getCurrentPosition(handleGeo)
      function handleGeo(position){
          try{
          handleGeoSuccess(position)
          .then(res => res.json())
          .then(result => {
              setWeather(result);
              setTemp(result.main.temp);
          });
        } catch(error) {
            console.log(`location error:${error}`);
        }
      };
    },[])

    
    return (
        <>
        <div className="date">{todayShow}</div>
       <SelectClothes weather={weather} temperature ={temperature}/>
       </>
    )

};

export default TodayWeather;