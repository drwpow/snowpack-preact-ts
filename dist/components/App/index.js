var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

import { h } from "../../web_modules/preact.js";
import Router from "../../web_modules/preact-router.js";
import { injectGlobal } from "../../web_modules/preact-emotion.js";
import About from "../About/index.js";
import Home from "../Home/index.js";
import Nav from "../Nav/index.js";
injectGlobal(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  body {\n    background: url(\"/static/paper_summer.gif\");\n    margin: 0;\n    font-family: \"Times New Roman\", Times, serif;\n  }\n"], ["\n  body {\n    background: url(\"/static/paper_summer.gif\");\n    margin: 0;\n    font-family: \"Times New Roman\", Times, serif;\n  }\n"])));

var App = function () {
  return h("div", null, h(Nav, null), h(Router, null, h(Home, {
    path: "/"
  }), h(About, {
    path: "/about"
  })));
};

export default App;
var templateObject_1;