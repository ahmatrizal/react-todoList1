import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "@emotion/react";
import styled from "@emotion/styled";
import Container from "../../layout/Container";
import Item from "../../layout/Item";
import Button from "../button/Button";

const StyledTodoForm = styled.input`
  background: unset;
  border: unset;
  padding: 0 64px;
  width: 100%;
  /* flex: 1; */
  border-bottom: 1px solid ${(props) => props.theme.color.primary.red};
  outline: unset;

  font-family: "Homemade Apple", sans-serif;
  font-size: 16px;
  text-transform: lowercase;
`;

class todoForm extends React.Component {
  state = {
    value: ""
  };

  handleFromSubmit = (e) => {
    const { value } = this.state;
    const { addTodo } = this.props;
    e.preventDefault();
    if (!value) {
      alert("Todo tidak boleh kosong!");
      return;
    }

    if (value.length > 40) {
      alert("Todo terlalu panjang!");
      this.setState({
        value: ""
      });
      return;
    }
    addTodo(value);
    this.setState({
      value: ""
    });
  };

  onChangeHandle = (e) => {
    this.setState({
      value: e.target.value
    });
  };
  render() {
    const { showAdd, theme } = this.props;
    if (showAdd) {
      return (
        <section className="todoForm-container">
          <form onSubmit={this.handleFromSubmit}>
            <Container alignItems="flex-start">
              <Item flex={1} padding="0 0 0 16px">
                <StyledTodoForm
                  theme={theme}
                  type="text"
                  value={this.state.value}
                  onChange={this.onChangeHandle}
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
  }
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired
  };
}

export default withTheme(todoForm);
