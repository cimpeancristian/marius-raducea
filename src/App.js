import React, {useState} from 'react';

import './App.css';

import Home from './Home/Home';
import Generate from './Generate/Generare';
import AddDates from './AddDates/AddDates';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () => {
  const [dates, setDates] = useState({});
  console.log(Object.keys(dates).length);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/adauga">Adauga Date</Link>
            </li>
            {Object.keys(dates).length !== 0 && (
              <li>
                <Link to="/generare">Generare</Link>
              </li>)}
          </ul>
        </nav>

        <Switch>
          <Route path="/generare">
            <Generate dates={dates} />
          </Route>
          <Route path="/adauga">
            <AddDates setDates={setDates} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>);
}

export default App;
