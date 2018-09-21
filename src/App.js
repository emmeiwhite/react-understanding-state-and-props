import React, { Component } from 'react';

import Users from './components/Users'; 
import UserInput from './components/UserInput';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Users />
          {/* Independent Component UserInput */}

          <UserInput />
      </div>
    );
  }
}

export default App;
