import { combineReducers } from 'redux'
import converterReducer from './converter/converter.reducer'
import startEndReducer from './startend/startend.reducer'

const rootReducer = combineReducers({
	converter: converterReducer,
	startEnd: startEndReducer
})

export default rootReducer