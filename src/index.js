import "./styles.css";

import React from "react";
import ReactDOM from "react-dom";

import CounterR15 from "./counter-r15";

export const MOUNTING = "MOUNTING";
export const UPDATING = "UPDATING";
export const UNMOUNTING = "UNMOUNTING";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stage: ""
    };
  }

  renderCounter = () => {
    const { react, stage } = this.state;

    if (react === "r15") {
      return <CounterR15 stage={stage} />;
    } else if (react === "r17") {
      return null;
    }
  };

  render() {
    const { stage } = this.state;

    return (
      <div className="App">
        <h1>React Stages</h1>
        <code>Open the Dev Tools to see the hooks</code>
        <p>
          Which Version of React you want to see? <br />
          <br />
          <input
            type="radio"
            name="react"
            value="r15"
            onChange={e => this.setState({ react: e.target.value })}
          />{" "}
          React 15<br />
          <input
            type="radio"
            name="react"
            value="r17"
            onChange={e => this.setState({ react: e.target.value })}
          />{" "}
          React 17<br />
        </p>
        <p>
          Select the stage you want to see
          <select onChange={e => this.setState({ stage: e.target.value })}>
            <option value="" selected="">
              -
            </option>
            <option value={MOUNTING}>MOUNTING</option>
            <option value={UPDATING}>UPDATING</option>
            <option value={UNMOUNTING}>UNMOUNTING</option>
          </select>
        </p>
        {stage && this.renderCounter()}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
