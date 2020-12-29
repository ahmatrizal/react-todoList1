/**@jsx jsx */

import { jsx } from "@emotion/react";
import PropTypes from "prop-types";
// import cx from "classnames";
import { useTheme } from "@emotion/react";

// import styles from "./Button.module.css";
import * as styles from "./Button.styles";

const Button = ({ text, onClick, color, align }) => {
  const theme = useTheme();

  return jsx(
    "button",
    {
      css: styles.button({ align, color, theme }),
      onClick: onClick
    },
    text
  );
};

Button.defaultProps = {
  text: "Button",
  color: "black",
  align: "left"
};

Button.proptypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["black", "red"]),
  align: PropTypes.oneOf(["left", "right"])
};

export default Button;
