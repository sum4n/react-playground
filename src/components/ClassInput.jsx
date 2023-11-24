import React, { Component } from "react";
import Count from "./Count";

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { taskName: "Task1", editing: false },
        { taskName: "Task2", editing: false },
        { taskName: "Task3", editing: false },
      ],
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

      let itemToEdit = e.target.parentNode.firstChild.textContent;

      // create new array where the target's editing value will be true
      let newArray = this.state.todos.map((todo) => {
        if (todo.taskName == itemToEdit) {
          return { taskName: todo.taskName, editing: true };
        } else {
          return todo;
        }
      });
      // console.log(newArray);

      // rerender new todos
      this.setState((state) => ({
        ...state,
        todos: newArray,
      }));
    } else {
      e.target.textContent = "Edit";

      // Find the item to resubmit with id because it will not change during input
      let itemToResubmit = e.target.parentNode.firstChild.id;
      // console.log(itemToResubmit);

      // create new array with modified task
      let newArray = this.state.todos.map((todo) => {
        // we compare the taskName with itemToResubmit found through ID.
        // if we used firstChild.value to find taskName, it would not work because
        // input text will differ from taskName. So we set ID same as taskName in the <input> jsx.
        if (todo.taskName == itemToResubmit) {
          return {
            taskName: e.target.parentNode.firstChild.value,
            editing: false,
          };
        } else {
          return todo;
        }
      });

      // rerender edited todos
      this.setState((state) => ({
        ...state,
        todos: newArray,
      }));
      // console.log(todos);
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
            <li key={todo.taskName}>
              {todo.editing ? (
                <input
                  // needs id to identify task when editing
                  id={todo.taskName}
                  type="text"
                  defaultValue={todo.taskName}
                />
              ) : (
                todo.taskName
              )}
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
