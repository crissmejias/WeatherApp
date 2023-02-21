import { Card } from "./components/Card";
import { useWeather } from "./hooks/useWeather";
import { Layout } from "./components/Layout";
import { Weather } from "./components/Weather";
import { LanguageContext } from "./context/language";
import { useState } from "react";

function App() {
  const [lang, setLang] = useState('fr')
  return(
    <LanguageContext.Provider value={{lang, setLang}}>
      <Layout>
        <Weather/>
    </Layout>
    </LanguageContext.Provider>
  )
  } 
  export default App
