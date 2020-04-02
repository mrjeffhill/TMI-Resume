import * as React from "react";
import { AppData } from "./appdata";
import Employer from "./employer";
import helpers from "./helpers";

class History extends React.Component {
  static contextType = AppData; // ***** access via this.context

  constructor(props) {
    super(props);
    this.state = {
      balls: "",
      empCount: 0,
      allDeets: [],
      openDeets: 0,
      toggleActive: false
    };

    this.toggleDetails = this.toggleDetails.bind(this);
    this.handleChildDeets = this.handleChildDeets.bind(this);
    this.heyBattaBatta = this.heyBattaBatta.bind(this);
  }

  componentDidMount() {
    const allDeets = document.getElementsByClassName("org-details");

    this.setState({
      allDeets: allDeets
    });
  }
  componentWillUpdate(nextProps, nextState) {}
  componentDidUpdate(prevProps, prevState) {}

  handleChildDeets(event) {
    // the event context comes from the Child

    let isOpen = event.target.closest("details").open;
    let deetsOpen = this.state.openDeets;
    if (isOpen) {
      this.setState({
        openDeets: this.state.openDeets - 1
      });
      deetsOpen--;
    } else {
      this.setState({
        openDeets: this.state.openDeets + 1
      });
      deetsOpen++;
    }
    deetsOpen > 0
      ? this.setState({
          toggleActive: true
        })
      : this.setState({
          toggleActive: false
        });

    this.heyBattaBatta();
  }

  toggleDetails(event) {
    event.preventDefault();
    let total = this.state.empCount;
    let opened = this.state.openDeets;
    let deets = this.state.allDeets;
    let toggleActive = this.state.toggleActive;
    if (toggleActive && opened !== 0) {
      for (let deet of deets) {
        deet.open = false;
      }
      this.setState({
        openDeets: 0,
        toggleActive: false
      });
    } else {
      for (let deet of deets) {
        deet.open = true;
      } //
      this.setState({
        openDeets: this.state.empCount,
        toggleActive: true
      });
    }

    this.heyBattaBatta();
  }

  heyBattaBatta() {
    const swingas = document.getElementsByTagName("time");
    for (let swinga of swingas) {
      swinga.classList.remove("swing");
      swinga.setAttribute(
        "style",
        "animation-delay: " + helpers.getRandom(1) / 2 + "s"
      );
      swinga.classList.add("swing");
    }
    setTimeout(function() {
      for (let swinga of swingas) {
        swinga.classList.remove("swing");
      }
    }, 5000);
  }

  render() {
    const context = this.context;
    const employerList = context.resume.history;
    let toggleClass = "toggle-all";
    this.state.openDeets > 0
      ? (toggleClass = "toggle-all active")
      : (toggleClass = "toggle-all");
    return (
      <React.Fragment>
        <section className="res-history" id="History">
          <h2 className="note toggle-history-deets rr">
            Professional History{" "}
            <span
              className={toggleClass}
              onClick={e => {
                this.toggleDetails(e);
              }}
            ></span>
          </h2>
          {employerList.map((employer, index) => {
            this.state.empCount = index + 1;
            return (
              <Employer
                key={index}
                id={index}
                employer={employer}
                deetHandler={e => {
                  this.handleChildDeets(e);
                }}
              />
            );
          })}
        </section>
      </React.Fragment>
    );
  }
}

export default History;
