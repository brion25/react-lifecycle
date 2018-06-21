import "./styles.css";

import React from "react";
import ReactDOM from "react-dom";

import CounterR15 from "./counter-r15";
import CounterR17 from "./counter-r17";
import Blocking from "./blocking-render";

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

    switch (react) {
      case "r15":
        return <CounterR15 stage={stage} />;
      case "r17":
        return <CounterR17 stage={stage} />;
      case "blocking":
        return <Blocking />;
      default:
        return null;
    }
  };

  render() {
    const { stage, react } = this.state;

    return (
      <div className="App">
        <h1>React Stages</h1>
        <code>
          Open the Dev Tools to see the hooks or to see interesting information
        </code>
        <p>
          Which Version of React you want to see? <br />
          <br />
          <input
            type="radio"
            name="react"
            value="r15"
            onChange={e => this.setState({ react: e.target.value, stage: "" })}
          />{" "}
          React 15<br />
          <input
            type="radio"
            name="react"
            value="r17"
            onChange={e => this.setState({ react: e.target.value, stage: "" })}
          />{" "}
          React 17<br />
          <input
            type="radio"
            name="react"
            value="blocking"
            onChange={e => this.setState({ react: e.target.value, stage: "" })}
          />{" "}
          Blocking Render<br />
        </p>
        <p>
          Select the stage you want to see
          <select onChange={e => this.setState({ stage: e.target.value })}>
            <option value="" selected={this.state.stage === ""}>
              -
            </option>
            <option value={MOUNTING} selected={this.state.stage === MOUNTING}>
              MOUNTING
            </option>
            <option value={UPDATING} selected={this.state.stage === UPDATING}>
              UPDATING
            </option>
            <option
              value={UNMOUNTING}
              selected={this.state.stage === UNMOUNTING}
            >
              UNMOUNTING
            </option>
          </select>
        </p>
        {(stage || react === "blocking") && this.renderCounter()}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
