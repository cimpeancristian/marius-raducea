import './App.css';
import React from "react";
import Home from './Home/Home';
import Generate from './Generate/Generare';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/generare">Generare</Link>
            </li>
          
          </ul>
        </nav>

        <Switch>
          <Route path="/generare">
            <Generate />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>);
}

export default App;
