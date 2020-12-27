/** @jsx jsx */

import { jsx } from "@emotion/react";
// import React from "react";
import PropTypes from "prop-types";
// import cx from "classnames";
// import styles from "./Todo.module.css";
import * as styles from "./Todo.styles";
import { useTheme } from "@emotion/react";

const Todo = ({ text, completeTodo, index, isCompleted }) => {
  const theme = useTheme();
  return (
    <div css={styles.todo(theme)} onClick={() => completeTodo(index)}>
      <span
        css={styles.todoText()}
        style={{ textDecoration: isCompleted ? "line-through" : "initial" }}
      >
        {text}
      </span>
    </div>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completeTodo: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isCompleted: PropTypes.bool.isRequired
};

export default Todo;
