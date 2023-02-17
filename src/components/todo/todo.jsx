import React, { useState } from "react";

export const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    {
      title: "first",
      isComplete: false,
    },
    {
      title: "second",
      isComplete: true,
    },
  ]);

  const onInput = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  };

  const addTodo = () => {
    setTodos([...todos, { title: input, isComplete: false }]);
    setInput("");
  };

  const toggleChecked = (todo) => {
    const newTodos = [...todos];
    const updatedTodo = newTodos.find((x) => x.title === todo.title);
    updatedTodo.isComplete = !todo.isComplete;
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todos</h1>
      <input onInput={onInput} value={input} />
      <button onClick={addTodo}>Add</button>
      {todos.map((todo, index) => (
        <p key={index}>
          <input
            type="checkbox"
            checked={todo.isComplete}
            onChange={() => toggleChecked(todo)}
          />
          {todo.title}
        </p>
      ))}
    </div>
  );
};
