import TimerActionTypes from './timer.types'

const INITIAL_STATE = {
	elapsed: 0,
	isRunning: false,
}

const timerReducer = ( state = INITIAL_STATE, {type, payload}) => {
	switch(type) {
		case TimerActionTypes.START_TIMER:
			return {
				...state,
				isRunning: payload
			}
		case TimerActionTypes.STOP_TIMER:
			return {
				...state,
				isRunning: payload
			}
		case TimerActionTypes.UPDATE_ELAPSED:
			return {
				...state,
				elapsed: payload
			}
		default:
			return state
	}
}

export default timerReducer