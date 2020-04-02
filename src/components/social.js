import * as React from "react";
import { AppData } from "./appdata";

const Social = () => {
  let { state, dispatch } = React.useContext(AppData);
  return (
    <React.Fragment>
      <ul className="share-buttons">
        <li>
          <a
            href="https://twitter.com/intent/tweet?source=http%3A%2F%2Fresume.jeffhill.info%2F&text=Jeff%20Hill's%20TMI%20Resume:%20http%3A%2F%2Fresume.jeffhill.info%2F&via=Jeff_Hill"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter: #Awesome, #HireThisGuy, #BobsYourUncle."
            className="tooltip"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a
            href="https://plus.google.com/share?url=http%3A%2F%2Fresume.jeffhill.info%2F"
            target="_blank"
            rel="noopener noreferrer"
            title="Google+: So the other person that uses Google+ will know."
            className="tooltip"
          >
            <i className="fab fa-google-plus-g"></i>
          </a>
        </li>
        <li>
          <a
            href="http://www.tumblr.com/share?v=3&u=http%3A%2F%2Fresume.jeffhill.info%2F&quote=Jeff%20Hill's%20TMI%20Resume&s="
            target="_blank"
            rel="noopener noreferrer"
            title="Tumblr: ..."
            className="tooltip"
          >
            <i className="fab fa-tumblr"></i>
          </a>
        </li>
        <li>
          <a
            href="http://pinterest.com/pin/create/button/?url=http%3A%2F%2Fresume.jeffhill.info%2F&media=http://resume.jeffhill.info/assets/img/preview.png&description=More%20than%20you%20ever%20wanted%20to%20know%20about%20this%20guy!"
            target="_blank"
            rel="noopener noreferrer"
            title="Pinterest: For my mom."
            className="tooltip"
          >
            <i className="fab fa-pinterest-p"></i>
          </a>
        </li>
        <li>
          <a
            href="https://getpocket.com/save?url=http%3A%2F%2Fresume.jeffhill.info%2F&title=Jeff%20Hill's%20TMI%20Resume"
            target="_blank"
            rel="noopener noreferrer"
            title="Pocket: Whatever this one does."
            className="tooltip"
          >
            <i className="fab fa-get-pocket"></i>
          </a>
        </li>
        <li>
          <a
            href="http://www.reddit.com/submit?url=http%3A%2F%2Fresume.jeffhill.info%2F&title=Jeff%20Hill's%20TMI%20Resume"
            target="_blank"
            rel="noopener noreferrer"
            title="Reddit: 4 teh 13375"
            className="tooltip"
          >
            <i className="fab fa-reddit-alien"></i>
          </a>
        </li>
        <li>
          <a
            href="http://www.linkedin.com/shareArticle?mini=true&url=http%3A%2F%2Fresume.jeffhill.info%2F&title=Jeff%20Hill's%20TMI%20Resume&summary=More%20than%20you%20ever%20wanted%20to%20know%20about%20this%20guy!&source=http%3A%2F%2Fresume.jeffhill.info%2F"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn: Tinder for recruiters."
            className="tooltip"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            href="http://wordpress.com/press-this.php?u=http%3A%2F%2Fresume.jeffhill.info%2F&quote=Jeff%20Hill's%20TMI%20Resume&s=More%20than%20you%20ever%20wanted%20to%20know%20about%20this%20guy!&i=http://resume.jeffhill.info/assets/img/preview.png"
            target="_blank"
            rel="noopener noreferrer"
            title="WordPress: Blog me!"
            className="tooltip"
          >
            <i className="fab fa-wordpress-simple"></i>
          </a>
        </li>
        <li>
          <a
            href="mailto:?subject=Jeff%20Hill's%20TMI%20Resume&body=More%20than%20you%20ever%20wanted%20to%20know%20about%20this%20guy!:%20http%3A%2F%2Fresume.jeffhill.info%2F"
            target="_blank"
            rel="noopener noreferrer"
            title="Email: For my mom."
            className="tooltip"
          >
            <i className="far fa-envelope"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fresume.jeffhill.info%2F&quote=Jeff%20Hill's%20TMI%20Resume"
            title="Facebook: I put this one last on purpose."
            target="_blank"
            rel="noopener noreferrer"
            className="tooltip"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Social;
