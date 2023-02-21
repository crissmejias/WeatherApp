import { useState } from "react";
import { Menu } from "./Menu";

const Layout = (props) => {
    const [menu, setMenu] = useState(false)
    const showData = ({target}) => {
        target.classList.toggle('rotate-180');
        setMenu(prev => !prev)
      }
    return(
    <>
        <header className="p-2 bg-gray-800 flex justify-center gap-4 items-center text-white">
        <li className="flex justify-center hover:bg-gray-500 p-2 rounded-xl relative">
            Language
        <i className="fi fi-rr-angle-small-down transition duration-300 relative -right-1 top-1" onClick={showData}></i>
        </li>
        { menu && <Menu setMenu={setMenu}/>}
        <li className="flex justify-center hover:bg-gray-500 p-2 rounded-xl relative">
            City
        <i className="fi fi-rr-angle-small-down transition duration-300 relative -right-1 top-1" onClick={showData}></i>
        </li>
        </header>
        <main className="w-full min-h-screen bg-hero bg-center grid place-items-center">  
      <div className="bg-white/40 blur-[0.5px] relative w-1/3 min-w-[350px] flex flex-col shadow-md shadow-black gap-4 rounded-lg">
        {props.children}
      </div>
      </main>
    </>
    )
}
export {Layout};