import * as React from "react";
import { AppData } from "./appdata";

class Objective extends React.Component {
  static contextType = AppData; // ***** access via this.context

  render() {
    const context = this.context;
    return (
      <React.Fragment>
        <section className="res-objective res-editable" id="Objective">
          <h2 className="note rr poly-wrap poly-0">Objective</h2>

          <div className="sticky note-card rr">
            <h4 className="tack">
              <i className="inner"></i>
              <span className="can-edit">Or, why I do this:</span>
            </h4>
            <div
              className="note-card-text pretty-scroll can-edit"
              dangerouslySetInnerHTML={{ __html: context.resume.objective }}
            ></div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Objective;
