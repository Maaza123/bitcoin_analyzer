import React from 'react'
import Information from "./Information"
import { useSelector } from "react-redux"

const LongestDownardTrend = () => {
    const longestDownardTrend = useSelector(state => {
        return state.coins.longestDownardTrend
    })
    const header = 'The longest downward trend:' 
    const body =
        `Longest downward trend of bitcoin on the give date range was 
        ${longestDownardTrend} days long.`

    return(
        <Information header={header} body={body}/>
    )

}

export default LongestDownardTrend