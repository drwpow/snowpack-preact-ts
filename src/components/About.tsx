import { h, FunctionalComponent } from "/web_modules/preact.js";
import HeadTag from "/web_modules/preact-head-tag.js";

const About: FunctionalComponent = () => (
  <div>
    <HeadTag tag="title">About Page</HeadTag>
    <h1>This is the about page!</h1>
  </div>
);

export default About;
