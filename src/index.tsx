import { h, render } from "/web_modules/preact.js";
import App from "./components/App.js";
import css from "/static/app.min.css";

(document.styleSheets as any).push(css);

const appMount = document.querySelector("#app");
if (appMount) render(<App />, appMount);

export default App;
