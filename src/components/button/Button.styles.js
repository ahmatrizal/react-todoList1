import { css } from "@emotion/react";

export const button = ({ color, align }) => {
  let textColor;

  switch (textColor) {
    case "black":
      textColor = "#484848";
      break;
    case "red":
      textColor = "#e06262";
      break;
    default:
      textColor = "#484848";
  }

  return css`
    width: 24%;
    font-size: 1.8rem;
    font-family: "Bungee", san-serif;
    color: ${textColor};
    align-items: ${align};

    padding: 16px;
    cursor: pointer;
    background: unset;
    border: unset;
    outline: unset;
  `;
};
