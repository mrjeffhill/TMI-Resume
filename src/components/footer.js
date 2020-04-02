import * as React from "react";
import { AppData } from "./appdata";
import Social from "./social";
import Toppy from "./toppy";
import Skewer from "./skewer";
import Commute from "./map";
import About from "./about";

class Footer extends React.Component {
  static contextType = AppData; // ***** access via this.context
  render() {
    return (
      <React.Fragment>
        <footer>
          <Toppy />
          <Skewer />
          <ul className="current-pallet pallet-panel res-panel">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

          <ul className="current-fonts fonts-panel res-panel">
            <li className="pt-serif">PT Serif</li>
            <li className="raleway">Raleway</li>
            <li className="marker">Permanent Marker</li>
            <li className="patrick">Patrick Hand SC</li>
            <li className="amatic">Amatic SC</li>
            <li className="architect">Architects Daughter</li>
            <li className="indie">Indie Flower</li>
            <li className="caveat">Caveat</li>
            <li className="walter">Walter Turncoat</li>
            <li className="special">Special Elite</li>
            <li className="finger">Finger Paint</li>
          </ul>
          <Social />
          <Commute />
          <About />
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
