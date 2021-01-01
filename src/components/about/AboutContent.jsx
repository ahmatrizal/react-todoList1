/**@jsx jsx */

import { jsx } from "@emotion/react";

import Container from "../../layout/Container";
import Item from "../../layout/Item";
import { Link } from "react-router-dom";
import * as styles from "./AboutContent.style";

const AboutContent = () => {
  return (
    <section>
      <Container flexDirection="column">
        <Item align="center">
          <h1 css={styles.AboutHeader}>Tentang kami</h1>
          <h3 css={styles.AboutHeader2}>Todo List App</h3>
        </Item>
        <Item>
          <Container>
            <p css={styles.AboutParagraph}>
              Aplikasi ini berfungsi untuk mencatat sebuah resolusi, disini
              disediakan maksimal 10 resolusi yang dapat di catat dan setelah
              resolusi tercapai bisa di coret ..read more!
            </p>
          </Container>
        </Item>
        <Item align="center">
          <Link to="/">
            <span css={styles.AboutLink}>Home</span>
          </Link>
        </Item>
      </Container>
    </section>
  );
};

export default AboutContent;
