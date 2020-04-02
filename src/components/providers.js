import React from "react";
import Resume from "../assets/js/resume";

const resumeData = Resume;

const DEFAULT_STATE = {
  resume: resumeData,
  bool: true,
  num: 10,
  str: "Jeff",
  arr: [1, 2, 3, 4],
  colors: ["red", "green", "blue", "purple", "orange"]
};

export const DataContext = React.createContext(DEFAULT_STATE);

export default class Provider extends React.Component {
  state = DEFAULT_STATE;
  someFunction = bool => {
    this.setState({ bool });
    console.log(bool);
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          ...this.state,
          someFunction: this.someFunction
        }}
      >
        {" "}
        {this.props.children}{" "}
      </ThemeContext.Provider>
    );
  }
}
