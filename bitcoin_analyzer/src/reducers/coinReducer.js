import coinGecko from '../client/coingecko.js'
import {getDownwardTrend, getHighestTradingVolume, getBestDayToBuyAndSell, filterDailyData} from '../services/coinReducerHelper'
import { setNewNotification } from './notificationReducer.js'
const days90 = 90*24*60*60


const initialState = false

const coinReducer = (state=initialState, action) => {
    switch(action.type){
        case 'SET_DAILY_DATA':
            return action.data
        
    }
    return state
}

export const getDailyCoinData = (startDate, endDate, coinId = 'bitcoin', vsCurrency= 'eur' ) => {
    return async dispatch => {
        try{
            const response = await coinGecko.getMarketChartOnRange(startDate, endDate, coinId, vsCurrency)
            let prices
            let total_volumes
            if(endDate - startDate-60*60 < days90){
                prices = filterDailyData(response.prices)
                total_volumes = filterDailyData(response.total_volumes)
            }else{
                prices = response.prices;
                total_volumes = response.total_volumes
            }
            const longestDownardTrend = getDownwardTrend(prices)
            const highestTradingVolume = getHighestTradingVolume(total_volumes)
            const bestDayToBuyAndSell = getBestDayToBuyAndSell(prices)

            const data = {
                longestDownardTrend: longestDownardTrend,
                highestTradingVolume: highestTradingVolume,
                bestDayToBuyAndSell: bestDayToBuyAndSell
            }
            dispatch({
                type: 'SET_DAILY_DATA',
                data: data
            })

        }catch(error){
            const message = 'There was an error retrieving the data'
            dispatch(setNewNotification(message, 5000, 'error'))
            
        }

    }
}

export default coinReducer