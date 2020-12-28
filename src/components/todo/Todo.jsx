/** @jsx jsx */

import { jsx } from "@emotion/react";
// import React from "react";
import PropTypes from "prop-types";
// import cx from "classnames";
// import styles from "./Todo.module.css";
import * as styles from "./Todo.styles";
import { useTheme } from "@emotion/react";
import Container from "../../layout/Container";
import Item from "../../layout/Item";

const Todo = ({ text, completeTodo, index, isCompleted }) => {
  const theme = useTheme();
  return (
    <div css={styles.todo(theme)} onClick={() => completeTodo(index)}>
      <Container>
        <Item align="center">
          <span
            css={styles.todoText()}
            style={{ textDecoration: isCompleted ? "line-through" : "initial" }}
          >
            {text}
          </span>
        </Item>
      </Container>
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
