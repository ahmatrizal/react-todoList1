/** @jsx jsx */

import { jsx } from "@emotion/react";
// import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { useTheme } from "@emotion/react";
// import styles from "./Paper.module.css";
import * as styles from "./Paper.styles";

const Paper = ({ children }) => {
  const theme = useTheme();
  return (
    <div css={styles.Container()}>
      <div css={styles.Frame(theme)}>{children};</div>
    </div>
  );
};

Paper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
export default Paper;
