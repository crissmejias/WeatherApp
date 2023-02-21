import { LanguageContext } from "../context/language"
import { useWeather } from "../hooks/useWeather"
import { useContext } from "react"
const Menu = ({setMenu}) => {
    const {lang, setLang} = useContext(LanguageContext);
    const handleChange = (e) => {
        setLang(e.target.value)
        setMenu(prev => !prev)
    }
    
    return(
        <div className="absolute text-white flex flex-col items-center justify-evenly top-14 w-1/2 rounded-br-lg rounded-bl-lg h-[200px] z-10 bg-gray-800">
            <h2 className="text-center pt-2 text-lg font-semibold">Choose a Language</h2>
            <select onChange={handleChange} className="w-2/3 text-black  rounded-md">
            <option value='es'>Spanish</option>
            <option value='en'>English</option>
            <option value='fr'>French</option>
            </select>
        </div>
    )
}
export {Menu}