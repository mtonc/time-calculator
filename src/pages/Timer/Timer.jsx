import React from 'react'
import moment from 'moment'
import ToggleButton from '../../components/ToggleButton/ToggleButton'

import './timer.scss'

class Timer extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			isRunning: false,
			startTime: null,
			endTime: null,
			duration: null
		}
	}

	calcTime = () => {
		if (this.state.isRunning) {
			this.setState({startTime: moment(), endTime: null})
		} else {
			this.setState({endTime: moment()}, () => {
				if (this.state.duration === null) {
					this.setState({duration: moment.duration(this.state.endTime.diff(this.state.startTime))})
				} else {
					const temp_duration = moment.duration(this.state.endTime.diff(this.state.startTime))
					this.setState({duration: this.state.duration.add(temp_duration)})
				}
			})
		}
	}

	handleClick = (e) => {
		this.setState(prevState => {
			return { isRunning: !!!prevState.isRunning };
		}, this.calcTime)
	}

	render() { 
		return (
			<div className="timer">
				<ToggleButton handleClick={this.handleClick} isRunning={this.state.isRunning}/>
				<h2>
					{
						this.state.duration ?
						Number.parseFloat(this.state.duration.asHours()).toPrecision(3) :
						0.00
					}
				</h2>
			</div>
		);
	}
}
 
export default Timer

