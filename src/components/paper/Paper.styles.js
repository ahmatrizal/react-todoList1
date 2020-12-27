import { css } from "@emotion/react";

export const Container = () => {
  return css`
    height: 800px;
    width: 600px;
    background-color: #f2eecb;
    border-radius: 4px;
    padding: 32px;
  `;
};

export const Frame = (theme) => {
  return css`
    border: 1px solid ${theme.color.primary.black};
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;
};
