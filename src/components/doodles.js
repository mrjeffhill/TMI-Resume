import * as React from "react";
import { AppData } from "./appdata";
import Doodle from "./doodle";
import helpers from "./helpers";

class Doodles extends React.Component {
  static contextType = AppData; // ***** access via this.context

  render() {
    const context = this.context;
    const doodles = context.resume.doodles.items;
    //console.log(doodles);

    return (
      <React.Fragment>
        <section className="res-doodles res-editable" id="Doodles">
          <h2 className="note rr poly-wrap">Doodles</h2>
          <ul className="skewer">
            {doodles.map((doodle, index) => {
              return <Doodle key={index} id={index} doodle={doodle} />;
            })}
          </ul>
        </section>
      </React.Fragment>
    );
  }
}
export default Doodles;
