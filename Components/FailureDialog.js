import * as React from "react";

import Dialog from "@mui/material/Dialog";
import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";
export default function AlertDialog({ handleOpen, setfromchildPopup }) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const handleClick = () => {
      handleClickOpen(handleOpen);
      setTimeout(() => {
        handleClose();
      }, 2200);
    };
    if (handleOpen) {
      handleClick();
    }
  }, [handleOpen]);

  const handleClickOpen = (handleOpen) => {
    setOpen(handleOpen);
  };

  const handleClose = () => {
    setfromchildPopup(false);
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} fullScreen>
        <Content>
          <h1 style={{ marginBottom: "10px", color: "#6fba63" }}>
            Regjistrimi me sukses!
          </h1>
          <p> Do të ju njoftojmë për datën e lançimit</p>
          <Image width={50} height={50} src={"/images/email-svgrepo-com.svg"} />
        </Content>
      </Dialog>
    </div>
  );
}

const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
  h1 {
    @media screen and (max-width: 350px) {
      font-size: 20px;
    }
  }
  p {
    @media screen and (max-width: 300px) {
      font-size: 10px;
    }
  }
`;
