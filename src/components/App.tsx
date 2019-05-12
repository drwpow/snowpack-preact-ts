import { h } from "preact";
import Router from "preact-router";
import Home from "./Home";
import About from "./About";

const App: preact.FunctionalComponent = () => (
  <Router>
    <Home path="/" />
    <About path="/about" />
  </Router>
);

export default App;
