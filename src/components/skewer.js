import * as React from "react";
import { AppData } from "./appdata";
import helpers from "./helpers";

class Skewer extends React.Component {
  static contextType = AppData; // ***** access via this.context

  constructor(props) {
    super(props);
    this.state = {
      hasEntropy: false,
      rrEls: [],
      tapedEls: [],
      allEntropyElls: [],
      polyEls: [],
      tackEls: [],
      rotationClasses: "",
      polyClasses: ""
    };

    this.toggleEntropy = this.toggleEntropy.bind(this);
  }
  componentDidMount() {
    const entropyEls1 = document.getElementsByClassName("rr");
    // .taped-b:before !need to rework for pseudo els
    const entropyEls2 = document.getElementsByClassName("taped-b");
    const polyEls = document.getElementsByClassName("poly-wrap");
    const tackEls = document.getElementsByClassName("add-tack");
    //const allEntropyElls = [...entropyEls1, ...entropyEls2];
    const allEntropyElls = entropyEls1;
    const rc = this.context.rotationClasses;
    const pc = this.context.polyClasses;

    this.setState({
      hasEntropy: helpers.hasClass(document.body, "entropy"),
      rrEls: entropyEls1,
      tapedEls: entropyEls2,
      allEntropyElls: allEntropyElls,
      polyEls: polyEls,
      tackEls: tackEls,
      rotationClasses: rc,
      polyClasses: pc
    });
  }
  componentWillUpdate(nextProps, nextState) {}
  componentDidUpdate(prevProps, prevState) {}

  toggleEntropy(event) {
    event.preventDefault();
    document.body.classList.toggle("entropy");
    this.setState({
      hasEntropy: !this.state.hasEntropy
    });

    let isEntropic = this.state.hasEntropy;
    let skewees = this.state.allEntropyElls;

    for (let skewee of skewees) {
      let rand = isEntropic ? Math.floor(Math.random() * 15) - 7 : 0;

      // $(this).css('transform','rotate(' + rand + 'deg)')
      // .removeClass(rotationClasses)
      // .addClass('rr' + rand);

      skewee.setAttribute("style", "transform: rotate(" + rand + "deg)");
      /*
      DOMTokenList.prototype.add.apply(
        skewee.classList,
        this.state.rotationClasses
      );
      */
      DOMTokenList.prototype.remove.apply(
        skewee.classList,
        this.state.rotationClasses
      );
      skewee.classList.add("rr" + rand);

      if (helpers.hasClass(skewee, "add-tack")) {
        skewee.setAttribute("style", "margin-left: " + rand / 2 + "em");
      }
      if (helpers.hasClass(skewee, "poly-wrap")) {
        DOMTokenList.prototype.remove.apply(
          skewee.classList,
          this.state.polyClasses
        );
        skewee.classList.add("poly-" + helpers.getRandom(5));
      }
    }

    if (isEntropic) {
      console.log(this.state.hasEntropy);
    } else {
      console.log(this.state.hasEntropy);
    }
  }

  render() {
    return (
      <i
        className="fas fa-align-center cleany extra"
        onClick={e => {
          this.toggleEntropy(e);
        }}
      >
        <span className="tooltip" data-title="For those with OCD or ADD"></span>
      </i>
    );
  }
}

export default Skewer;
