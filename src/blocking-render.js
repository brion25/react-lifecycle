import React from "react";
import _uniqueId from "lodash.uniqueid";

class BlockingRender extends React.Component {
  state = {
    result: ""
  };

  heavyCalculation = () => {
    console.time("Heavy Calculation took");
    const delay = 500;
    const calculation = () => {
      for (let i = 0; i <= delay; i++) {
        for (let j = 0; j <= i; j++) {
          for (let k = 0; k <= j; k++) {
            for (let m = 0; m <= k; m++) {}
          }
        }
      }

      this.setState(
        {
          result: _uniqueId()
        },
        () => console.timeEnd("Heavy Calculation took")
      );
    };

    this.setState(
      {
        result: ""
      },
      calculation
    );
  };

  getResult = () => {
    const { result } = this.state;

    switch (result) {
      case "":
        return "No Result";
      case "-":
        return "Calculating result...";
      default:
        return result;
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.heavyCalculation}>Do Heavy Calculation</button>
        <p>{this.getResult()}</p>
      </div>
    );
  }
}

export default BlockingRender;
