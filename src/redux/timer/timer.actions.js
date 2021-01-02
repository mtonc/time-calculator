import TimerActionTypes from './timer.types'

export const startTimer = () => ({
	type: TimerActionTypes.START_TIMER,
	payload: true
})

export const stopTimer = () => ({
	type: TimerActionTypes.STOP_TIMER,
	payload: false
})

export const updateElapsed = elapsed => ({
	type: TimerActionTypes.UPDATE_ELAPSED,
	payload: elapsed
})