import React from 'react'
import Information from "./Information"
import { useSelector } from "react-redux"

const BestDayToBuyAndSell = () => {
    const header = 'The best day to buy and sell:'
    const noGoodDayToProfit = 'You shouldnt buy bitcoin within the given date range'

    const bestDayToBuyAndSell = useSelector(state => {
        return state.coins.bestDayToBuyAndSell
    })

    

    if(bestDayToBuyAndSell){
        const body = 
        `The best day to buy bitcoin within the given date range was ${bestDayToBuyAndSell.buyDay}
        and the best day to sell was ${bestDayToBuyAndSell.sellDay}.`
        return(
            <Information header={header} body={body}/>
        )

    }
    return(
        <Information header={header} body={noGoodDayToProfit}/>
    )

}

export default BestDayToBuyAndSell