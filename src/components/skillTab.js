import * as React from "react";
import { AppData } from "./appdata";
import SkillTable from "./skillTable";
import SkillChart from "./skillChart";
import SkillStars from "./skillStars";
import SkillInfo from "./skillInfo";

class SkillTab extends React.Component {
  static contextType = AppData;
  render() {
    const context = this.context;
    const tabtype = this.props.tabtype;
    const tabdata = this.props.skilldata;
    const chartUI = "chart...";
    const tableUI = "table...";
    const starsUI = "stars...";
    const infoUI = "info...";
    //console.log(tabdata);

    switch (tabtype) {
      case "chart":
        return <SkillChart tabdata={tabdata} />;
      case "table":
        return <SkillTable tabdata={tabdata} />;
      case "stars":
        return <SkillStars tabdata={tabdata} />;
      case "info":
        return <SkillInfo tabdata={tabdata} />;
      default:
        return null;
    }
  }
}

export default SkillTab;
