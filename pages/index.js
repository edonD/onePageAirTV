import React from "react";

import styled from "styled-components";

import { Stream } from "@styled-icons/material/Stream";

function Splash() {
  return (
    <Container>
      <StreamStyled />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
    to right bottom,
    #121f3e,
    #1b2b4c,
    #24375b,
    #2c436a,
    #35507a
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StreamStyled = styled(Stream)`
  height: 60%;
  color: white;
`;

export default Splash;
