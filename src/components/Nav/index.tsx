import { h } from "preact";
import { Link } from "preact-router";
import * as Styled from "./styles";

const Nav: preact.FunctionalComponent = () => (
  <nav css={Styled.Nav}>
    <img src="/static/dundermifflin.gif" alt="Dunder Mifflin, Inc." />
    <ul>
      <li css={Styled.NavItem}>
        <Link href="/">Home</Link>
      </li>
      <li css={Styled.NavItem}>
        <Link href="/about">About</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
