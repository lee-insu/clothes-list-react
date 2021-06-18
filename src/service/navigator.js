const handleGeoSuccess = async (position) => {

  const lat =  position.coords.latitude;
  const lon =  position.coords.longitude;
  const weatherApi = process.env.REACT_APP_WEATHER_API_KEY
 
  const location = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApi}`)
     return  location;
     
}

export default handleGeoSuccess;