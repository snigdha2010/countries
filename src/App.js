import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import CountryDetails from './component/CountryDetails/CountryDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = '/'>
            <Home/>
          </Route>
          <Route path ='/countries/:name'>
          <CountryDetails/>
          </Route>
        </Switch>
      </Router>
      



    </div>
  );
}

export default App;
