
import DateSelector from './components/DateSelector'
import Information from './components/Information'
import { useSelector } from 'react-redux'
import Notification from './components/Notification'
import BestDayToBuyAndSell from './components/BestDayToBuyAndSell'
import HighestTradingVolume from './components/HighestTradingVolume'
import LongestDownardTrend from './components/LongestDownwardTrend'
import IntroText from './components/IntroText'

import './stylesheets/app.css'

const App = () => {
  const coinData = useSelector(state => {
    return state.coins
  })
  return (
    <div className='app'>
      <header className='header'>
        <h1>
          Bitcoin analyser
        </h1>
      </header>
      <div className='body'>
        <DateSelector/>
        {coinData 
          ? 
          <div className='informationContainer'>
            <LongestDownardTrend/> 
            <HighestTradingVolume/>
            <BestDayToBuyAndSell/>         
          </div> 
          :
          <div className='informationContainer'>
            <IntroText/>
          </div>}        
      </div>
      <Notification/>
    </div>
  )
}
  

export default App;
