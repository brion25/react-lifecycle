import React from "react";

import { MOUNTING, UPDATING, UNMOUNTING } from "./index";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      updated: false
    };

    if (props.stage === MOUNTING) {
      // Mounting. State Initialization
      debugger;
    }
  }

  componentWillMount() {
    if (this.props.stage === MOUNTING) {
      // Mounting. Hook called on server rendering
      debugger;
    }
  }

  render() {
    // Mounting. Initial render called

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.stage === UPDATING) {
      // Updating. Called when a prop has changed
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

  componentWillUpdate() {
    if (this.props.stage === UPDATING) {
      // Updating. Called when the props or the state has changed, it's used to prepare everything before the render occurs
      this.state;
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

  componentWillUnmount() {
    if (this.props.stage === UNMOUNTING) {
      // Unmounting. Called before the component is removed from the DOM
      debugger;
    }
  }
}

export default Counter;
