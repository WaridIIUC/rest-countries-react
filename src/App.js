
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import CountryDetails from './components/CountryDetails/CountryDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path = "/home">
          <Home></Home>
        </Route>

        <Route path = "/country/:countryName">
          <CountryDetails></CountryDetails>
        </Route>

        <Route exact path = "/">
          <Home></Home>
        </Route>

        <Route path = "*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
