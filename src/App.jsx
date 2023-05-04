import "./App.css";
import { useReducer } from "react";
import { Home } from "./components/home/home";
import { Todo } from "./components/todo/todo";
import { Header } from "./components/header/header";
import { HashRouter, Routes, Route } from "react-router-dom";
import { TodoContext } from "./state/todo/todo-context";
import { todoReducer } from "./state/todo/todo.reducer";
import { Chat } from "./components/chat/chat";
import { Product } from "./components/product/product";

function App() {
  const [todoState, todoDispatch] = useReducer(todoReducer, {
    todos: [
      // {
      //   title: "first1",
      //   isComplete: false,
      // },
      // {
      //   title: "second2",
      //   isComplete: true,
      // },
    ],
  });

  return (
    <HashRouter>
      <Header />
      <TodoContext.Provider value={{ todoState, todoDispatch }}>
        <Routes>
          {/* http://localhost:3000/#/ */}
          <Route path="/" element={<Home />} />
          {/* http://localhost:3000/#/todo */}
          <Route path="/todo" element={<Todo />} />
          {/* http://localhost:3000/#/chat */}
          <Route path="/chat" element={<Chat />} />
          {/* http://localhost:3000/#/product/{id} */}
          <Route path="/products/:productId" element={<Product />} />
        </Routes>
      </TodoContext.Provider>
    </HashRouter>
  );
}

export default App;
