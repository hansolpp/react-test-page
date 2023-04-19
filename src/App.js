import React from "react";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="hello">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie/:movieId">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
