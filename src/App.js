import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import Welcome from "./Welcome";
import About from "./About";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Switch>
            <Route path="/" component={Welcome} exact></Route>
            <Route path="/about" component={About} exact></Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
