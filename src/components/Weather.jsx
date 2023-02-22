import { useState } from "react";
import { useWeather } from "../hooks/useWeather";
import loader from '/loader.gif'
import { Forecast } from "./Forecast";
const Weather = () => {
    const [moreInfo, setMoreInfo] = useState(false)
    const showData = ({target}) => {
      target.classList.toggle('rotate-180');
      setMoreInfo(prev => !prev);
    }
    const data = useWeather();
    if(data.current) return(
        <>
        <h1 className="font-thin text-4xl w-full text-center mx-auto mt-4 ">{`${data.location.name}, ${data.location.country}`}</h1>
        <h2 className="font-thin text-7xl text-center ml-4">{data.current.temp_c}ºC</h2>
        <div className=" font-thin flex flex-col text-xl w-full justify-center items-center gap-4">
        <img className="opacity-60 p-2   rounded-lg blur-[0.5px]" src={data.current.condition.icon}/>
        <p className="font-thin text-xl text-center w-1/2 mx-auto ">{data.current.condition.text}</p>
        <div className="flex justify-center">
        <i className="fi fi-rr-angle-small-down transition ease-in duration-300" onClick={showData}></i>
        </div>
        </div>
        <div className={`${!moreInfo && 'hide'} ${ moreInfo && "show"} gap-3`}>
           <Forecast/>
        </div>
        </>
    )
    if(!data.current) return(
        <div className="text-center p-16 font-thin flex justify-center">
            <img className="bg-blend-screen" src={loader}/>
        </div>
    )   
}
export {Weather};