import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import People from './People/People';
import FAQ from './About/FAQ/FAQ';
import Company from './About/Company/Company';
import Character from './Character/Character';

const NotFound = () => <div>Not found 404</div>

class App extends Component {
  render() {
    return (
      <div>
        This is App.js
        <nav>
          <NavLink exact activeClassName="active-link" to="/">Home</NavLink>
          <NavLink activeClassName="active-link" to="/people">People</NavLink>
          <NavLink activeClassName="active-link" to="/about">About</NavLink>
        </nav>
        <Switch>
          <Route path="/about" render={() => {
            return (
              <About>
                <Route path="/about/faq" component={FAQ} />
                <Route path="/about/company" component={Company} />
              </About>
            )
          }} />
          <Route exact path="/people" component={People} />
          <Route path="/people/:personId" component={Character} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
