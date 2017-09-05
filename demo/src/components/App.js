import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home/Home.js';
import About from './About/About.js';
import FAQ from './About/FAQ/FAQ.js';
import Company from './About/Company/Company.js';
import People from './People/People.js';
import Character from './Character/Character.js';

class App extends Component {
  render() {
    return (
      <div>
          <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/people'>People</Link>
            <Route exact path='/' component={Home}/>
            <Route path='/about' render={() => {
              return (
                <About>
                  <Switch>
                    <Route path='/about/faq' component={FAQ}/>
                    <Route path='/about/company' component={Company}/>
                  </Switch>
                </About>
              )
            }} />
            <Switch>
              <Route path='/people/:id' component={Character}/>
              <Route path='/people' component={People}/>
            </Switch>
          </div>
      </div>
    );
  }
}

export default App;
