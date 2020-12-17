import React from 'react'

import './numberinput.scss'

const NumberInput = ({handleHour, handleMinute, hours, minutes, punc}) => {

    return (
        <div className="number-wrapper">
            <input className="number-hour" type='number' min="0" max="24" value={hours} onChange={handleHour}/>{punc}<input className="number-minutes" type="number" min="0" max="59" value={minutes} onChange={handleMinute}/>
        </div>
    );
}

export default NumberInput;