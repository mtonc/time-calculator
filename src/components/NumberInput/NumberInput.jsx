import React from 'react'

const NumberInput = ({handleHour, handleMinute, punc}) => {

    return (
        <div className="number-wrapper">
            <input className="number-hour" type='number'onChange={handleHour}/>{punc}<input classname="number-minutes" type="number" onChange={handleMinute}/>
        </div>
    );
}

export default NumberInput;