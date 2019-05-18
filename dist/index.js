import { h, render } from "./web_modules/preact.js";
import App from "./components/App/index.js";
var appMount = document.querySelector("#app");
if (appMount) render(h(App, null), appMount);
export default App;