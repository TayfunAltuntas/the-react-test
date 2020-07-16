import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Accueil from './Accueil';
import Infos from './Infos';
import Header from './Header';
import Instructions from './Instructions';
import Formulaire from "./Formulaire";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/infos">About</Link>
            </li>
            <li>
              <Link to="/forms">Forms</Link>
            </li>
          </ul>
        </nav>
      <Header/>
      <Instructions/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/forms">
            <Formulaire />
          </Route>
          <Route path="/infos">
            <Infos />
          </Route>
          <Route path="/">
            <Accueil />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}