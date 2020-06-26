import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Habit Tracker</h1>
        <form>
          <label>
            What did you do today?
          <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form> 
      </header>
    </div>
  );
}

export default App;
