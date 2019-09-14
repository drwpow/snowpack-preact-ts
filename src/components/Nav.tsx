import { h, FunctionalComponent } from "/web_modules/preact.js";
import { Link } from "/web_modules/preact-router.js";

const Nav: FunctionalComponent = () => (
  <nav className="nav">
    <img src="/static/dundermifflin.gif" alt="Dunder Mifflin, Inc." />
    <ul>
      <li className="nav-item">
        <Link href="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link href="/about">About</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
