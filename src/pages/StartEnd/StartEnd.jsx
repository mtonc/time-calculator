import React from 'react'
import { Interval } from 'luxon'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import TimeInput from '../../components/TimeInput/TimeInput'
import { setStartTime, setEndTime, setDuration } from '../../redux/startend/startend.actions'
import { selectStartTime, selectEndTime, selectDuration } from '../../redux/startend/startend.selectors'

import './startend.scss'

const StartEnd = ({startTime, endTime, duration, setStartTime, setEndTime, setDuration }) => {


	const handleStart = (e) => {
		setStartTime(e.target.value)
		calcTime()
	}

	const handleEnd = (e) => {
		setEndTime(e.target.value)
		calcTime()
	}

	const calcTime = () => {
		let start_arr = startTime.split(':')
		const start = { hours: start_arr[0], minutes: start_arr[1] }

		let end_arr = endTime.split(":")
		const end =  { hours: end_arr[0], minutes : end_arr[1] }

		const interval = Interval.fromDateTimes(start, end)
		if (interval) { 
			setDuration(interval)
		}
	}	

	return (
		<div className="start-end">
			<label>Start Time</label>
			<TimeInput className="time" handleChange={handleStart} />
			<label>End Time</label>
			<TimeInput className="time" handleChange={handleEnd} />		
			<h2>{
				(Interval.isInterval(duration)) ?
					Number.parseFloat(duration.count('minutes')/60).toPrecision(4) :
					0
			}</h2>
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	startTime: selectStartTime,
	endTime: selectEndTime,
	duration: selectDuration
})

const mapDispatchToProps = dispatch => ({
	setStartTime: startTime => dispatch(setStartTime(startTime)),
	setEndTime: endTime => dispatch(setEndTime(endTime)),
	setDuration: duration => dispatch(setDuration(duration))
})

export default connect(mapStateToProps, mapDispatchToProps)(StartEnd)