import StartEndActionTypes from './startend.types'

export const setStartTime = time => ({
	type: StartEndActionTypes.SET_START_TIME,
	payload: time
})

export const setEndTime = time => ({
	type: StartEndActionTypes.SET_END_TIME,
	payload: time
})

export const setDuration = duration => ({
	type: StartEndActionTypes.SET_DURATION,
	payload: duration
})