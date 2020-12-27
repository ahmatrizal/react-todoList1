import { css } from "@emotion/react";

export const todo = (theme) => {
  return css`
    position: relative;

    flex: 1 0 auto;
    text-align: center;

    max-height: 34px;
    margin: 10.3px 0 0;
    font-family: "Homemade Apple", san-serif;
    font-size: 24px;

    border-bottom: 1px solid ${theme.color.primary.red};
  `;
};

export const todoText = () => {
  return css`
    position: absolute;
    left: 50%;
    height: 50px;
    width: 100%;
    transform: translate(-50%);
  `;
};
