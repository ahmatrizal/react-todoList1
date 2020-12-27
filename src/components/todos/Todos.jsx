/**@jsx jsx */

import { jsx } from "@emotion/react";
import React from "react";
import PropTypes from "prop-types";
import Todo from "../todo/Todo";
// import cx from "classnames";
// import styles from "./Todos.module.css";
import { useTheme } from "@emotion/react";
import * as styles from "./Todos.styles";

const Todos = ({ todos, completeTodo }) => {
  const theme = useTheme();
  return (
    <section css={styles.todos()}>
      {todos.length > 0 &&
        todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              text={todo.text}
              isCompleted={todo.isCompleted}
              completeTodo={completeTodo}
              index={index}
            />
          );
        })}
      {todos.length === 0 && (
        <div css={styles.todoPlaceholderText()}>
          {" "}
          Click tombol <span css={styles.btnPlaceholderText()}>Add</span> untuk
          menambahkan Todo baru
        </div>
      )}
    </section>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  ),
  completeTodo: PropTypes.func.isRequired
};
export default Todos;
