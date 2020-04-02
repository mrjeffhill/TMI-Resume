import * as React from "react";
import { AppData } from "./appdata";
import Aside from "./aside";
import Footer from "./footer";
import Primary from "./primary";

class Main extends React.Component {
  static contextType = AppData; // ***** access via this.context
  render() {
    // main onClick $('.contact-info').removeClass('active');
    return (
      <React.Fragment>
        <main>
          <Aside />
          <div className="main-content">
            <Primary />
          </div>
          <Footer />
        </main>
      </React.Fragment>
    );
  }
}

export default Main;
