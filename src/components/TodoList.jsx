import React from "react";
import "./TodoList.css";

export default function TodoList({ todos }) {
  return todos.map((item) => (
    <div className="todo-item" key={item.id}>
      <p className="title">{item.title}</p>
      <p className="date">{item.date}</p>
    </div>
  ));
}
