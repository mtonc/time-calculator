import { combineReducers } from 'redux'
import converterReducer from './converter/converter.reducer'
import startEndReducer from './startend/startend.reducer'
import timerReducer from './timer/timer.reducer'

const rootReducer = combineReducers({
	converter: converterReducer,
	startEnd: startEndReducer,
	timer: timerReducer
})

export default rootReducer