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
        <main className={`w-full min-h-screen ${(!current?.is_day) ? "bg-hero":"bg-dark-hero"} bg-center grid place-items-center`}>  
      <div className="blur-[0.4px] container relative w-1/3 min-w-[350px] my-12 flex flex-col shadow-[1px_4px_5px_3px] shadow-gray-900/50 gap-4 rounded-lg">
        {props.children}
      </div>
      </main>
    </>
    )
}
export {Layout};