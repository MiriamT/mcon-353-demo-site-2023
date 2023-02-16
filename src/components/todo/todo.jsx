import React, { useState } from "react";

export const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const onInput = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  };

  const addTodo = () => {
    // todos.push(input);
    setTodos([...todos, input]);
    console.log(todos);
  };

  return (
    <div>
      <h1>Todos</h1>
      <input onInput={onInput} />
      <button onClick={addTodo}>Add</button>
      {todos.map((todo) => (
        <p>
          <input type="checkbox" />
          {todo}
        </p>
      ))}
    </div>
  );
};
