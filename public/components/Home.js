import { h } from "/web_modules/preact.js";
import { Link } from "/web_modules/preact-router.js";
var r = { color: "red" };
var g = { color: "green" };
var Home = function () { return (h("div", null,
    h("div", { className: "center" },
        h("br", null),
        h("h1", null, "Under Construction"),
        h("p", null,
            h("img", { src: "/static/dundermifflini.gif", width: "350", alt: "Dunder Mifflin" })),
        h("br", null),
        h("p", null,
            h("img", { src: "/static/under-construction.gif", alt: "Dunder Mifflin is under construction" })),
        h("h1", null,
            "Coming ",
            h("span", { style: r }, "C"),
            h("span", { style: g }, "h"),
            h("span", { style: r }, "r"),
            h("span", { style: g }, "i"),
            h("span", { style: r }, "s"),
            h("span", { style: g }, "t"),
            h("span", { style: r }, "m"),
            h("span", { style: g }, "a"),
            h("span", { style: r }, "s"),
            " ",
            h("span", { style: g }, "2"),
            h("span", { style: r }, "0"),
            h("span", { style: g }, "0"),
            h("span", { style: r }, "2"),
            h("span", { style: g }, "!")),
        h("br", null),
        h("p", null,
            h(Link, { href: "/meredith" },
                h("img", { src: "/static/doctor.gif", alt: "doctor" }),
                "Donate to the Michael Scott\u2019s Dunder Mifflin Scranton Meredith Palmer Memorial Celebrity Rabies Awareness Pro-Am Fun Run Race For The Cure"))))); };
export default Home;
//# sourceMappingURL=Home.js.map