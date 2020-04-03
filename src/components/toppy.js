import * as React from "react";
import { AppData } from "./appdata";

class Toppy extends React.Component {
  static contextType = AppData; // ***** access via this.context
  constructor(props) {
    super(props);
    this.state = {};

    this.topOff = this.topOff.bind(this);
  }
  componentDidMount() {}
  componentWillUpdate(nextProps, nextState) {}
  componentDidUpdate(prevProps, prevState) {}

  topOff(event) {
    event.preventDefault();
    document.getElementsByTagName("body")[0].scrollTo(0, 0);
  }
  /*
$('aside').animate({ scrollTop: ( $(this).offset().top ) }, 1000);
		$('#meatnTaters').animate({ scrollTop: ( $(this).offset().top ) }, 1000);
  */
  render() {
    const context = this.context;
    return (
      <i
        className="fas fa-arrow-circle-up toppy extra"
        onClick={e => {
          this.topOff(e);
        }}
      >
        <span className="tooltip" data-title="Back to the top"></span>
      </i>
    );
  }
}

export default Toppy;
