import React from 'react'

import './togglebutton.scss'

const ToggleButton = ({handleClick, isRunning}) => (
	<button className="toggle-button" type="button" onClick={handleClick}>
		{
			isRunning ?
				"Pause" :
				"Start"
		}
	</button>
)

export default ToggleButton