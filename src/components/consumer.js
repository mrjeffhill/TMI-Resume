import React from "react";
import { DataContext } from "./providers";

export default class Consumer extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <DataContext.Consumer>
        {({ resume, bool, someFunction }) => {
          return React.Children.map(children, child =>
            React.cloneElement(child, {
              resume,
              bool,
              someFunction
            })
          );
        }}
      </DataContext.Consumer>
    );
  }
}
