import React, { Component } from "react";

class EditButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <button onClick={this.props.handleClick}>{this.props.name}</button>;
  }
}

export default EditButton;
