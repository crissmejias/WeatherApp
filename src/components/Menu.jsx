import { languagesArray } from "../models/languages"
import { LanguageContext } from "../context/language"
import { useWeather } from "../hooks/useWeather"
import { useContext, useEffect, useRef, useState } from "react"
import { useCountries } from "../context/countries"
import { City, Country } from "country-state-city"
const Menu = ({menu,setMenu, arrow, description, type}) => {
    const {lang, setLang} = useContext(LanguageContext);
    const {country, setCountry, city, setCity} = useCountries();
    const [allCities, setAllCities] = useState([]);
    const handleLangChange = (e) => {
        setLang(e.target.value)
        setMenu(prev => !prev)
        arrow.current.classList.toggle('rotate-180');
    }
    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    }
    const handleCityChange = (e) => {
        setCity(e.target.value);
        setMenu(prev => !prev)
        arrow.current.classList.toggle('rotate-180');
    }
   
    const countries = Country.getAllCountries();
    useEffect(()=>{
        if(country.length > 1){
          setAllCities(City.getCitiesOfCountry(country));
        }
    },[country]);
    if(type === 'lang'){
        return(
            <div  id='menu' className="absolute text-white flex flex-col items-center justify-evenly top-14 w-1/3 rounded-br-lg rounded-bl-lg h-[150px] z-10 bg-gray-800">
            <h2 className="text-center pt-2 text-lg font-semibold">{description}</h2>
            <select defaultValue='default' onChange={handleLangChange} className="w-2/3 text-sm text-gray-800 text-center py-2  rounded-md">    
            <option value='default' disabled>{description}</option>
            {languagesArray.map(el=>{
                return <option key={el[1]} value={el[1]}>{el[0]}</option>
            })}
            </select>
        </div>
    )
}
if(type === 'city'){
    return(
        <div  id='menu' className="absolute text-white flex flex-col items-center justify-evenly top-14 w-1/3 rounded-br-lg rounded-bl-lg h-[250px] z-10 bg-gray-800">
        <h2 className="text-center pt-2 text-lg font-semibold">{description[0]}</h2>
        <select defaultValue='default' onChange={handleCountryChange} className="w-2/3 text-sm text-gray-800 text-center py-2 rounded-md">    
        <option value='default' disabled>{description[0]}</option>
        {countries.map(el=>{
            return <option key={el.isoCode} value={el.isoCode}>{el.name}</option>
        })}
        </select>
        {allCities.length > 1 &&
        <>
        <h2 className="text-center pt-2 text-lg font-semibold">{description[1]}</h2>
        <select defaultValue='default'  className="w-2/3 text-sm text-gray-800 text-center py-2 rounded-md" onChange={handleCityChange}>    
        <option value='default'  disabled>{description[1]}</option>
        {allCities.map(el=>{
            return <option key={`${el.name}, ${el.stateCode}`} value={el.name}>{`${el.name}, ${el.stateCode}`}</option>
        })}
        </select>
        </>
}

    </div>
)
}
}
export {Menu}