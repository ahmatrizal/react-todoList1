import React from "react";
// import { jsx } from "@emotion/react";
import PropTypes from "prop-types";
import Button from "../button/ButtonClass";
import { withTheme } from "@emotion/react";
// import cx from "classnames";
// import styles from "./Header.module.css";
// import * as styles from "./Header.styles";
import Container from "../../layout/Container";
import Item from "../../layout/Item";
import Styled from "@emotion/styled";

const StyledH1 = Styled.h1`
  text-align: center;
  font-size: 3.6rem;
  font-family: "Homemade Apple", san-serif;
  text-transform: lowercase;
  color: ${(props) => props.theme.color.primary.black};
`;

class Header extends React.Component {
  render() {
    const { showAddToggle, showAdd, clearTodos, theme } = this.props;
    return (
      <section classnames="header-component">
        <Container alignItems="flex-start">
          <Item flex={1}>
            <Button text={showAdd ? "(x)" : "Add"} onClick={showAddToggle} />
          </Item>
          <Item flex={2}>
            <StyledH1 theme={theme}>Todo List</StyledH1>
          </Item>
          <Item flex={1} align="right">
            <Button
              text="clear"
              onClick={clearTodos}
              color="red"
              align="right"
            />
          </Item>
        </Container>
      </section>
    );
  }

  static propTypes = {
    showAddToggle: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired,
    clearTodos: PropTypes.func.isRequired
  };
}

export default withTheme(Header);
