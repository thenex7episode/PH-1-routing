import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        This is App.js
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/people">People</Link>
        </nav>

        <Route exact path="/" render={() => <div className="route">Home</div>} />
        <Route path="/about" render={() => <div className="route">About</div>} />
        <Route path="/people" render={() => <div className="route">People</div>} />
      </div>
    );
  }
}

export default App;
