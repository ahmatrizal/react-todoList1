import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "belajar react"
    },
    {
      text: "belajar react"
    },
    {
      text: "belajar react"
    }
  ];
  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
