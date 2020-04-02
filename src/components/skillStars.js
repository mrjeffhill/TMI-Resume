import * as React from "react";
import { AppData } from "./appdata";
import helpers from "./helpers";

class SkillStars extends React.Component {
  static contextType = AppData;
  render() {
    const context = this.context;
    const tabdata = this.props.tabdata;
    return (
      <dl className="galaxy">
        {tabdata.map((data, index) => {
          let stars = helpers.twinkleTwinkle(data.prof, 5);
          return (
            <React.Fragment key={index}>
              <dt className="res-skill">{data.name}</dt>
              <dd className="res-years">{data.years}</dd>
              <dd
                className="res-score"
                data-score={data.prof}
                dangerouslySetInnerHTML={{ __html: stars }}
              ></dd>
            </React.Fragment>
          );
        })}
      </dl>
    );
  }
}

export default SkillStars;
