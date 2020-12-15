import ConverterActionTypes from './converter.types'

export const updateHours = hours => ({
	type: ConverterActionTypes.UPDATE_HOURS,
	payload: hours
})

export const updateMinutes = min => ({
	type: ConverterActionTypes.UPDATE_MINUTES,
	payload: min
})