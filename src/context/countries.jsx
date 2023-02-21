import { Country } from "country-state-city";
import { createContext, useContext, useState } from "react";
const CountriesContext = createContext();
const useCountries = () =>{
    const countries = useContext(CountriesContext);
    return countries;
}
const CountriesProvider=({children}) => {
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const countries = {country, setCountry, city, setCity}
    return(
        <CountriesContext.Provider value={countries}>
            {children}
        </CountriesContext.Provider>
    )
}
export {useCountries, CountriesProvider};
