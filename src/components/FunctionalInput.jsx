import React, { useState } from "react";
import Count from "./Count";
import EditButton from "./EditButton";

const FunctionalInput = ({ name }) => {
  const [todos, setTodos] = useState(["Task1", "Task2", "Task3"]);
  const [inputVal, setInputVal] = useState("");

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((todo) => [...todo, inputVal]);
    setInputVal("");
  };

  const handleDelete = (e) => {
    // get the task name array item which is li's firstChild
    let itemToDelete = e.target.parentNode.firstChild.textContent;
    // get a new array by filtering out the arrayItem
    let newArrayToRender = todos.filter((todo) => {
      return todo != itemToDelete;
    });
    // console.log(newArrayToRender);
    // set the newArrayToRender as the todos list array.
    setTodos(newArrayToRender);
  };

  const handleEdit = (e) => {
    console.log(e.target.textContent);
    if (e.target.textContent == "Edit") {
      e.target.textContent = "Resubmit";
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
          <li key={todo}>
            {todo} <button onClick={handleDelete}>Delete</button>
            <EditButton handleClick={handleEdit} name={"Edit"} />
          </li>
        ))}
      </ul>
      <Count number={todos.length} />
    </section>
  );
};

export default FunctionalInput;
