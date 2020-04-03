import * as React from "react";
import { AppData } from "./appdata";

class Skewl extends React.Component {
  static contextType = AppData; // ***** access via this.context
  render() {
    const context = this.context;
    const skewl = this.props.skewl;
    const logoPath =
      skewl.logo !== ""
        ? process.env.PUBLIC_URL + "/assets/img/logos/" + skewl.logo
        : process.env.PUBLIC_URL + "/assets/img/logos/missing.png";

    return (
      <React.Fragment>
        <li className="rr add-tack">
          <span className="wrap">
            <h2>
              {skewl.name} <em>({skewl.type})</em>
            </h2>
            <img src={logoPath} alt={skewl.name} />
            <dl className="pretty-scroll">
              <dt>Location: </dt>
              <dd>{skewl.location}</dd>
              <dt>Dates: </dt>
              <dd>
                {skewl.start} - {skewl.end}
              </dd>
              <dt>Degree: </dt>
              <dd>{skewl.degree}</dd>
              <dt>Awards: </dt>
              <dd>{skewl.awards}</dd>
              <dt>Detail: </dt>
              <dd dangerouslySetInnerHTML={{ __html: skewl.description }}></dd>
            </dl>
          </span>
        </li>
      </React.Fragment>
    );
  }
}

export default Skewl;
