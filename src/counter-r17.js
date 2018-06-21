import React from "react";
import { polyfill } from "react-lifecycles-compat";

import { MOUNTING, UPDATING, UNMOUNTING } from "./index";

class Counter extends React.Component {
  state = {
    counter: 0,
    updated: false
  };

  constructor(props) {
    super(props);

    if (props.stage === MOUNTING) {
      // Mounting. State Initialization
      this.state;
      debugger;
    }
  }

  static getDerivedStateFromProps(props) {
    if (props.stage === MOUNTING) {
      // Mounting. It's called before the initial render, it returns an object used to set the state. It should return null, to don't update the state
      debugger;
    }

    if (props.stage === UPDATING) {
      // Updating. It's called before the render happens and it has the new set of props.
      debugger;
    }
  }

  shouldComponentUpdate() {
    if (this.props.stage === UPDATING) {
      // Updating. Called before the rendering occurs if this hook returns false, the render hook will not be triggered
      this.state;
      debugger;
    }

    return true;
  }

  getSnapshotBeforeUpdate() {
    if (this.props.stage === UPDATING) {
      // Updating. is invoked right before the most recently rendered output is committed. It enables your component to capture some information from the DOM. You can set the state here, but it's not the purpose of this hook
      debugger;
    }
  }

  componentDidUpdate() {
    if (this.props.stage === UPDATING) {
      // Updating. Called once the the render hook was executed
      this.state;
      debugger;
    }
  }

  render() {
    return <div className="counter">{this.state.counter}</div>;
  }

  componentDidMount() {
    if (this.props.stage === MOUNTING) {
      // Mounting. Called once the component was inserted to the DOM
      debugger;
    }

    window.setInterval(() => {
      this.setState({
        counter: this.state.counter + 1
      });
    }, 3000);
  }

  componentWillUnmount() {
    if (this.props.stage === UNMOUNTING) {
      // Unmounting. Called before the component is removed from the DOM
      debugger;
    }
  }
}

export default polyfill(Counter);
