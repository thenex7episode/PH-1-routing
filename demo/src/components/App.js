import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import router from '../router';

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

        {router}
      </div>
    );
  }
}

export default App;
