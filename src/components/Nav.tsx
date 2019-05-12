import { h } from "preact";
import { Link } from "preact-router";

const Nav: preact.FunctionalComponent = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
