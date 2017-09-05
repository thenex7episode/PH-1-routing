import React, { Component } from 'react';
import router from '../router.js';


class App extends Component {
  render() {
    return (
      <div>
        {/* before all the routing was in this file... we moved it to router.js for organization */}
          {router}
      </div>
    );
  }
}

export default App;
