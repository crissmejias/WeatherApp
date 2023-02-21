import { useEffect, useState } from "react";
import { useContext } from "react";
import { LanguageContext } from "../context/language";
const API_URL = 'http://api.weatherapi.com/v1/current.json'
let key = import.meta.env.VITE_KEY;
const useWeather = () =>{
    let {lang, setLang} = useContext(LanguageContext);
    const [location, setLocation] = useState([]);
    const [weatherData, setWeatherData] = useState({});
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{  
            let longitude = position.coords.longitude.toFixed(2);
            let latitude = position.coords.latitude.toFixed(2);
            setLocation([latitude, longitude])
        })
    },[]) 
    useEffect(()=>{
        if(location.length > 1){
            try{
            fetch(`${API_URL}?key=${key}&q=${location[0]},${location[1]}&lang=${lang}`)
            .then(data => data.json())
            .then(data => setWeatherData(data));
            }
            catch{
                console.log(error);
            }
        }
    },[location, lang])
    return weatherData;
}
export {useWeather};