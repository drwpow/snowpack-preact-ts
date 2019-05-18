import { h } from "preact";
import Router from "preact-router";
import { injectGlobal } from "preact-emotion";
import About from "../About";
import Home from "../Home";
import Nav from "../Nav";

injectGlobal`
  body {
    background: url("/static/paper_summer.gif");
    margin: 0;
    font-family: "Times New Roman", Times, serif;
  }
`;

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
