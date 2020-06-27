import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/home";
import Projects from "./routes/projects";
import Contact from "./routes/contact";
import NavBar from "./components/navbar";
import NoMatch from "./routes/nomatch";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
