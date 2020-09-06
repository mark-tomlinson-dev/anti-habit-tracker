import React from 'react';

const BadHabits = ({ badHabits }) => {
	const HabitsList = badHabits.map((habit) => {
		return (
			<div key={habit.id}>
				<p>{habit.userInput}</p>
			</div>
		);
	});

	return <div>{HabitsList}</div>;
};

export default BadHabits;
