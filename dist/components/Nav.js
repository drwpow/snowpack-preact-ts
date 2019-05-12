import { h } from "../web_modules/preact.js";
import { Link } from "../web_modules/preact-router.js";

var Nav = function () {
  return h("nav", null, h("ul", null, h("li", null, h(Link, {
    href: "/"
  }, "Home")), h("li", null, h(Link, {
    href: "/about"
  }, "About"))));
};

export default Nav;