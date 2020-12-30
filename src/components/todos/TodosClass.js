import React from "react";
import PropTypes from "prop-types";
import Todo from "../todo/TodoClass";
import Container from "../../layout/Container";
import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";

const StyledTodos = styled.div`
  font-family: "Homemade Apple", san-serif;
  font-size: 24px;
  text-align: center;
  padding: 16px;
`;

const StyledBtnTodos = styled.span`
  font-family: "Bungee", san-serif;
`;
class Todos extends React.Component {
  render() {
    const { todos, completeTodo } = this.props;
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
            <StyledTodos>
              {" "}
              Click tombol <StyledBtnTodos>Add</StyledBtnTodos> untuk
              menambahkan Todo baru
            </StyledTodos>
          )}
        </Container>
      </section>
    );
  }
  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string
      })
    ),
    completeTodo: PropTypes.func.isRequired
  };
}

export default withTheme(Todos);
