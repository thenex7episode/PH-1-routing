import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        This is App.js
        <Route path="/" render={() => <div className="route">Home</div>} />
        <Route path="/about" render={() => <div className="route">About</div>} />
        <Route path="/people" render={() => <div className="route">People</div>} />
      </div>
    );
  }
}

export default App;
