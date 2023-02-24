import { useEffect, useState } from "react";
import { useContext } from "react";
import { LanguageContext } from "../context/language";
import { useCountries } from "../context/countries";
const API_URL = 'http://api.weatherapi.com/v1/forecast.json'
let key = import.meta.env.VITE_WEATHER_KEY;
const useWeather = () =>{
    const {country, city} = useCountries();
    let {lang} = useContext(LanguageContext);
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
        if(location.length > 1 && !country){
            try{
            fetch(`${API_URL}?key=${key}&q=${location[0]},${location[1]}&lang=${lang}`,{
                referrerPolicy: 'unsafe-url'
            })
            .then(data => data.json())
            .then(data => setWeatherData(data));
            }
            catch{
                console.log(error);
            }
        }
    },[location, lang])
    useEffect(()=>{
        if(city){
            try{
            fetch(`${API_URL}?key=${key}&q=${city}&days=1&lang=${lang}`,{
                referrerPolicy: 'unsafe-url'
            })
            .then(data => data.json())
            .then(data => setWeatherData(data));
            }
            catch{
                console.log(error);
            }
        }
    },[city, lang])
    
    return weatherData;
}
export {useWeather};