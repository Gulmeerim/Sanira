import { useState } from "react";
import "./TodoForm.css";
import TodoList from "./TodoList";

export const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [todos, setTodos] = useState([]);

  function handleInputChange(event) {
    setTitle(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newTodo = {
      title: title,
      date: new Date(date).toLocaleDateString("ru-RU", {
        dateStyle: "full",
      }),
      id: Date.now(),
    };

    setTodos([...todos, newTodo]);
    setTitle("");
    setDate("");
  }

  return (
    <>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          className="title-input"
          placeholder="enter your todo..."
          value={title}
          onChange={handleInputChange}
        />
        <input
          className="date-input"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">add todo</button>
      </form>
      <TodoList todos={todos} />
    </>
  );
};
