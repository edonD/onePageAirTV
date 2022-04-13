import Auth from "@aws-amplify/auth";
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Stream } from "@styled-icons/material/Stream";
import Image from "next/image";

function Splash() {
  const router = useRouter();
  useEffect(() => {
    router.push("/Home", undefined, { shallow: true });
  }, []);

  return (
    <Container>
      <ImageContainer
        animate={{
          scale: [
            1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1,
            1.1,
          ],
          transition: {
            duration: 8.5,
          },
        }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        <Image src='/images/splash.png' layout='fill' objectFit='contain' />
      </ImageContainer>
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
  position: absolute;
  left: 0px;
  top: 0px;

  @media screen and (max-width: 500px) {
    height: 100vh;
  }
`;

const ImageContainer = styled(motion.div)`
  height: 120px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  position: relative;
  @media screen and (max-width: 500px) {
    width: 80%;
  }
`;

export default Splash;
