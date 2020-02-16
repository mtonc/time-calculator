import React from 'react';

const TimeInput = ({min, max, handleChange, className}) => (
    <input className={className} type="time" min={min} max={max} onChange={handleChange}/>
)

export default TimeInput