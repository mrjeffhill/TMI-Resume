import * as React from "react";
import { AppData } from "./appdata";
import Skills from "./skills";
import Recommendations from "./recommendations";
import Interests from "./interests";
import Doodles from "./doodles";

class Aside extends React.Component {
  static contextType = AppData; // ***** access via this.context
  render() {
    return (
      <React.Fragment>
        <aside>
          <Skills />
          <Recommendations />
          <Interests />
          <Doodles />
        </aside>
      </React.Fragment>
    );
  }
}

export default Aside;
