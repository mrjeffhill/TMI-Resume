import * as React from "react";
import { AppData } from "./components/appdata";

export function App() {
  // [A]
  let { state, dispatch } = React.useContext(AppData);

  // [B]
  React.useEffect(() => {
    document.body.style.backgroundColor = state.currentColor;
  }, [state.currentColor]);

  // [C]
  let inc = () => dispatch({ type: "increment" });
  let dec = () => dispatch({ type: "decrement" });
  let reset = () => dispatch({ type: "reset" });
  let setColor = color => () => dispatch({ type: "set-color", payload: color });

  return (
    <React.Fragment>
      <div style={{ textAlign: "center" }}>
        <h2
          dangerouslySetInnerHTML={{ __html: state.resume.personal.title }}
        ></h2>
        <p>
          Current color is: <b>{state.currentColor}</b>
        </p>
        <p>
          Current count: <b>{state.count}</b>
        </p>
      </div>
      <div style={{ paddingTop: 40 }}>
        <p>Count controls:</p>
        <button onClick={inc}>Increment!</button>
        <button onClick={dec}>Decrement!</button>
      </div>
      <div>
        <p>Color controls:</p>
        <button onClick={setColor("green")}>Change to green!</button>
        <button onClick={setColor("papayawhip")}>Change to papayawhip!</button>
      </div>
      <div>
        <p>Reset changes:</p>
        <button onClick={reset}>Reset!</button>
      </div>
    </React.Fragment>
  );
}
