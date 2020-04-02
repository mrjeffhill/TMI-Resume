import * as React from "react";
import ReactDOM from "react-dom";
import { AppData } from "./appdata";
import helpers from "./helpers";

class Portfolio extends React.Component {
  static contextType = AppData; // ***** access via this.context

  state = {};
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  componentWillUpdate(nextProps, nextState) {}
  componentDidUpdate(prevProps, prevState) {}

  render() {
    //console.log(this.context.introVisible);
    const context = this.context;
    const portfolioItems = this.context.portfolio;
    const portfolioActiveClass = context.portfolioVisible
      ? "port-wrap active"
      : "port-wrap visually-hidden";

    return (
      <div className={portfolioActiveClass}>
        <h2>The old stuff</h2>
        <a
          href="#"
          className="close-the-pretty"
          onClick={e => {
            context.togglePortfolio(e, false);
          }}
        >
          Close
        </a>
        <div className="port-gallery pretty-scroll">
          {portfolioItems.map((portfolioItem, index) => {
            const imagePath =
              process.env.PUBLIC_URL +
              "/assets/img/portfolio/" +
              portfolioItem.thumb;
            // name, details, description
            return (
              <figure key={index} className="hex-outer">
                <span className="hex-inner">
                  <img
                    className={helpers.classify(portfolioItem.name)}
                    src={imagePath}
                  />
                </span>
                <figcaption
                  className="caption"
                  dangerouslySetInnerHTML={{ __html: portfolioItem.details }}
                ></figcaption>
                <a
                  className="mobile-hover-hack"
                  href={imagePath}
                  target="_blank"
                >
                  VIEW
                </a>
              </figure>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Portfolio;

/*
var buildPortfolioGallery = function(){
	$('body').append('');
	$.each($('.gallery a'), function( i, s ) {
		$('.port-gallery').append('');
	});
}
*/
