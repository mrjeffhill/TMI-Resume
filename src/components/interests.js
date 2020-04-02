import * as React from "react";
import { AppData } from "./appdata";
import Slider from "react-slick";

class Interests extends React.Component {
  static contextType = AppData; // ***** access via this.context

  render() {
    const context = this.context;
    const interests = context.resume.interests;

    const themeActiveClass = context.themed ? "paper slide-show" : "paper";

    var settings = {
      // screw this
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "carousel-cell",
      slide: "li"
    };
    // <Slider {...settings}></Slider>
    return (
      <React.Fragment>
        <section className="res-editable res-interests rr" id="Interests">
          <div className="notepad-heading">
            <h2 className="label-maker">Interests</h2>
          </div>
          <ul className={themeActiveClass}>
            {interests.map((interest, index) => {
              return (
                <li key={index} className="carousel-cell">
                  <h2>{interest.name}</h2>
                  <blockquote>
                    <p>{interest.detail}</p>
                    <cite>{interest.cite}</cite>
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

export default Interests;
