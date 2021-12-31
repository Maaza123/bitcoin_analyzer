import { createStore, combineReducers, applyMiddleware} from 'redux'
import coinReducer from './reducers/coinReducer'
import notificationReducer from './reducers/notificationReducer'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    coins: coinReducer,
    notification: notificationReducer
})

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

export default store