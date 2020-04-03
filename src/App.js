import * as React from "react";
import { AppData } from "./components/appdata";
import Header from "./components/header";
import Main from "./components/main";
import Intro from "./components/intro";
import Portfolio from "./components/portfolio";
import Debugger from "./components/debugger";

class App extends React.Component {
  static contextType = AppData; // ***** access via this.context

  componentWillMount() {
    document.body.classList.add("loading");

    const modernizr = document.createElement("script");
    modernizr.src =
      "https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js";
    modernizr.async = true;
    document.body.appendChild(modernizr);

    const fontawesome = document.createElement("script");
    fontawesome.src = "https://use.fontawesome.com/14fda74a91.js";
    fontawesome.async = true;
    document.body.appendChild(fontawesome);

  }
  componentDidMount() {
    setTimeout(function() {
      document.body.classList.remove("loading");
      document.body.classList.add("loaded");
    }, 3000);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
        <Intro />
        <Portfolio />
        <Debugger />
      </React.Fragment>
    );
  }
}

export default App;
