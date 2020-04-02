import * as React from "react";
import { AppData } from "./appdata";

class Summary extends React.Component {
  static contextType = AppData; // ***** access via this.context

  render() {
    const context = this.context;
    return (
      <React.Fragment>
        <section className="res-summary res-editable" id="Summary">
          <h2 className="note rr poly-wrap">Summary</h2>

          <div className="sticky note-card rr">
            <h4 className="tack">
              <i className="inner"></i>
              <span className="can-edit">What I do:</span>
            </h4>
            <div
              className="note-card-text pretty-scroll can-edit"
              dangerouslySetInnerHTML={{ __html: context.resume.summary }}
            ></div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Summary;
