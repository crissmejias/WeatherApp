import { useRef, useState } from "react";
import { Menu } from "./Menu";
import { Header } from "./Header";
import { useWeather } from "../hooks/useWeather";
const Layout = (props) => {
    const {current} = useWeather();
    console.log(current?.is_day)
    return(
    <>
        <Header />
        <main className={`w-full min-h-screen ${(current?.is_day) ? "bg-hero":"bg-dark-hero"} bg-center grid place-items-center`}>  
      <div className="bg-white/40 blur-[0.5px] container relative w-1/3 min-w-[350px] my-12 flex flex-col shadow-md shadow-black gap-4 rounded-lg">
        {props.children}
      </div>
      </main>
    </>
    )
}
export {Layout};