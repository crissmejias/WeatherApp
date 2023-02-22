import { useRef, useState } from "react";
import { Menu } from "./Menu";
const Header = () => {
    const langArrow = useRef(null);
    const cityArrow = useRef(null);
    const [langMenu, setLangMenu] = useState(false)
    const [cityMenu, setCityMenu] = useState(false)
    const showlangMenu = ({target}) => {
        target.classList.toggle('rotate-180');
        setLangMenu(prev => !prev)
        setCityMenu(false);
        cityArrow.current.classList.remove('rotate-180')

      }
      const showCityMenu = ({target}) => {
        target.classList.toggle('rotate-180');
        setCityMenu(prev => !prev)
        setLangMenu(false);
        langArrow.current.classList.remove('rotate-180')
      }
    return(
        <header className="p-2 bg-gray-800 flex justify-center gap-4 items-center text-white">
        <li className="flex justify-center hover:bg-gray-500 p-2 rounded-xl relative">
            Language
        <i ref={langArrow} className="fi fi-rr-angle-small-down transition duration-300 relative -right-1 top-1" onClick={showlangMenu}></i>
        </li>
        { langMenu && <Menu type='lang'  menu={langMenu}  setMenu={setLangMenu} arrow={langArrow} description={'Select your Language'} />}
        <li className="flex justify-center hover:bg-gray-500 p-2 rounded-xl relative">
            City
        <i ref={cityArrow} className="fi fi-rr-angle-small-down transition duration-300 relative -right-1 top-1" onClick={showCityMenu}></i>
        </li>
        { cityMenu && <Menu type='city' menu={cityMenu} setMenu={setCityMenu} arrow={cityArrow}  description={['Select your Country','Select your City']} />}
        </header>
    )
}
export {Header};