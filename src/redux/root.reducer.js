import { combineReducers } from 'redux'
import converterReducer from './converter/converter.reducer'

const rootReducer = combineReducers({
	converter: converterReducer
})

export default rootReducer