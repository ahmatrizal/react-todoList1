import React from "react";
import Paper from "../components/paper/PaperClass";
import Header from "../components/header/HeaderClass";
import TodoForm from "../components/todoForm/todoFormClass";
import Todos from "../components/todos/TodosClass";

class TodoList extends React.Component {
  state = {
    todos: [
      {
        text: "Belajar React",
        isCompleted: false
      },
      {
        text: "Belajar Hooks",
        isCompleted: false
      }
    ],
    showAdd: false
  };

  addTodo = (value) => {
    const { todos } = this.state;
    if (todos.length < 10) {
      const addedTodo = [...todos, { text: value, isCompleted: false }];

      this.setState({
        todos: addedTodo
      });
    } else {
      alert("Todo sudah full!");
    }
  };

  completeTodo = (index) => {
    const addedTodo = [...this.state.todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

    this.setState({
      todos: addedTodo
    });
  };

  clearTodos = () => {
    if (this.state.showAdd) {
      alert("Close add todo untuk Menghapus data");
      return;
    }
    this.setState({
      todos: []
    });
  };

  showAddToggle = () => {
    this.setState((prevState) => ({ showAdd: !prevState.showAdd }));
  };
  render() {
    const { showAdd, todos } = this.state;
    return (
      <Paper>
        <Header
          showAddToggle={this.showAddToggle}
          showAdd={showAdd}
          clearTodos={this.clearTodos}
        />
        <TodoForm addTodo={this.addTodo} showAdd={showAdd} />
        <Todos todos={todos} completeTodo={this.completeTodo} />
      </Paper>
    );
  }
}

export default TodoList;
