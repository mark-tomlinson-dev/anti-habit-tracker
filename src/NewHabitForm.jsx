import React from 'react';

class NewHabitForm extends React.Component {
	state = {
		userInput: ''
	};

	handleChange = (e) => {
		this.setState({ userInput: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addBadHabit(this.state);
		this.setState({ userInput: '' });
	};

	render() {
		return (
			<form className="inputter" onSubmit={this.handleSubmit}>
				<input
					className="input-box"
					type="text"
					value={this.state.userInput}
					onChange={this.handleChange}
					placeholder=""
				/>
				<input className="input-button" type="submit" value="submit" />
			</form>
		);
	}
}

export default NewHabitForm;
