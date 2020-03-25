import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";

import CreateBook from "./Components/CreateBook/CreateBook";
import { Books } from "./Components/Books/Books";

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/create" component={CreateBook} />
        <Route
          path="/edit/:id"
          render={props => <CreateBook {...props} edit={true} />}
        />
        <Route exact path="/list" component={Books} />
      </Switch>
    </Router>
  );
}

export default App;
