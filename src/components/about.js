import * as React from "react";
import ReactDOM from "react-dom";
import { AppData } from "./appdata";

class About extends React.Component {
  static contextType = AppData; // ***** access via this.context

  state = {};
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  componentWillUpdate(nextProps, nextState) {}
  componentDidUpdate(prevProps, prevState) {}

  render() {
    //console.log(this.context.introVisible);
    const context = this.context;
    const resume = this.context.resume;
    const imagePath =
      process.env.PUBLIC_URL + "/assets/img/" + resume.personal.photo;

    const meActiveClass = context.meVisible
      ? "res-me full-view active"
      : "res-me full-view";

    return (
      <div className={meActiveClass}>
        <span className="rr">
          <img src={imagePath} />
        </span>
        <article
          className="pretty-scroll"
          dangerouslySetInnerHTML={{ __html: resume.personal.about }}
        ></article>
      </div>
    );
  }
}

export default About;
