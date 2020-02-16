import React from 'react';

const TimeInput = ({min, max, handleChange}) => (
    <input type="time" min={min} max={max} onChange={handleChange}/>
)

export default TimeInput