import React from 'react';
import './App.scss';
import './index.scss';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleChange = e => {
    this.setState({value: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.value);
    this.setState({value: '' });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Anti-Habit Tracker</h1>
          <h3>What bad habits did <i>you</i> indulge today?</h3>
          <form className="inputter" onSubmit={this.handleSubmit}>
            <input className="input-box" type="text" value={this.state.value} onChange={this.handleChange} placeholder=""/>
            <input className="input-button" type="submit" value="submit" />
          </form>        
        </header>
      </div>
    );
  }
}

export default App;
