import { UnixTimeToDate } from "./conversion"

const filterDailyData = (data) => {
    const hours24 = 24*60*60*1000
    const firstDateUnix = data[0][0]
    let dayNumber;

    dayNumber = firstDateUnix- firstDateUnix%hours24

    let filteredData = []
    filteredData.push([dayNumber, data[0][1]])
    dayNumber = dayNumber + hours24
    data.shift()
    for(let i=0; i < data.length-1; i++){
        
        if((data[i][0] > dayNumber) !== (data[i+1][0] > dayNumber)){
                if(Math.abs(data[i][0] - dayNumber) > Math.abs(data[i+1][0] - dayNumber)){
                    filteredData.push([dayNumber, data[i+1][1]])
                    dayNumber = dayNumber + hours24
                }else{
                    filteredData.push([dayNumber, data[i][1]])
                    dayNumber = dayNumber + hours24
                }
            }
    }
    return filteredData

}

const getDownwardTrend = (prices) => {   
    let streak = 0
    let longest = 0
    for(let i = 0; i < prices.length-1; i++){
        if(prices[i][1] > prices[i+1][1]){
            streak++
            if(streak>longest){
                longest = streak
            }
        }else{
            streak = 0
            }
        }
    return longest

}
const getHighestTradingVolume = (tradingVolumes) => {
    let highestDay = null
    let highestVolume = 0
    tradingVolumes.forEach(element => {
        if(element[1]> highestVolume){
            highestDay = element[0]
            highestVolume = element[1]
        }
    });
    const day = UnixTimeToDate(highestDay)
    const volume = highestVolume
    const data = {
        volume: volume,
        day: day
    }
    return data
}

const getBestDayToBuyAndSell = (prices) => {
    let max_diff = 0
    let min_element = prices[0][1];
    let buyIndex= 0
    let sellIndex= 0
    let buyIndexTemp = 0
    for (let i = 0; i < prices.length; i++) {
        if (prices[i][1] - min_element > max_diff){
            if(sellIndex< buyIndexTemp){
                buyIndex = buyIndexTemp
            }
            max_diff = prices[i][1] - min_element;
            sellIndex = i
        }
        if (prices[i][1] < min_element){
            min_element = prices[i][1];
            buyIndexTemp = i;
        }      
    }
    if(buyIndex === 0 && sellIndex === 0){
        return 0
    }
    const buyDay = UnixTimeToDate(prices[buyIndex][0])
    const sellDay = UnixTimeToDate(prices[sellIndex][0])
    return {
        buyDay: buyDay,
        sellDay: sellDay
    }
}

export {getDownwardTrend, getHighestTradingVolume, getBestDayToBuyAndSell, filterDailyData}