import React from 'react'

import './numberinput.scss'

const NumberInput = ({handleHour, handleMinute, punc}) => {

    return (
        <div className="number-wrapper">
            <input className="number-hour" type='number'onChange={handleHour}/>{punc}<input className="number-minutes" type="number" onChange={handleMinute}/>
        </div>
    );
}

export default NumberInput;