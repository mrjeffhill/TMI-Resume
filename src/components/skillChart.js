import * as React from "react";
import { AppData } from "./appdata";

class SkillChart extends React.Component {
  static contextType = AppData;
  render() {
    const context = this.context;
    const tabdata = this.props.tabdata;
    return (
      <React.Fragment>
        <div className="barchart-wrapper">
          <div className="barchart-prof-col">
            <div className="barchart-prof">
              <span className="barchart-prof-text">10</span>
            </div>
            <div className="barchart-prof">
              <span className="barchart-prof-text">9</span>
            </div>
            <div className="barchart-prof">
              <span className="barchart-prof-text">8</span>
            </div>
            <div className="barchart-prof">
              <span className="barchart-prof-text">7</span>
            </div>
            <div className="barchart-prof">
              <span className="barchart-prof-text">6</span>
            </div>
            <div className="barchart-prof">
              <span className="barchart-prof-text">5</span>
            </div>
            <div className="barchart-prof">
              <span className="barchart-prof-text">4</span>
            </div>
            <div className="barchart-prof">
              <span className="barchart-prof-text">3</span>
            </div>
            <div className="barchart-prof">
              <span className="barchart-prof-text">2</span>
            </div>
            <div className="barchart-prof">
              <span className="barchart-prof-text">1</span>
            </div>
          </div>
          <div className="barchart-container">
            <div className="barchart">
              {tabdata.map((data, index) => {
                return (
                  <div key={index} className="barchart-col">
                    <div className="barchart-bar" data-prof={data.prof}></div>
                    <div className="barchart-footer">{data.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SkillChart;
