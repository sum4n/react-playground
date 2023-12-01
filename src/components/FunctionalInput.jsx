import React, { useState } from "react";
import Count from "./Count";

const FunctionalInput = ({ name }) => {
  const [todos, setTodos] = useState([
    { taskName: "Task1", editing: false },
    { taskName: "Task2", editing: false },
    { taskName: "Task3", editing: false },
  ]);
  const [inputVal, setInputVal] = useState("");

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((todo) => [...todo, { taskName: inputVal, editing: false }]);
    setInputVal("");
  };

  const handleDelete = (e) => {
    // get the task name array item which is li's firstChild
    let itemToDelete = e.target.parentNode.id;
    console.log(itemToDelete);
    // get a new array by filtering out the arrayItem
    let newArrayToRender = todos.filter((todo) => {
      return todo.taskName != itemToDelete;
    });
    // console.log(newArrayToRender);
    // set the newArrayToRender as the todos list array.
    setTodos(newArrayToRender);
  };

  const handleEdit = (e) => {
    if (e.target.textContent == "Edit") {
      e.target.textContent = "Resubmit";
      // changing target's editing value to true
      let itemToEdit = e.target.parentNode.id;

      // create new array where the target's editing value will be true
      let newArray = todos.map((todo) => {
        if (todo.taskName == itemToEdit) {
          return { taskName: todo.taskName, editing: true };
        } else {
          return todo;
        }
      });
      // console.log(newArray);

      // rerender new todos
      setTodos(newArray);
    } else {
      // change Resubmit button text to 'Edit'
      e.target.textContent = "Edit";
      // Find the item to resubmit with id because it will not change during input
      let itemToResubmit = e.target.parentNode.id;
      // console.log(itemToResubmit);

      // create new array with modified task
      let newArray = todos.map((todo) => {
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
      setTodos(newArray);
      // console.log(todos);
    }
  };

  return (
    <section>
      <h3>{name}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task-entry">Enter a task: </label>
        <input
          type="text"
          name="task-entry"
          value={inputVal}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
      <h4>All the tasks!</h4>
      <ul>
        {todos.map((todo) => (
          // needs id to identify task when editing
          <li key={todo.taskName} id={todo.taskName}>
            {todo.editing ? (
              <input type="text" defaultValue={todo.taskName} />
            ) : (
              todo.taskName
            )}
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleEdit}>Edit</button>
          </li>
        ))}
      </ul>
      <Count number={todos.length} />
    </section>
  );
};

export default FunctionalInput;
