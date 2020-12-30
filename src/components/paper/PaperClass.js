import React from "react";

import PropTypes from "prop-types";
import { withTheme } from "@emotion/react";
import Styled from "@emotion/styled";
// import Container from "../../layout/Container";
// import Item from "../../layout/Item";

const StyledPaper = Styled.div`
  height: 800px;
    width: 600px;
    background-color: #f2eecb;
    border-radius: 4px;
    padding: 32px;
`;

const StyledFrame = Styled.div`
  border: 1px solid ${(props) => props.theme.color.primary.black};
    height: 100%;
`;

class Paper extends React.Component {
  render() {
    const { children, theme } = this.props;

    return (
      // <Container>
      // <Item flex-direction="column" justify-content="space-between">
      <StyledPaper>
        <StyledFrame css={Styled.div(theme)}>{children};</StyledFrame>
      </StyledPaper>
      //   </Item>
      // </Container>
    );
  }
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };
}

export default withTheme(Paper);
