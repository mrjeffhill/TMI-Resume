import * as React from "react";
import Resume from "../assets/js/resume";
import helpers from "./helpers";

const resumeData = Resume;

let AppData = React.createContext();

let initialState = {
  resume: resumeData,
  version: "0.6.6.6 OMeGa",
  ua: {},
  ip: {},
  eggClicks: 0,
  themes: ["default", "agile"],
  themed: false,
  skewed: false,
  currentTheme: "",
  introVisible: false,
  menuVisible: false,
  mapVisible: false,
  meVisible: false,
  portfolioVisible: false,
  portfolio: [],
  tabTypes: ["chart", "table", "stars", "info"],
  tabIcons: ["chart-pie", "table", "star-half-alt", "info-circle"],
  rotationClasses: [
    "rr-7",
    "rr-6",
    "rr-5",
    "rr-4",
    "rr-3",
    "rr-2",
    "rr-1",
    "rr0",
    "rr1",
    "rr2",
    "rr3",
    "rr4",
    "rr5",
    "rr6",
    "rr7"
  ],
  polyClasses: ["poly-0", "poly-1", "poly-2", "poly-3", "poly-4"],

  map: null,
  myLatLng: { lat: 42.4316604, lng: -83.484051 },
  user: { ll: {}, ua: {}, ip: {} },
  testLL: { lat: 42.279594, lng: -83.732124 }, // AA
  qsObj: {},
  eggMode: false,
  debuggerVisible: false,

  tts: false
};

const contextFunctions = {
  myGlobalFunction: e => {
    console.log("global function called for: " + e.target.nodeName);
    this.introVisible = !this.introVisible;
  }
};

class AppDataProvider extends React.Component {
  //function AppDataProvider(props) {
  state = initialState;

  componentDidMount() {

    var urlParams = new URLSearchParams(window.location.search);
    var qsObj = {};
    if (urlParams.toString() !== "") {
      qsObj = JSON.parse(
        '{"' +
          decodeURI(
            urlParams
              .toString()
              .replace(/&/g, '","')
              .replace(/=/g, '":"')
          ) +
          '"}'
      );      
    }
    this.setState({ qsObj: qsObj });

    const galleryItems = [];
    const empItems = resumeData.history;
    for (let empItem of empItems) {
      let projects = empItem.projects;
      for (let project of projects) {
        if (project.thumb !== "") {
          galleryItems.push(project);
        }
      }
    }
    this.setState({ portfolio: galleryItems });
    if (this.state.themed && this.state.currentTheme === "agile") {
      document.body.classList.add(this.state.currentTheme);
      document.body.classList.add("entropy");
    }
  }
  componentDidUpdate(prevProps, prevState) {}

  toggleMenu = event => {
    const opener = event.target.closest("section");
    // this is how you get pseudo-classes to take events ;)
    const noClicky = event.target.closest("ul");
    if (!noClicky) {
      this.setState({ menuVisible: !this.state.menuVisible });
      opener.classList.toggle("active");
    }
  };
  toggleIntro = (e, args) => {
    this.setState({ introVisible: !this.state.introVisible });
  };
  toggleMap = (e, args) => {
    this.setState({
      mapVisible: !this.state.mapVisible,
      meVisible: false,
      portfolioVisible: false
    });
    document.body.classList.toggle("mappy");
    document.body.classList.toggle("map-active");
    document.body.classList.remove("me");
    document.body.classList.remove("me-active");
  };
  toggleMe = (e, args) => {
    this.setState({
      meVisible: !this.state.meVisible,
      mapVisible: false,
      portfolioVisible: false
    });
    document.body.classList.toggle("me");
    document.body.classList.toggle("me-active");
    document.body.classList.remove("mappy");
    document.body.classList.remove("map-active");
  };
  togglePortfolio = (e, args) => {
    this.setState({
      portfolioVisible: !this.state.portfolioVisible,
      mapVisible: false,
      meVisible: false
    });
    document.body.classList.remove("me");
    document.body.classList.remove("me-active");
    document.body.classList.remove("mappy");
    document.body.classList.remove("map-active");
  };
  toggleTheme = (event, theme) => {
    if (this.state.currentTheme == theme) {
      this.setState({ currentTheme: "default", themed: !this.state.themed });
      document.body.classList.remove(theme);
    } else {
      this.setState({ currentTheme: theme, themed: !this.state.themed });
      document.body.classList.add(theme);
      document.body.classList.toggle("entropy");
    }
    /*
      if (!agileTheme){
        getMessy($('.agile .rr'), false);
        kill slideshow for Interests
      } else {
        getMessy($('.agile .rr'), true);
        init slideshow for Interests
      }
    */
  };
  easterEgg = (e, args) => {
    this.setState({
      eggClicks: this.state.eggClicks + 1
    });
    this.state.eggClicks > 10
      ? this.setState({ eggMode: true }) // alert("Surprise!")
      : console.log("Keep Clicking...");
  };
  toggleDebugger = event => {
    this.setState({
      debuggerVisible: !this.state.debuggerVisible
    });
    event.target.closest("li").classList.toggle("active");
  };
  //return <AppData.Provider value={value}>{props.children}</AppData.Provider>;
  render() {
    return (
      <AppData.Provider
        value={{
          ...this.state,
          toggleIntro: this.toggleIntro,
          toggleMenu: this.toggleMenu,
          toggleTheme: this.toggleTheme,
          toggleMap: this.toggleMap,
          toggleMe: this.toggleMe,
          togglePortfolio: this.togglePortfolio,
          toggleDebugger: this.toggleDebugger,
          easterEgg: this.easterEgg
        }}
      >
        {this.props.children}
      </AppData.Provider>
    );
  }
}

let AppDataConsumer = AppData.Consumer;

export { AppData, AppDataProvider, AppDataConsumer };
