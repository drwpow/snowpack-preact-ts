import { h } from "../../web_modules/preact.js";
import { Link } from "../../web_modules/preact-router.js";
import * as Styled from "./styles.js";

var Nav = function () {
  return h("nav", {
    css: Styled.Nav
  }, h("img", {
    src: "/static/dundermifflin.gif",
    alt: "Dunder Mifflin, Inc."
  }), h("ul", null, h("li", {
    css: Styled.NavItem
  }, h(Link, {
    href: "/"
  }, "Home")), h("li", {
    css: Styled.NavItem
  }, h(Link, {
    href: "/about"
  }, "About"))));
};

export default Nav;