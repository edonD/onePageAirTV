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
      <motion.div
        animate={{
          scale: [
            1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1,
            1.1,
          ],
          transition: {
            duration: 10.5,
          },
        }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        <ImageContainer>
          <Image src='/images/splash.png' layout='fill' objectFit='cover' />
        </ImageContainer>
      </motion.div>
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

const ImageContainer = styled.div`
  height: 200px;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  position: relative;
`;

export default Splash;
