import Information from "./Information";
import { useSelector } from "react-redux";

const HighestTradingVolume = () => {
    const highestTradingVolume = useSelector(state => {
        return state.coins.highestTradingVolume
    })
    const header = 'Day with the highest trading volume:'
    const body = 
        `The day with the highest trading volume of bitcoin was on 
        ${highestTradingVolume.day} with the volume of 
        ${highestTradingVolume.volume}€.`
    return(
        <Information header={header} body={body}/>
    )

}

export default HighestTradingVolume