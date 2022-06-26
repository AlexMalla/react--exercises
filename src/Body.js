import React from "react";
import { LanguageContext } from "./LanguageContext"

const strings = {
    it: {
        HELLO: "Buongiorno! Come stai oggi?"
    },

    en: {
        HELLO: "Good morning! How are you today?"
    }
}


class Body extends React.Component {

    render() {

        return (
            <LanguageContext.Consumer>

                {((language) => {

                    return (
                        <h1>{strings[language].HELLO}</h1>
                    )

                })}

            </LanguageContext.Consumer>
        )
    }
}


export default Body