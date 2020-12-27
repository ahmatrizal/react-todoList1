/** @jsx jsx */

import { jsx } from "@emotion/react";
import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";
import * as styles from "./todoForm.styles";
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
      <section css={styles.add()}>
        <form css={styles.addForm()} onSubmit={handleFromSubmit}>
          <input
            type="text"
            css={styles.addInput({ theme })}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button css={styles.addBtn({ theme })}>Add</button>
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
