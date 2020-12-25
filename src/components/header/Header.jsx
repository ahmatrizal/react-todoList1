import React from "react";
import PropTypes from "prop-types";
import Button from "../button/Button";
import cx from "classnames";
import styles from "./Header.module.css";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  return (
    <section className={styles.header}>
      <Button text={showAdd ? "(x)" : "Add"} onClick={showAddToggle} />
      <h1 className={styles.headerTitle}>Todo List</h1>
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
