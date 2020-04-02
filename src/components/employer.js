import * as React from "react";
import { AppData } from "./appdata";
import SectionTools from "./sectionTools";
import Gallery from "./gallery";
import helpers from "./helpers";

class Employer extends React.Component {
  static contextType = AppData; // ***** access via this.context

  render() {
    const context = this.context;
    const employer = this.props.employer;
    const empId = "employer-" + this.props.id;
    const offset = this.props.id * 80;
    const logoClass = "logo sprite-offset-" + offset + " rr";
    const logoData = "assets/img/logos/" + employer.logo;
    const linkTitle = "Open " + employer.name + " in a new tab";
    const details = employer.details;
    const skills = helpers.shuffle(employer.skills);
    const articleClass =
      "res-editable res-organization " + helpers.classify(employer.name);
    const gallery = employer.projects;

    return (
      <React.Fragment>
        <article className={articleClass} id={empId}>
          <SectionTools />
          <h3 className="org-title">
            Role: <span className="blank can-edit">{employer.title}</span>
            <i className="inner"></i>
          </h3>

          <h4 className="org-name">
            <span className={logoClass} data={logoData}></span>
            Org:{" "}
            <span className="blank">
              <a
                href={employer.url}
                data-title={linkTitle}
                target="_blank"
                className="org-url tooltip can-edit"
                rel="noopener noreferrer"
              >
                {employer.name}
              </a>
            </span>
          </h4>
          <address className="org-location can-edit">
            {employer.location}
          </address>
          <div className="org-dates">
            <time
              className="org-start can-edit"
              dangerouslySetInnerHTML={{
                __html: helpers.formatMonthYear(employer.start)
              }}
            ></time>
            <span> to </span>
            <time
              className="org-end can-edit"
              dangerouslySetInnerHTML={{
                __html: helpers.formatMonthYear(employer.end)
              }}
            ></time>
          </div>
          <span className="org-capacity">
            Capacity:
            <span className="blank can-edit">{employer.employment}</span>
          </span>
          <details className="org-details">
            <summary
              className="org-summary add-tack rr"
              onClick={e => {
                this.props.deetHandler(e);
              }}
            >
              <i className="fas fa-caret-up"></i>
              <i className="fas fa-caret-down"></i>
              <span className="show-toggle show-more">Show More</span>
              <span className="show-toggle show-less">Show Less</span>
            </summary>
            <div className="guts can-edit">
              <h5>About {employer.name}</h5>
              <div
                dangerouslySetInnerHTML={{ __html: employer.description }}
              ></div>

              <h5 className="org-highlights">
                Highlights &amp; Responsibilities
              </h5>
              <ul className="org-accomplishments custom-list">
                {details.map((detail, index) => {
                  return <li key={index}>{detail}</li>;
                })}
              </ul>

              <h5 className="org-skills">Skills, Tools...</h5>
              <ul className="org-skill-list werd-cloud">
                {skills.map((skill, index) => {
                  const weightClass = "ww-" + skill.weight;
                  return (
                    <li key={index} className={weightClass}>
                      {skill.name}
                    </li>
                  );
                })}
              </ul>

              <div className="gallery">
                <h5>Portfolio</h5>
                <Gallery gallery={gallery} />
              </div>
            </div>
          </details>
        </article>
      </React.Fragment>
    );
  }
}

export default Employer;
