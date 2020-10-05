import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/home/Home'
import Browse from './components/browse/Browse'
import ShowDetails from './components/show-details/ShowDetails'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:category" component={Browse} />
        <Route exact path="/:name" component={ShowDetails} />
      </Switch>
    </Router>
  );
}

export default App;
