import React, { useEffect } from 'react'
import { useState } from 'react'
import {htmlDateToUnix} from '../services/conversion.js'
import { useDispatch} from 'react-redux'
import { getDailyCoinData } from '../reducers/coinReducer.js'
import '../stylesheets/dateSelector.css'


const DateSelector = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [today, setToday] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault();
        const startDateUnix = htmlDateToUnix(startDate)
        const endDateUnix = htmlDateToUnix(endDate) + 60*60
        dispatch(getDailyCoinData(startDateUnix, endDateUnix))
        
        

    }
    useEffect(() => {
        const today = new Date()
        const dd = today.getDate()
        const mm = today.getMonth() + 1
        const yyyy = today.getFullYear()
        setToday(`${yyyy}-${mm}-${dd}`)

    },[])

    return (
        <div id='wrapper'>
            <h3>
                Select interval for data:
            </h3>
            <form id='form' onSubmit={handleSubmit}>
            <div>
                <div>
                    <label htmlFor='startDate'> start date:</label>
                </div>
                <div>
                    <input 
                        type='date' 
                        value={startDate} 
                        onChange={({target}) => {setStartDate(target.value)}}
                        name='startDate'
                        max={endDate ? endDate : today}
                        required={true}
                    />
                </div>
                <div>
                    <label htmlFor='endDate'> end date:</label>
                </div>
                <div>
                    <input 
                        type='date' 
                        value={endDate}
                        onChange={({target}) => {setEndDate(target.value)}}
                        name='endDate'
                        min={startDate}
                        max={today}
                        required={true}
                    />
                </div>
            </div>
            <div className='button'>
                <button type='submit'>submit</button>
            </div>
        </form>
        </div>
        
        )
}

export default DateSelector