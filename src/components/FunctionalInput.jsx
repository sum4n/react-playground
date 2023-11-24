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
    let itemToDelete = e.target.parentNode.firstChild.textContent;
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
      let itemToEdit = e.target.parentNode.firstChild.textContent;

      // create new array where the target's editing value will be true
      let newArray = todos.map((todo) => {
        if (todo.taskName == itemToEdit) {
          return { taskName: todo.taskName, editing: true };
        } else {
          return todo;
        }
      });
      console.log(newArray);

      //
      setTodos(newArray);
    } else {
      e.target.textContent = "Edit";
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
          <li key={todo.taskName}>
            {todo.editing ? (
              <input
                type="text"
                value={todo.taskName}
                onChange={handleInputChange}
              />
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
