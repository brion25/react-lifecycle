import React from "react";
import { polyfill } from "react-lifecycles-compat";

class Counter extends React.Component {
  render() {
    return <h1>Hello...</h1>;
  }
}

export default polyfill(Counter);
