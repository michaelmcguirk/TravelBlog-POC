import React, { Component } from 'react';
import BlogContainer from './BlogContainer';
import Welcome from './Welcome';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path="/Welcome" component={Welcome}/>
            <Route exact path="/Home" component={BlogContainer}/>
            <Route exact path="/About" component={BlogContainer}/>
          </Switch>
        </BrowserRouter>  
      </div>
    );
  }
}

export default App;
