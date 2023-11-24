// EditButton class component for FuntionalInput.jsx and ClassInput.jsx
// Did not need it in the end.
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
