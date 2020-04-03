import * as React from "react";
import { AppData } from "./appdata";
import helpers from "./helpers";

class Gallery extends React.Component {
  static contextType = AppData; // ***** access via this.context

  render() {
    const context = this.context;
    const gallery = this.props.gallery;
    //console.log(gallery);
    return (
      <React.Fragment>
        <ul className="polaroids clearfix">
          {gallery.map((item, index) => {
            const tipTitle = "Open " + item.name + " in a new tab";
            const imagePath =
              item.thumb !== ""
                ? process.env.PUBLIC_URL + "/assets/img/portfolio/" + item.thumb
                : process.env.PUBLIC_URL + "/assets/img/portfolio/missing.png";
            //const imagePath = {require(`./assets/img/portfolio/${item.thumb}`)}
            return (
              <li key={index} className="tooltip" data-title={tipTitle}>
                <a
                  href={imagePath}
                  className="rr"
                  title={item.title}
                  target="_blank"
                >
                  <span className="clippy">
                    <img
                      className={helpers.classify(item.name)}
                      src={imagePath}
                      alt={item.title}
                    />
                  </span>
                  <p dangerouslySetInnerHTML={{ __html: item.details }}></p>
                </a>
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default Gallery;
