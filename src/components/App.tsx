import { h, FunctionalComponent } from "/web_modules/preact.js";
import Router from "/web_modules/preact-router.js";
import About from "./About.js";
import Home from "./Home.js";
import Nav from "./Nav.js";

const App: FunctionalComponent = () => (
  <div>
    <Nav />
    <Router>
      <Home path="/" />
      <About path="/about" />
    </Router>
  </div>
);

export default App;
