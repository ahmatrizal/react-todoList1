import React from "react";
import PropTypes from "prop-types";

const useStateWithLocalStorage = (useStateKey) => {
  const [todos, setTodos] = React.useState(
    JSON.parse(localStorage.getItem(useStateKey)) || []
  );

  if (!localStorage) {
    alert("Storage Kosong");
  }

  React.useEffect(() => {
    localStorage.setItem(useStateKey, JSON.stringify(todos));
  }, [todos, useStateKey]);

  return [todos, setTodos];
};

useStateWithLocalStorage.propTypes = {
  useStateKey: PropTypes.string.isRequired
};

export default useStateWithLocalStorage;
