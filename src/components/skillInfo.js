import * as React from "react";
import { AppData } from "./appdata";

class SkillInfo extends React.Component {
  static contextType = AppData;
  render() {
    const context = this.context;
    const tabdata = this.props.tabdata;
    return (
      <React.Fragment>
        {tabdata.map((data, index) => {
          return (
            <p key={index} className="can-edit">
              <strong>
                {data.name} ( {data.years} year{data.years > 1 ? "s" : ""} ):
              </strong>{" "}
              <span dangerouslySetInnerHTML={{ __html: data.info }}></span>
            </p>
          );
        })}
      </React.Fragment>
    );
  }
}

export default SkillInfo;
