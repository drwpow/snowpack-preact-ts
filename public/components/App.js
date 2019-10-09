import { h } from "/web_modules/preact.js";
import Router from "/web_modules/preact-router.js";
import Home from "./Home.js";
import Meredith from "./Meredith.js";
var App = function () { return (h("div", null,
    h(Router, null,
        h(Home, { path: "/" }),
        h(Meredith, { path: "/meredith" })))); };
export default App;
//# sourceMappingURL=App.js.map