import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import NumberInput from '../../components/NumberInput/NumberInput'
import { selectHours, selectMinutes } from '../../redux/converter/converter.selectors'
import { updateHours, updateMinutes } from '../../redux/converter/converter.actions'
import './converter.scss'

const Converter = ({hours, minutes, updateHours, updateMinutes}) => {

   const handleHours = (e) => {
	   updateHours(Number(e.target.value))
   }

   const handleMinutes = (e) => {
		updateMinutes(Number(e.target.value))
	}

	return (
		<div className="converter">
			<NumberInput classname="number-in" hours={hours} minutes={minutes} handleHour={handleHours} handleMinute={handleMinutes} punc=":"/>
			<br/>
			<h2>{Number(hours + minutes/60).toPrecision(4)}</h2>
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	hours: selectHours,
	minutes: selectMinutes
})

const mapDispatchToProps = dispatch => ({
	updateHours: hours => dispatch(updateHours(hours)),
	updateMinutes: minutes => dispatch(updateMinutes(minutes))
})

export default connect(mapStateToProps, mapDispatchToProps)(Converter);