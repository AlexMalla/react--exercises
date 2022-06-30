import React from "react";
import { useState } from "react";
import Body from "./Body";
import DisplayLanguage from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext";

export function App() {

  const [language, setLanguage] = useState('en')

  function changeLanguage(event) {
    setLanguage(event.target.value)
  }

  return (
    <div className="App">
      <LanguageContext.Provider value={language}>
        <Body>
          <select value={language} onChange={changeLanguage}>
            <option value='en'>English</option>
            <option value='it'>Italiano</option>
          </select>
          <DisplayLanguage />
        </Body>
      </LanguageContext.Provider>
    </div>
  )
}

export default App