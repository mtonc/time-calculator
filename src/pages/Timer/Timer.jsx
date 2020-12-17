import React from 'react'

import ToggleButton from '../../components/ToggleButton/ToggleButton'

import './timer.scss'

const  Timer = ({}) => {


	handleClick = (e) => {
		
	}

	return (
		<div className="timer">
			<ToggleButton handleClick={this.handleClick} isRunning={this.state.isRunning}/>
			<h2>
				{
					
				}
			</h2>
		</div>
	);

}
 
export default Timer

