import React, { useState, useEffect } from "react";
import { AppData } from "./appdata";

class Recommendations extends React.Component {
  static contextType = AppData; // ***** access via this.context

  state = {};
  constructor(props) {
    super(props);
    this.state = { autoPlay: true };

    this.playToggle = this.playToggle.bind(this);
  }

  playToggle(event) {
    this.setState({ autoPlay: !this.state.autoplay });
    event.target.closest("section").classList.toggle("paused");
    // const opener = event.target.closest("section");
  }

  render() {
    const context = this.context;
    const kudosList = context.resume.recommendations;

    const slideClass =
      context.currentTheme === "agile"
        ? "res-blurbs res-editable auto-slides"
        : "res-blurbs res-editable";

    return (
      <React.Fragment>
        <section
          className={slideClass}
          id="Blurbs"
          onClick={e => {
            this.playToggle(e);
          }}
        >
          <h2 className="note rr poly-wrap">Recommendations</h2>
          <ul className="add-tack">
            {kudosList.map((kudo, index) => {
              const napClass = "rr nap" + index;
              return (
                <li key={index} className={napClass}>
                  <blockquote>
                    <p className="can-edit">{kudo.text}</p>
                    <cite className="can-edit">
                      <strong
                        dangerouslySetInnerHTML={{ __html: kudo.name }}
                      ></strong>
                      <br />
                      {kudo.title}
                      <br />
                      {kudo.company}
                    </cite>
                  </blockquote>
                </li>
              );
            })}
          </ul>
        </section>
      </React.Fragment>
    );
  }
}

export default Recommendations;
