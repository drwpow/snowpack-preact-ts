import { h } from "preact";
import Router from "preact-router";
import About from "./About";
import Home from "./Home";
import Nav from "./Nav";

const App: preact.FunctionalComponent = () => (
  <div>
    <Nav />
    <Router>
      <Home path="/" />
      <About path="/about" />
    </Router>
  </div>
);

export default App;
