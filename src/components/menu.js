import * as React from "react";
import { AppData } from "./appdata";
import helpers from "./helpers";

class Menu extends React.Component {
  static displayName = "AppMenu";
  static contextType = AppData; // ***** access via this.context
  //console.log()
  constructor(props) {
    super(props);
    this.state = {
      currentTheme: "default",
      introVisible: null,
      menuVisible: null,
      myGlobalFunction: {},
      toggleIntro: null
    };

    //this.toggleTheme = this.toggleTheme.bind(this);
    //this.showMenu = this.showMenu.bind(this);
  }
  componentDidMount() {}
  componentWillUpdate(nextProps, nextState) {}
  componentDidUpdate(prevProps, prevState) {}

  render() {
    const {
      toggleMenu,
      toggleIntro,
      toggleTheme,
      toggleMap,
      toggleMe,
      toggleDebugger,
      togglePortfolio,
      easterEgg,
      eggMode
    } = this.context;
    const resume = this.context.resume;

    const eggClass = eggMode
      ? "debug-toggle tooltip toggler"
      : "debug-toggle tooltip toggler visually-hidden";

    return (
      <AppData.Consumer>
        {context => {
          const pdfLink = process.env.PUBLIC_URL + "/assets/resume.pdf";
          const menuActiveClass = context.menuVisible
            ? "contact-info active"
            : "contact-info";
          const introActiveClass = context.introVisible
            ? "tooltip btfu active"
            : "tooltip btfu";
          const mapActiveClass = context.mapVisible
            ? "mappy tooltip toggler active"
            : "mappy tooltip toggler";
          const meActiveClass = context.meVisible
            ? "min-only me tooltip active"
            : "min-only me tooltip";
          const portfolioActiveClass = context.portfolioVisible
            ? "tooltip sigh active"
            : "tooltip sigh";
          const themeActiveClass = context.themed
            ? "theme-toggle tooltip toggler theme active"
            : "theme-toggle tooltip toggler theme";
          return (
            <section
              className={menuActiveClass}
              onClick={e => {
                toggleMenu(e);
              }}
            >
              <h2 className="visually-hidden">Main Menu</h2>
              <ul>
                <li className="just-the-tip"></li>
                <li
                  className={themeActiveClass}
                  data-title="Agile theme on/off"
                  onClick={e => {
                    toggleTheme(e, "agile");
                  }}
                >
                  <button
                    className="test-me"
                    data-test-name="Menu: Local"
                    data-test-cat="Theme Toggle"
                  >
                    <i className="fas fa-toggle-on"></i>
                    <i className="fas fa-toggle-off"></i>
                    <span>Agile theme toggle</span>
                  </button>
                </li>
                <li
                  className={introActiveClass}
                  data-title="Back to the beginning"
                  onClick={e => {
                    toggleIntro(e);
                  }}
                >
                  <button
                    className="test-me"
                    data-test-name="Menu: Local"
                    data-test-cat="Introduction Link"
                  >
                    <i className="fas fa-circle-notch"></i>
                    <span>View Introduction (again)</span>
                  </button>
                </li>
                <li
                  className={portfolioActiveClass}
                  data-title="Pretty (old) things"
                  onClick={e => {
                    togglePortfolio(e);
                  }}
                >
                  <button
                    className="test-me"
                    data-test-name="Menu: Local"
                    data-test-cat="Portfolio Link"
                  >
                    <i className="fas fa-camera-retro"></i>
                    <span>Old Screencaps</span>
                  </button>
                </li>

                <li
                  className="wrap tooltip"
                  data-title="Check out my 1-page resume"
                >
                  <a
                    href={pdfLink}
                    target="_blank"
                    className="pdf test-me"
                    data-test-name="Menu: Local"
                    data-test-cat="View PDF Resume"
                  >
                    <i className="far fa-file-pdf"></i>
                    <span>
                      Resum&#233;{" "}
                      <sup>
                        <i className="fas fa-external-link-alt"></i>
                      </sup>
                    </span>
                  </a>
                </li>

                <li
                  className="wrap tooltip"
                  data-title="View my LinkedIn profile"
                >
                  <a
                    href="https://www.linkedin.com/in/jeffrey-hill-ux-guru/"
                    target="_blank"
                    className="linkedin test-me"
                    data-test-name="Menu: Non-Local"
                    data-test-cat="View LinkedIn Profile"
                  >
                    <i className="fab fa-linkedin"></i>
                    <span>
                      LinkedIn{" "}
                      <sup>
                        <i className="fas fa-external-link-alt"></i>
                      </sup>
                    </span>
                  </a>
                </li>

                <li className="tooltip" data-title="Call me, maybe">
                  <a
                    href="tel:phone"
                    className="phone test-me"
                    data-test-name="Menu: Local"
                    data-test-cat="Phone Link"
                  >
                    <i className="fas fa-mobile-alt"></i>
                    <span>{helpers.formatPhone(resume.personal.phone)}</span>
                  </a>
                </li>

                <li className="tooltip" data-title="eMail me, maybe">
                  <a
                    href="mailto:mrjeffhill@gmail.com?subject=Sweet%20Resume%20Dude!"
                    target="_blank"
                    className="email test-me"
                    data-test-name="Menu: Local"
                    data-test-cat="Email Link"
                  >
                    <i className="far fa-envelope"></i>
                    <span>{resume.personal.email}</span>
                  </a>
                </li>
                <li
                  className="tooltip"
                  data-title="View my location in a new tab"
                >
                  <a
                    href="https://goo.gl/maps/bpRUJ3iLHGZ8ib5H8"
                    target="_blank"
                    className="address test-me"
                    data-test-name="Menu: Non-Local"
                    data-test-cat="View Map Location"
                  >
                    <i className="fas fa-map-marker-alt"></i>
                    <address>
                      <span className="line-one">street</span>
                      <span className="line-two">
                        {resume.personal.address.city},{" "}
                        {resume.personal.address.state}{" "}
                        {resume.personal.address.zip}{" "}
                        <sup>
                          <i className="fas fa-external-link-alt"></i>
                        </sup>
                      </span>
                    </address>
                  </a>
                </li>
                <li
                  className={mapActiveClass}
                  data-title="See what the commute might be"
                  onClick={e => {
                    toggleMap(e);
                  }}
                >
                  <button
                    className="test-me"
                    data-test-name="Menu: Local"
                    data-test-cat="Commute Link"
                  >
                    <i className="fas fa-car commute"></i>
                    <span>Commute distance</span>
                  </button>
                </li>
                <li
                  className={meActiveClass}
                  data-title="As if you need/care to know more"
                  onClick={e => {
                    toggleMe(e);
                  }}
                >
                  <button
                    className="test-me"
                    data-test-name="Menu: Local"
                    data-test-cat="Personal Link"
                  >
                    <i className="far fa-id-card"></i>
                    <span>More Me</span>
                  </button>
                </li>
                <li
                  className="tools-toggle tooltip toggler"
                  data-title="Things I build for building"
                >
                  <button>
                    <i className="fas fa-cogs"></i>
                    <span>Dev Tools</span>
                  </button>
                </li>
                <li
                  className="tts-toggle tooltip toggler"
                  data-title="Turn TTS on/off"
                >
                  <button>
                    <i className="fas fa-comment-dots"></i>
                    <i className="far fa-comment"></i>
                    <span>Text to Speech</span>
                  </button>
                </li>
                <li
                  className="tooltip static version"
                  data-title="No Cacheing!"
                  onClick={e => {
                    easterEgg(e);
                  }}
                >
                  <i className="fas fa-infinity"></i>
                  <span>Version: {this.context.version}</span>
                </li>
                <li
                  className={eggClass}
                  data-title="Oh, what is this?"
                  onClick={e => {
                    toggleDebugger(e);
                  }}
                >
                  <button>
                    <i className="fas fa-pastafarianism"></i>
                    <span>Data for nerds</span>
                  </button>
                </li>
              </ul>
            </section>
          );
        }}
      </AppData.Consumer>
    );
  }
}

export default Menu;
