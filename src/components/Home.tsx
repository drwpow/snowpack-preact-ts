import { h, FunctionalComponent } from "/web_modules/preact.js";
import { Link } from "/web_modules/preact-router.js";

const r = { color: "red" };
const g = { color: "green" };

const Home: FunctionalComponent = () => (
  <div>
    <div className="center">
      <br />
      <h1>Under Construction</h1>
      <p>
        <img
          src="/static/dundermifflini.gif"
          width="350"
          alt="Dunder Mifflin"
        />
      </p>
      <br />
      <p>
        <img
          src="/static/under-construction.gif"
          alt="Dunder Mifflin is under construction"
        />
      </p>
      <h1>
        Coming <span style={r}>C</span>
        <span style={g}>h</span>
        <span style={r}>r</span>
        <span style={g}>i</span>
        <span style={r}>s</span>
        <span style={g}>t</span>
        <span style={r}>m</span>
        <span style={g}>a</span>
        <span style={r}>s</span> <span style={g}>2</span>
        <span style={r}>0</span>
        <span style={g}>0</span>
        <span style={r}>2</span>
        <span style={g}>!</span>
      </h1>
      <br />
      <p>
        <Link href="/meredith">
          <img src="/static/doctor.gif" alt="doctor" />
          Donate to the Michael Scott’s Dunder Mifflin Scranton Meredith Palmer
          Memorial Celebrity Rabies Awareness Pro-Am Fun Run Race For The Cure
        </Link>
      </p>
    </div>
  </div>
);

export default Home;
