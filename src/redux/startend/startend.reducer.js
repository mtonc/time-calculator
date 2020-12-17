import StartEndActionTypes from './startend.types'

const INITIAL_STATE = {
	startTime: "00:00",
	endTime: "00:00"
}

const startEndReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case StartEndActionTypes.SET_START_TIME:
			return {
				...state,
				startTime: action.payload
			}
		case StartEndActionTypes.SET_END_TIME:
			return {
				...state,
				endTime: action.payload
			}
		case StartEndActionTypes.SET_DURATION:
			return {
				...state,
				duration: action.payload
			}
		default:
			return state
	}
}

export default startEndReducer;