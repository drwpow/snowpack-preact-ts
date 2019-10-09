import { h, render } from "/web_modules/preact.js";
import App from "./components/App.js";
import css from "/static/app.min.css";
document.styleSheets.push(css);
var appMount = document.querySelector("#app");
if (appMount)
    render(h(App, null), appMount);
export default App;
//# sourceMappingURL=index.js.map