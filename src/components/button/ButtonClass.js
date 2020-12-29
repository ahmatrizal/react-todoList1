/**@jsx jsx */

import React from "react";
import { jsx } from "@emotion/react";
import PropTypes from "prop-types";
import Styled from "@emotion/styled";
import { withTheme } from "@emotion/react";

const StyledButton = Styled.button`
    font-size: 1.8rem;
    font-family: "Bungee", san-serif;
    color: ${(props) => props.textColor};
    text-align: ${(props) => props.align};

    cursor: pointer;
    background: unset;
    border: unset;
    outline: unset;
`;

class Button extends React.Component {
  render() {
    const { text, onClick, color, align, theme } = this.props;
    const {
      color: { primary }
    } = theme;

    let textColor;
    switch (color) {
      case "black":
        textColor = primary.black;
        break;
      case "red":
        textColor = primary.red;
        break;
      default:
        textColor = primary.black;
    }

    return (
      <StyledButton onClick={onClick} textColor={textColor} align={align}>
        {text}
      </StyledButton>
    );
  }

  static defaultProps = {
    text: "Button",
    color: "black",
    align: "left"
  };

  static proptypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    color: PropTypes.oneOf(["black", "red"]),
    align: PropTypes.oneOf(["left", "right"])
  };
}

export default withTheme(Button);
