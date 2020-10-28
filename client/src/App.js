import { theme, ThemeProvider } from "@chakra-ui/core";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/home";
import Projects from "./routes/projects";
import Contact from "./routes/contact";
import NavBar from "./components/navbar";
import NoMatch from "./routes/nomatch";

const customTheme = {
  ...theme,
  fonts: {
    heading:
      "Apple-System, Arial, Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', STXihei, sans-serif",
    body:
      "Apple-System, Arial, Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', STXihei, sans-serif",
    mono:
      "Apple-System, Arial, Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', STXihei, sans-serif",
  },
  colors: {
    ...theme.colors,
    black: {
      100: "#E6ECF4",
      200: "#CFD9E9",
      300: "#9DA9BD",
      400: "#616A7B",
      500: "#1A1D24",
      600: "#13161E",
      700: "#0D1019",
      800: "#080A14",
      900: "#040711",
    },
  },
};

function App() {
  return (
    <ThemeProvider theme={customTheme}>
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
    </ThemeProvider>
  );
}

export default App;
