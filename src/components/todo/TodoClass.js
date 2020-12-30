import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";

const StyledTodo = styled.div`
  position: relative;

  flex: 1 0 auto;
  text-align: center;

  max-height: 34px;
  margin: 10.3px 0 0;
  font-family: "Homemade Apple", san-serif;
  font-size: 24px;
  border-bottom: 1px solid ${(props) => props.theme.color.primary.red};
`;

const StyledTodoText = styled.span`
  position: absolute;
  left: 50%;
  height: 50px;
  width: 100%;
  transform: translate(-50%);

  text-decoration: ${(props) =>
    props.isCompleted ? "line-through" : "initial"};
  color: ${(props) => props.theme.color.primary.black};
`;

class Todo extends React.Component {
  render() {
    const { text, completeTodo, index, isCompleted, theme } = this.props;
    return (
      <StyledTodo theme={theme} onClick={() => completeTodo(index)}>
        <StyledTodoText isCompleted={isCompleted} theme={theme}>
          {text}
        </StyledTodoText>
      </StyledTodo>
    );
  }
  static propTypes = {
    text: PropTypes.string.isRequired,
    completeTodo: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    isCompleted: PropTypes.bool.isRequired
  };
}

export default withTheme(Todo);
