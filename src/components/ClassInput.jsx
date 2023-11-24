import React, { Component } from "react";
import Count from "./Count";

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ["task1", "task2", "task3"],
      inputVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
    }));
  }

  handleDelete(e) {
    let itemToDelete = e.target.previousSibling.textContent;
    // console.log(itemToDelete);

    let newArrayToRender = this.state.todos.filter((todo) => {
      return todo != itemToDelete;
    });

    this.setState((state) => ({
      ...state,
      todos: newArrayToRender,
    }));
    // console.log(newArrayToRender);
  }

  handleEditClick(e) {
    console.log(e.target.textContent);
    if (e.target.textContent == "Edit") {
      e.target.textContent = "Resubmit";
    } else {
      e.target.textContent = "Edit";
    }
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo}>
              {todo}
              <button onClick={this.handleDelete}>Delete</button>
              <button onClick={this.handleEditClick}>Edit</button>
            </li>
          ))}
        </ul>
        <Count number={this.state.todos.length} />
      </section>
    );
  }
}

export default ClassInput;
