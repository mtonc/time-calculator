import ConverterActionTypes from './converter.types'

const INITIAL_STATE = {
	hours: 0,
	minutes: 0
}

const converterReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ConverterActionTypes.UPDATE_HOURS:
			return {
				...state, 
				hours: action.payload
			}
		case ConverterActionTypes.UPDATE_MINUTES:
			return {
				...state,
				minutes: action.payload
			}
		default: 
			return state
	}
}

export default converterReducer