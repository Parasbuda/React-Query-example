import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import SuperHeroes from "./Pages/SuperHeroes";
import RQSuperHeroes from "./Pages/RQSuperHeroes";
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
              <Link to="/super-heroes">Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to="/rq-super-heroes">RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/super-heroes">
            <SuperHeroes />
          </Route>
          <Route path="/rq-super-heroes">
            <RQSuperHeroes />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
