/**@jsx jsx */

import { jsx } from "@emotion/react";
// import React from "react";
import PropTypes from "prop-types";
import Todo from "../todo/TodoClass";
// import cx from "classnames";
// import styles from "./Todos.module.css";
import * as styles from "./Todos.styles";
import Container from "../../layout/Container";

const Todos = ({ todos, completeTodo }) => {
  return (
    <section className="todos-component">
      <Container flexDirection="column" minHeight="500px">
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
            Click tombol <span css={styles.btnPlaceholderText()}>Add</span>{" "}
            untuk menambahkan Todo baru
          </div>
        )}
      </Container>
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
