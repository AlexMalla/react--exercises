import "./App.css";
import DisplayLanguage from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext"
import React from "react";
import Body from "./Body";

class App extends React.Component {
  state = {
    language: 'en'
  }

  SelectLanguage = (event) => {
    this.setState((state) => {
      return { language: state.language = event.target.value }
    })
  }

  render() {
    return (
      <div className="App">
        <select value={this.state.language} onChange={this.SelectLanguage}>
          <option value='en'>English</option>
          <option value='it'>Italiano</option>
        </select>
        <LanguageContext.Provider value={this.state.language}>
          <DisplayLanguage />
          <Body />
        </LanguageContext.Provider>
      </div >
    );
  }
}

export default App