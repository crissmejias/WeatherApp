import { useState, useEffect} from "react";
import { useWeather } from "./useWeather";
const useForecast = () => {
    const [data, setData] = useState([])
    const {current, forecast} = useWeather();
    useEffect(()=>{
        if(current && forecast){
            let local = current.last_updated_epoch;
            const dataPerHour =forecast.forecastday[0].hour;
            let forecastData = dataPerHour.filter(data => data.time_epoch > local)
            setData(forecastData);
        }
    },[forecast])
return data;

}
export {useForecast}