import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import ToggleButton from '../../components/ToggleButton/ToggleButton'
import { selectElapsed, selectIsRunning  } from '../../redux/timer/timer.selectors'
import { startTimer, stopTimer, updateElapsed} from '../../redux/timer/timer.actions'
import './timer.scss'

const  Timer = ({
	isRunning,
	startTimer,
	stopTimer,
	elapsed,
	updateElapsed
}) => {

	

	useEffect(() => {
		let timer = null
		
		const tick = () => {
			if (isRunning) {
				updateElapsed(elapsed + 1)
			}
		}

		if (isRunning) {
			timer = setTimeout(tick, 1000)
		}
		
		return () => {
			if (timer) {
				clearTimeout(timer)
			}
		}
	}, [isRunning, elapsed, updateElapsed])

	

	const handleClick = (e) => {
		if (isRunning) {
			stopTimer()
			return
		}
		startTimer()
	}

	return (
		<div className="timer">
			<ToggleButton handleClick={handleClick} isRunning={isRunning}/>
			<h2>
				{
					Number.parseFloat(elapsed/3600).toPrecision(4)
				}
			</h2>
		</div>
	);

}

const mapStateToProps = createStructuredSelector({
	isRunning: selectIsRunning,
	elapsed: selectElapsed
})

const mapDispatchToProps = dispatch => ({
	updateElapsed: time => dispatch(updateElapsed(time)),
	startTimer: time => dispatch(startTimer(time)),
	stopTimer: time => dispatch(stopTimer(time))
})

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
