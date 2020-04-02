import * as React from "react";
import { AppData } from "./appdata";
import SkillTab from "./skillTab";

class SkillTabs extends React.Component {
  static contextType = AppData;
  render() {
    const context = this.context;

    const tabtypes = context.tabTypes;
    const skilllist = this.props.catSkills;
    const listtype = this.props.skilltype;
    const radioGroupName = "skillTabs" + this.props.id;

    // This is how to build a sequential counter in React for nested mappings.
    // Problem: Increment a counter from a child that lives in the parent for unique sequential HTML attributes.
    // We can't do this in React, so here's how to get around that.
    // STEP 1: Establish increment terms. Pay attention here!
    let uniqueId = this.props.id; // Will be zero on first parent iteration.
    let idStep = tabtypes.length; // # of parent iterations
    if (uniqueId !== 0) {
      // happens after the first iteration from parent
      uniqueId = uniqueId * idStep;
    }

    return (
      <React.Fragment>
        {tabtypes.map((tabtype, index) => {
          // STEP 2: increment
          uniqueId = uniqueId + 1;
          //console.log("Unique sequential count: " + uniqueId);

          let tabsClass = "res-skill-" + listtype + " " + tabtype;
          let radioId = "tab" + uniqueId;
          let isChecked = tabtype === "info";
          let tabIcon = "fas fa-" + context.tabIcons[index];
          let tabContentId = "tab-content" + uniqueId;

          return (
            <li key={index} className={tabsClass}>
              <input
                type="radio"
                name={radioGroupName}
                id={radioId}
                defaultChecked={isChecked}
                tabIndex={uniqueId}
              />

              <label htmlFor={radioId} tabIndex={uniqueId}>
                <i className={tabIcon}></i>
              </label>
              <div
                id={tabContentId}
                className="tab-content sketchy-border lined thin"
                data-display={listtype}
              >
                <SkillTab
                  key={index}
                  id={index}
                  skilldata={skilllist}
                  tabtype={tabtype}
                />
              </div>
            </li>
          );
        })}
      </React.Fragment>
    );
  }
}

export default SkillTabs;
