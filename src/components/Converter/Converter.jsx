import React from 'react';
import NumberInput from '../NumberInput/NumberInput';

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
		this.setState({inputHours: Number(e.target.value)}, () => this.updateOutput());
   }

   handleMinutes = (e) => {
		this.setState({inputMinutes: Number(e.target.value)},() => this.updateOutput());
	}

	updateOutput = () => {
		this.setState(state => {return{output: state.inputHours + (state.inputMinutes/60)}});
	}

	render() {
		return (
			<div className="converter">
				<NumberInput classname="number-in" handleHour={this.handleHours} handleMinute={this.handleMinutes} punc=":"/>
				<br/>
				<h4>{this.state.output}</h4>
			</div>
		)
	}
}

export default Converter;