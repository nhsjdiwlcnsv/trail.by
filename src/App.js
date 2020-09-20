import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Trails from './screens/Trails';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import Error from './screens/Error';
import Navigation from './navigation/Navigation';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Navigation />
            <Switch>
              <Route path="/trails" component={Trails}/>
              <Route path="/" component={Home} exact/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
              <Route component={Error}/>
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;