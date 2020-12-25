import React from "react";
import { ThemeProvider } from "@emotion/react";
import "./styles.css";
import TodoList from "./pages/TodoList";

const theme = {
  color: {
    primary: {
      black: "#484848",
      red: "#e06262"
    }
  }
};
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <TodoList />
    </ThemeProvider>
  );
}
