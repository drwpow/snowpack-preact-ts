import { h, FunctionalComponent } from "/web_modules/preact.js";
import HeadTag from "/web_modules/preact-head-tag.js";

const Home: FunctionalComponent = () => (
  <div>
    <HeadTag tag="title">Home Page</HeadTag>
    <h1>This is the home page!</h1>
  </div>
);

export default Home;
