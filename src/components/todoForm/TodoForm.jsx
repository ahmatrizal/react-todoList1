/** @jsx jsx */

import { jsx } from "@emotion/react";
import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";
import * as styles from "./todoForm.styles";
import Container from "../../layout/Container";
import Item from "../../layout/Item";
import Button from "../button/Button";
// import cx from "classnames";
// import styles from "./todoForm.module.css";

const TodoForm = ({ addTodo, showAdd }) => {
  const theme = useTheme();
  const [value, setValue] = React.useState("");
  const handleFromSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("Todo tidak boleh kosong!");
      return;
    }

    if (value.length > 40) {
      alert("Todo terlalu panjang!");
      setValue("");
      return;
    }
    addTodo(value);
    setValue("");
  };

  if (showAdd) {
    return (
      <section className="todoForm-container">
        <form onSubmit={handleFromSubmit}>
          <Container alignItems="flex-start">
            <Item flex={1} padding="0 0 0 16px">
              <input
                type="text"
                css={styles.addInput({ theme })}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </Item>
            <Item>
              <Button text="add" />
            </Item>
          </Container>
        </form>
      </section>
    );
  } else {
    return null;
  }
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};

export default TodoForm;
