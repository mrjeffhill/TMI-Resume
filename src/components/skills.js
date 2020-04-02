import React, { useState, useEffect } from "react";
import { AppData } from "./appdata";
import SectionTools from "./sectionTools";
import SkillTabs from "./skillTabs";
import helpers from "./helpers";

class Skills extends React.Component {
  static contextType = AppData;
  render() {
    const context = this.context;
    const skillCategories = context.resume.skills;

    return (
      <React.Fragment>
        <section className="res-skills res-editable" id="Skills">
          <h2 className="taped-b rr poly-wrap">Skills</h2>
          <ul className="">
            {Object.entries(skillCategories).map(([catName, catSkills], i) => {
              const skillTypeClass =
                "res-editable res-skills-" + helpers.classify(catName);
              return (
                <li className={skillTypeClass} key={i}>
                  <h3 className="tabs-title tabby tack rr">
                    <i className="inner"></i>
                    <span>{catName}:</span>
                    <SectionTools />
                  </h3>
                  <ul
                    data-type={catName}
                    className="taped-b tabs"
                    role="tablist"
                    data-radio="skillTabs"
                  >
                    <SkillTabs
                      key={i}
                      id={i}
                      skilltype={catName}
                      catSkills={catSkills}
                    />
                  </ul>
                </li>
              );
            })}
          </ul>
        </section>
      </React.Fragment>
    );
  }
}

export default Skills;
