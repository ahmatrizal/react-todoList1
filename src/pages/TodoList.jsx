import React, { useState, useEffect } from "react";

import useStateWithLocalStorage from "../components/hooks/useStateWithLocalStorage";

import Paper from "../components/paper/Paper";
import Header from "../components/header/Header";
import TodoForm from "../components/todoForm/TodoForm";
import Todos from "../components/todos/Todos";

const TodoList = () => {
  const [todos, setTodos] = useStateWithLocalStorage("todos");

  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (value) => {
    if (todos.length < 10) {
      const addedTodo = [...todos, { text: value, isCompleted: false }];

      setTodos(addedTodo);
    } else {
      alert("Todo sudah full!");
    }
  };

  const clearTodos = () => {
    localStorage.removeItem("todos");
  };

  const completeTodo = (index) => {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

    setTodos(addedTodo);
  };

  const showAddToggle = () => setShowAdd(!showAdd);

  return (
    <Paper>
      <Header
        showAddToggle={showAddToggle}
        showAdd={showAdd}
        clearTodos={clearTodos}
      />
      <TodoForm addTodo={addTodo} showAdd={showAdd} />
      <Todos todos={todos} completeTodo={completeTodo} />
    </Paper>
  );
};

export default TodoList;
