import { useRef, useState } from "react";
import { Menu } from "./Menu";
import { Header } from "./Header";

const Layout = (props) => {

    return(
    <>
        <Header />
        <main className="w-full min-h-screen bg-hero bg-center grid place-items-center">  
      <div className="bg-white/40 blur-[0.5px] relative w-1/3 min-w-[350px] flex flex-col shadow-md shadow-black gap-4 rounded-lg">
        {props.children}
      </div>
      </main>
    </>
    )
}
export {Layout};