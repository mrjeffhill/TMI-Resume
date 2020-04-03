import * as React from "react";
import { AppData } from "./appdata";
import Skewl from "./skewl";

class Education extends React.Component {
  static contextType = AppData; // ***** access via this.context

  render() {
    const context = this.context;
    const skewls = context.resume.education;
    return (
      <React.Fragment>
        <section className="res-education res-editable" id="Education">
          <h2 className="note rr poly-wrap">Education</h2>
          <ul className="skewer">
            {skewls.map((skewl, index) => {
              return <Skewl key={index} id={index} skewl={skewl} />;
            })}
          </ul>
        </section>
      </React.Fragment>
    );
  }
}

export default Education;
