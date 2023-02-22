import { Suspense } from "react";
import { useForecast } from "../hooks/useForecast";
import { useWeather } from "../hooks/useWeather";
import { Card } from "./Card";

const Forecast = () => {
    const handleScroll = (e) => {
        e.target.scrollBy({
            left: e.deltaY < 0 ? -30 : 30,
        })
    }
    const data = useForecast();
    const dataNow = useWeather();

if(data[0]) {return(
        <div className=" w-5/6 flex  gap-2  overflow-scroll" onWheel={handleScroll}>
            <Card type='current' data={dataNow.current}/>
          {data.map((hour)=>{
            return <Card type='forecast' key={hour.time_epoch} time={hour.time} temp={hour.temp_c} condition={hour.condition}/>
            })}
        </div>
    )}
return(
    <p className="text-sm font-thin p-4">Loading...</p>
)
}
export {Forecast};