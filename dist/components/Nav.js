import { h } from "/web_modules/preact.js";
import { Link } from "/web_modules/preact-router.js";
var Nav = function () { return (h("nav", { className: "nav" },
    h("img", { src: "/static/dundermifflin.gif", alt: "Dunder Mifflin, Inc." }),
    h("ul", null,
        h("li", { className: "nav-item" },
            h(Link, { href: "/" }, "Home")),
        h("li", { className: "nav-item" },
            h(Link, { href: "/about" }, "About"))))); };
export default Nav;
//# sourceMappingURL=Nav.js.map