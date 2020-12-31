import React from "react";

import Paper from "../components/paper/Paper";
import Container from "../layout/Container";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Paper>
      <Container>
        Halaman About
        <Link to="/">Index</Link>
      </Container>
    </Paper>
  );
};

export default About;
