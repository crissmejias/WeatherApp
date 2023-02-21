import { Card } from "./components/Card";
import { useWeather } from "./hooks/useWeather";
import { Layout } from "./components/Layout";
import { Weather } from "./components/Weather";
import { LanguageContext } from "./context/language";
import { useState } from "react";
import { CountriesProvider } from "./context/countries";
function App() {
  const [lang, setLang] = useState('');
  return(
    <CountriesProvider>
      <LanguageContext.Provider value={{lang, setLang}}>
        <Layout>
          <Weather/>
        </Layout>
      </LanguageContext.Provider>
    </CountriesProvider>
  )
  } 
  export default App
