import * as React from "react";
import { AppData } from "./appdata";

class SkillTable extends React.Component {
  static contextType = AppData;
  render() {
    const context = this.context;

    const tabdata = this.props.tabdata;
    return (
      <table>
        <thead>
          <tr>
            <th>Skill</th>
            <th>Years</th>
            <th>Proficiency n/10</th>
          </tr>
        </thead>
        <tbody>
          {tabdata.map((data, index) => {
            return (
              <tr key={index}>
                <td className="can-edit">{data.name}</td>
                <td className="can-edit">{data.years}</td>
                <td className="can-edit">{data.prof}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot></tfoot>
      </table>
    );
  }
}

export default SkillTable;
