import { h, FunctionalComponent } from "/web_modules/preact.js";
import Router from "/web_modules/preact-router.js";
import Home from "./Home.js";
import Meredith from "./Meredith.js";

const App: FunctionalComponent = () => (
  <div>
    <Router>
      <Home path="/" />
      <Meredith path="/meredith" />
    </Router>
  </div>
);

export default App;
