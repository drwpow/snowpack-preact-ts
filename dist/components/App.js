import { h } from "../web_modules/preact.js";
import Router from "../web_modules/preact-router.js";
import About from "./About.js";
import Home from "./Home.js";
import Nav from "./Nav.js";

var App = function () {
  return h("div", null, h(Nav, null), h(Router, null, h(Home, {
    path: "/"
  }), h(About, {
    path: "/about"
  })));
};

export default App;