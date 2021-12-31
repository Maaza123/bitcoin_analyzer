import React from 'react'
import Information from "./Information";

const IntroText = () => {
    const header = 'Welcome to bitcoin analyser'
    const body = 
        `With this application you get useful information about bitcoin daily 
        prices and total volumes`
    return(
        <Information header={header} body={body}/>
    )

}

export default IntroText