import React, { Component } from "react";

class Count extends Component {
  constructor(props) {
    super(props);

    // Check https://react.dev/learn/passing-props-to-a-component#how-props-change-over-time
    // to clear why we do not need state here
    // this.state = {
    //   messageCount: this.props.number,
    // };
  }

  render() {
    return <p>Number of TODO: {this.props.number}</p>;
  }
}

export default Count;
