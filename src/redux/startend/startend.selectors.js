import { createSelector } from 'reselect'

const selectStartEnd = state => state.startEnd

export const selectStartTime = createSelector(
	[selectStartEnd],
	startEnd => startEnd.startTime
)

export const selectEndTime = createSelector(
	[selectStartEnd],
	startEnd => startEnd.endTime
)

export const selectDuration = createSelector(
	[selectStartEnd],
	startEnd => startEnd.duration
)