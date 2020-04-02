import * as React from "react";
import ReactDOM from "react-dom";
import { AppData } from "./appdata";
import Condensificator from "./condensificator";
import IntroContent from "./introContent";

class Intro extends React.Component {
  static contextType = AppData; // ***** access via this.context

  state = {};
  constructor(props) {
    super(props);
    this.state = {
      introVisible: false,
      steps: [],
      headers: [],
      totalSteps: 0,
      currentStep: 0,
      nextStepper: null,
      previousStepper: null,
      statusEl: null,
      statusText: "loading...",
      nextTextEl: null,
      prevTextEl: null,
      nextText: "",
      previousText: ""
    };

    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
  }

  componentDidMount() {
    const widget = ReactDOM.findDOMNode(this);
    const controls = widget.getElementsByClassName("step-o-matic")[0];
    const allSteps = widget.getElementsByClassName("step");
    const allHeaders = widget.getElementsByClassName("step-title");
    const nextEl = controls.getElementsByClassName("step-next")[0];
    const prevEl = controls.getElementsByClassName("step-prev")[0];
    const nextTextEl = nextEl.querySelector("i");
    const prevTextEl = prevEl.querySelector("i");
    const statusEl = controls.getElementsByClassName("status")[0];
    let statusText = this.state.currentStep + 1 + " / " + allSteps.length;
    //console.log(allHeaders[0]);
    this.setState({
      totalSteps: allSteps.length,
      steps: allSteps,
      headers: allHeaders,
      nextText: allHeaders[1].innerText,
      nextStepper: nextEl,
      previousStepper: prevEl,
      statusEl: statusEl,
      statusText: statusText,
      nextTextEl: nextTextEl,
      prevTextEl: prevTextEl
    });
    //this.updateStatus();
  }
  componentWillUpdate(nextProps, nextState) {}
  componentDidUpdate(prevProps, prevState) {}

  nextStep(event) {
    event.preventDefault();
    let isLast = this.state.currentStep + 1 === this.state.totalSteps;
    //console.log("isLast?: " + isLast);
    if (!isLast) {
      let toStep = this.state.currentStep + 1;
      //console.log("go to step: " + toStep);
      this.state.steps[this.state.currentStep].classList.remove("current");
      this.state.steps[toStep].classList.add("current");
      this.setState({
        currentStep: toStep
      });
      this.updateStatus(toStep);
    }
  }
  previousStep(event) {
    event.preventDefault();
    let isFirst = this.state.currentStep + 1 === 1;
    //console.log("isFirst?: " + isFirst);
    if (!isFirst) {
      let toStep = this.state.currentStep - 1;
      //console.log("go to step: " + toStep);
      this.state.steps[this.state.currentStep].classList.remove("current");
      this.state.steps[toStep].classList.add("current");
      this.setState({
        currentStep: toStep
      });
      this.updateStatus(toStep);
    }
  }
  updateStatus(toStep) {
    //let currentStep = this.state.currentStep;
    let currentStep = toStep;
    //console.log("updating status for step: " + currentStep);
    let isLast = currentStep + 1 === this.state.totalSteps;
    let isFirst = currentStep + 1 === 1;
    let nextText,
      previousText = "";
    if (!isLast) {
      this.state.nextStepper.classList.remove("visually-hidden");
      nextText = this.state.headers[currentStep + 1].innerText;
    } else {
      this.state.nextStepper.classList.add("visually-hidden");
    }
    if (!isFirst) {
      this.state.previousStepper.classList.remove("visually-hidden");
      previousText = this.state.headers[currentStep - 1].innerText;
    } else {
      this.state.previousStepper.classList.add("visually-hidden");
    }
    let statusText = currentStep + 1 + " / " + this.state.totalSteps;

    this.setState({
      statusText: statusText,
      nextText: nextText,
      previousText: previousText
    });
  }

  render() {
    //console.log(this.context.introVisible);
    let introData = IntroContent.introData;
    const context = this.context;

    const introActiveClass = context.introVisible
      ? "step-off active"
      : "step-off";

    return (
      <div id="HEY" data-current-section="1" className={introActiveClass}>
        <a
          href="#"
          className="close-the-hey test-me"
          data-test-name="Intro: Close"
          data-test-cat="Intro Nav"
          onClick={e => {
            //this.closeIntro(e);
            context.toggleIntro(e, false);
          }}
        >
          Close
        </a>
        <h2 className="step-o-matic">
          HEY!
          <a
            href="#"
            className="step-prev test-me visually-hidden"
            data-test-name="Intro: Previous"
            data-test-cat="Intro Nav"
            onClick={e => {
              this.previousStep(e);
            }}
          >
            Back to: <i>{this.state.previousText}</i>
          </a>
          <a
            href="#"
            className="step-next test-me"
            data-test-name="Intro: Next"
            data-test-cat="Intro Nav"
            onClick={e => {
              this.nextStep(e);
            }}
          >
            Next up: <i>{this.state.nextText}</i>
          </a>
          <span className="status">{this.state.statusText}</span>
        </h2>

        {introData.map((slide, index) => {
          var slideClass = "step section-" + index;
          slideClass += index === 0 ? " current" : "";
          return (
            <section key={index} className={slideClass}>
              <header className="step-title">{slide.title}</header>
              <div
                className="pretty-scroll"
                dangerouslySetInnerHTML={{ __html: slide.text }}
              ></div>
              <Condensificator />
            </section>
          );
        })}
      </div>
    );
  }
}

export default Intro;
