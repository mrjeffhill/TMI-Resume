import * as React from "react";
import { AppData } from "./appdata";
import Objective from "./objective";
import Summary from "./summary";
import History from "./history";
import Education from "./education";

class Primary extends React.Component {
  static contextType = AppData; // ***** access via this.context
  render() {
    return (
      <React.Fragment>
        <Objective />
        <Summary />
        <History />
        <Education />
      </React.Fragment>
    );
  }
}

export default Primary;
