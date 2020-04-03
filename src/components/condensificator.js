import * as React from "react";
import { AppData } from "./appdata";

class Condensificator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCondensed: false,
      offText: `<i className="fas fa-eye-slash"></i> Brevity Please`,
      onText: `<i class="fas fa-eye"></i> Oh that\'s novel. Now put it back.`,
      currentText: ""
    };
    this.condensify = this.condensify.bind(this);
  }
  componentDidMount() {
    this.setState({
      currentText: this.state.offText
    });
  }
  condensify(event) {
    const step = event.target.closest("section.step");
    const stepCondensed = event.target.closest("section.step.condensed");

    if (this.state.isCondensed) {
      this.setState({ currentText: this.state.offText });
      step.classList.remove("condensed");
    } else {
      this.setState({ currentText: this.state.onText });
      step.classList.add("condensed");
    }
    this.setState({ isCondensed: !this.state.isCondensed });
  }

  render() {
    return (
      <span
        className="condensificator test-me"
        data-test-name="Intro: Condense Slide 1"
        data-test-cat="Intro Nav"
        dangerouslySetInnerHTML={{ __html: this.state.currentText }}
        onClick={e => {
          this.condensify(e);
        }}
      ></span>
    );
  }
}

export default Condensificator;
