import React from 'react'
import moment from 'moment'
import TimeInput from '../TimeInput/TimeInput'

import './startend.scss'

class StartEnd extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			startTime: "",
			endTime: "",
			duration: {}
		}
	}

	handleStart = (e) => {
		this.setState({startTime: e.target.value}, () => this.calcTime())
	}

	handleEnd = (e) => {
		this.setState({endTime: e.target.value}, () => this.calcTime())
	}

	calcTime = () => {
		let start_arr = this.state.startTime.split(':')
		const start = moment().set({
			'hours': start_arr[0],
			'minutes': start_arr[1]
		})

		let end_arr = this.state.endTime.split(":")
		const end = moment().set({
			'hours': end_arr[0],
			'minutes': end_arr[1]
		})
		if (start && end) {
			this.setState(state => {return {duration: moment.duration(end.diff(start))}})
		}
	}

	render() {		
		return (
			<div className="start-end">
				<TimeInput className="time" handleChange={this.handleStart} />
				<TimeInput className="time" handleChange={this.handleEnd} />						
				<h2>{
					moment.isDuration(this.state.duration) ?
						Number.parseFloat(this.state.duration.asHours()).toPrecision(3) :
						""
				}</h2>
			</div>
		)
	}
}

export default StartEnd