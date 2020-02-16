import React from 'react'
import NumberInput from '../NumberInput/NumberInput'

import './converter.scss'

class Converter extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			inputHours: null,
			inputMinutes: null,
			output: 0
		}
	}

   handleHours = (e) => {
		this.setState({inputHours: Number(e.target.value)}, () => this.updateOutput())
   }

   handleMinutes = (e) => {
		this.setState({inputMinutes: Number(e.target.value)},() => this.updateOutput())
	}

	updateOutput = () => {
		this.setState(state => {return{output: state.inputHours + (state.inputMinutes/60)}})
	}

	render() {
		return (
			<div className="converter">
				<NumberInput classname="number-in" handleHour={this.handleHours} handleMinute={this.handleMinutes} punc=":"/>
				<br/>
				<h2>{Number.parseFloat(this.state.output).toPrecision(3)}</h2>
			</div>
		)
	}
}

export default Converter;