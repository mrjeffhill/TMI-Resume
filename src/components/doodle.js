import * as React from "react";
import { AppData } from "./appdata";
import helpers from "./helpers";

class Doodle extends React.Component {
  static contextType = AppData; // ***** access via this.context
  render() {
    const context = this.context;
    const doodle = this.props.doodle;
    const thumbSrc =
      doodle.thumb !== ""
        ? process.env.PUBLIC_URL + "/assets/img/" + doodle.thumb
        : process.env.PUBLIC_URL + "/assets/img/missing.png";

    return (
      <React.Fragment>
        <li className="rr taped-b">
          <a href={doodle.url} target="_blank">
            {doodle.title}
          </a>
          <img src={thumbSrc} alt={doodle.title} />
          <p>{doodle.text}</p>
        </li>
      </React.Fragment>
    );
  }
}
export default Doodle;
