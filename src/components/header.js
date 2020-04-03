import * as React from "react";
import { AppData } from "./appdata";
import Menu from "./menu";

class Header extends React.Component {
  static contextType = AppData;
  //let { state, dispatch } = React.useContext(AppData);
  render() {
    const context = this.context;
    return (
      <header>
        <h1>{context.resume.personal.name}</h1>
        <h2
          dangerouslySetInnerHTML={{ __html: context.resume.personal.title }}
        ></h2>
        <h3>{context.resume.personal.tagline}</h3>
        <Menu />
      </header>
    );
  }
}

export default Header;
