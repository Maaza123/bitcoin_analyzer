import axios from 'axios'
const baseUrl = 'https://api.coingecko.com/api/v3'

const getMarketChartOnRange = async(startDate, endDate, coinId, vsCurrency) => {
    try{
        const response = await axios.get(`${baseUrl}/coins/${coinId}/market_chart/range?vs_currency=${vsCurrency}&from=${startDate}&to=${endDate}`)
        return response.data
    }catch(error){
        return error
    }
}

export default {getMarketChartOnRange}