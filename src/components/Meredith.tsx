import { h, FunctionalComponent } from "/web_modules/preact.js";
import { Link } from "/web_modules/preact-router.js";

const About: FunctionalComponent = () => (
  <div className="bgBlue center comicsans">
    <div className="wrapper">
      <p>
        <img
          src="/static/michaelscottsdundermifflinscrantonmeredithpalmermemorialcelebrityrabiesawarenessproamfunrunraceforthecure.gif"
          alt="Michael Scott’s Dunder Mifflin
        Scranton Meredith Palmer Memorial Celebrity Rabies Awareness Pro-Am Fun
        Run Race For The Cure"
        />
      </p>
      <p>
        Did you know rabies kills <span className="strike">three</span> four
        people every year? It is truly the SILENT KILLER.
        <br />
        <img src="/static/grim_reaper.gif" alt="grim reaper" />
      </p>
      <p>
        <img src="/static/running_gold.gif" alt="running" />
        <img src="/static/running_gold.gif" alt="running" />
        <img src="/static/running_gold.gif" alt="running" />
        <img src="/static/running_gold.gif" alt="running" />
        <img src="/static/running_gold.gif" alt="running" />
        <img src="/static/running_gold.gif" alt="running" />
        <img src="/static/running_gold.gif" alt="running" />
        <img src="/static/running_gold.gif" alt="running" />
        <img src="/static/running_gold.gif" alt="running" />
        <img src="/static/running_gold.gif" alt="running" />
        <img src="/static/running_gold.gif" alt="running" />
        <img src="/static/running_gold.gif" alt="running" />
        <img src="/static/running_gold.gif" alt="running" />
      </p>
      <p>
        Join us on Saturday for the 1st annual Michael Scott’s Dunder Mifflin
        Scranton Meredith Palmer Memorial Celebrity Rabies Awareness Pro-Am Fun
        Run Race For The Cure. And together we can stop rabies together.
      </p>
      <p>
        <h2>Raising money for Science!!!!!1</h2>
        <figure>
          <img src="/static/check.gif" alt="check for science" />
        </figure>
      </p>
      <p>
        <img src="/static/running_gold.gif" alt="running" />
        <img src="/static/running_gold.gif" alt="running" />
        <img src="/static/running_gold.gif" alt="running" />
        <img src="/static/running_gold.gif" alt="running" />
        <img src="/static/running_gold.gif" alt="running" />
        <img src="/static/running_gold.gif" alt="running" />
        <img src="/static/running_gold.gif" alt="running" />
        <img src="/static/running_gold.gif" alt="running" />
        <img src="/static/running_gold.gif" alt="running" />
        <img src="/static/running_gold.gif" alt="running" />
        <img src="/static/running_gold.gif" alt="running" />
        <img src="/static/running_gold.gif" alt="running" />
        <img src="/static/running_gold.gif" alt="running" />
      </p>
      <p>
        Fight to end rabies. Every <span className="strike">mile</span>{" "}
        kilometer matters in the fight for our lives. For our freedom. Against
        the rabid oppressor, death itself. Free Meredith Palmer from her cage of
        disease and let her run wild like the free animal she is. Won’t you join
        us?
      </p>
      <h2>Sponsors</h2>
      <ul>
        <li>Pizza by Alfredo</li>
        <li>Alfredo’s Pizza</li>
        <li>Giovanni’s</li>
      </ul>
      <p>
        <figure>
          <img
            src="/static/carboload.gif"
            alt="Fun run brought to you by Giovanni’s alfredo"
          />
        </figure>
      </p>
      <p>
        <Link href="/">
          <img src="/static/home20.gif" alt="Back Home" />
        </Link>
      </p>
    </div>
  </div>
);

export default About;
