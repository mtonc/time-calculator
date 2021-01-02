import { createSelector } from 'reselect'

const selectTimer = state => state.timer

export const selectIsRunning = createSelector(
	[selectTimer],
	timer => timer.isRunning
)

export const selectStartTime = createSelector(
	[selectTimer],
	timer => timer.starTime
)

export const selectElapsed = createSelector(
	[selectTimer],
	timer => timer.elapsed
)
