import React from 'react';
import NewHabitForm from './NewHabitForm';
import './App.scss';
import './index.scss';
import BadHabits from './BadHabits';

class App extends React.Component {

  state = {
    badHabits: []
  }

  addBadHabit = (habit) => {
    habit.id = Math.random();
    let badHabits = [...this.state.badHabits, habit]
    this.setState({
      badHabits: badHabits
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Anti-Habit Tracker</h1>
        <h3>What bad habits did <i>you</i> indulge today?</h3>
        <NewHabitForm addBadHabit={this.addBadHabit} />
        <BadHabits badHabits={this.state.badHabits} />
      </div>
    );
  }
}

export default App;
