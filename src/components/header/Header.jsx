// import React from "react";
/**@jsx jsx */
import { jsx } from "@emotion/react";
import PropTypes from "prop-types";
import Button from "../button/Button";
import { useTheme } from "@emotion/react";
// import cx from "classnames";
// import styles from "./Header.module.css";
import * as styles from "./Header.styles";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  const theme = useTheme();
  return (
    <section css={styles.header()}>
      <Button text={showAdd ? "(x)" : "Add"} onClick={showAddToggle} />
      <h1 css={styles.headerTitle(theme)}>Todo List</h1>
      <Button text="clear" onClick={clearTodos} color="red" align="right" />
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
