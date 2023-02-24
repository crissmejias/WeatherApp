import { useRef, useState } from "react";
import { Menu } from "./Menu";
import { Header } from "./Header";
import { useWeather } from "../hooks/useWeather";
const Layout = (props) => {
    const {current, forecast} = useWeather();
    console.log(forecast)
    return(
    <>
        <Header />
        <main className={`w-full min-h-screen ${(current?.is_day) ? "bg-hero":"bg-dark-hero"} bg-center grid grid-rows-[1fr_200px] place-items-center`}>  
      <div className="blur-[0.4px py-4 container relative w-1/3 min-w-[350px] flex flex-col shadow-[1px_4px_5px_3px] place-self-center sef-center shadow-gray-900/50 gap-4 rounded-lg">
        {props.children}
      </div>
      <a target="_blank" href="https://www.weatherapi.com/" title="Free Weather API" className=" text-center p-2 blur-[0.5px] shadow-[1px_2px_5px_1px] shadow-gray-900/50 rounded-lg font-thin self-start mb-8 place-self-center mb-4 text-[16px]">Powered by <img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" border="0"/></a>
      </main>
    </>
    )
}
export {Layout};