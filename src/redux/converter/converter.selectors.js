import { createSelector } from 'reselect'

const selectConverter = state => state.converter

export const selectHours = createSelector(
	[selectConverter],
	converter => converter.hours
)

export const selectMinutes = createSelector(
	[selectConverter],
	converter => converter.minutes
)