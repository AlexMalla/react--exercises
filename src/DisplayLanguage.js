import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

function DisplayLanguage() {
    const language = useContext(LanguageContext)

    return (
        <h2>Current Language: {language}</h2>
    )
}

export default DisplayLanguage;