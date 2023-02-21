import { languagesArray } from "../models/languages"
import { LanguageContext } from "../context/language"
import { useWeather } from "../hooks/useWeather"
import { useContext } from "react"
const Menu = ({setMenu, arrow}) => {
    const {lang, setLang} = useContext(LanguageContext);
    const handleChange = (e) => {
        setLang(e.target.value)
        setMenu(prev => !prev)
        arrow.current.classList.toggle('rotate-180');
    }
    
    return(
        <div className="absolute text-white flex flex-col items-center justify-evenly top-14 w-1/3 rounded-br-lg rounded-bl-lg h-[150px] z-10 bg-gray-800">
            <h2 className="text-center pt-2 text-lg font-semibold">Choose a Language</h2>
            <select onChange={handleChange} value={lang} className="w-2/3 text-black  rounded-md">    
            <option disabled>Select a Language</option>
            {languagesArray.map(el=>{
                return <option key={el[1]} value={el[1]}>{el[0]}</option>
            })}
            </select>
        </div>
    )
}
export {Menu}