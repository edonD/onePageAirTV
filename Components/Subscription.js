import React, { useState } from "react";
import styled from "styled-components";
import LoadingButton from "@mui/lab/LoadingButton";
import { TextField } from "@material-ui/core";
import FailureDialog from "./FailureDialog";
import { test } from "../app/store/actions/api";
import { connect } from "react-redux";

const mapStatetoProps = (state) => ({});

const mapDispatchtoProps = (dispatch) => {
  return {
    test: (onSuccess = () => {}, body = {}) => dispatch(test(body, onSuccess)),
  };
};

function Subscription(props) {
  const SubmitConfirm = (event) => {
    event.preventDefault();
    setLoading(true);

    props.test(
      () => {
        setEmail("");
        setLoading(false);
        setPopup(true);
      },
      { info: `email:${email}` }
    );
  };
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(false);

  return (
    <Container>
      <FailureDialog handleOpen={popup} setfromchildPopup={setPopup} />
      <Wrapper onSubmit={SubmitConfirm}>
        <StyledTextField
          variant='outlined'
          required
          type='email'
          InputProps={{}}
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          placeholder='Regjistrohu me email'
          id='Regjistrohu me email'
        />

        <StyledButtonHome loadingPosition='end' loading={loading} type='submit'>
          Regjistrohu
        </StyledButtonHome>
      </Wrapper>
      <Intro>
        <p>
          <span>Ofertë</span> Regjistrohu dhe merr muajin e parë falas!
        </p>
      </Intro>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  height: 120px;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  margin: 5px;
  @media screen and (max-width: 1400px) {
    margin: 0px;
  }
`;

const PopupContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  left: 0px;
  z-index: 1;
`;

const Wrapper = styled.form`
  width: 60%;
  height: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px;
  border: 1px solid green;
  @media screen and (max-width: 1400px) {
    width: 80%;
  }

  @media screen and (max-width: 800px) {
    margin: 0px;
    width: 100%;
  }
`;
const StyledTextField = styled(TextField)`
  background: #e9f0ff;
  border-radius: 4px;
  width: 80%;
  @media screen and (max-width: 1400px) {
    width: 100%;
  }
`;

const StyledButtonHome = styled(LoadingButton)`
  && {
    background-color: #2973d5;
    width: 20%;
    height: 56px;
    margin-left: 10px;
    font-weight: 600;
    color: white;
    &.Mui-disabled {
      color: black;
      background-color: #acd1ff;
    }
    &:hover {
      background-color: #358eff;
    }
    @media screen and (max-width: 1400px) {
      font-size: 12px;

      width: 30%;
    }
    @media screen and (max-width: 800px) {
      font-size: 8px;
      justify-content: flex-start;
      width: 40%;
    }
  }
`;
const Intro = styled.div`
  width: 100%;
  position: relative;
  background: transparent;
  z-index: 1;

  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
  p {
    width: 60%;
    background: transparent;
    margin: 0;
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 20px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 1.5px;
    @media screen and (max-width: 600px) {
      width: 100%;
    }
    @media screen and (max-width: 1400px), screen and (max-height: 600px) {
      font-size: 15px;
      line-height: 1.5;

      width: 100%;
      background: transparent;
      letter-spacing: 0.5px;
    }
    @media screen and (max-width: 1000px), screen and (max-height: 600px) {
      font-size: 10px;
      line-height: 1.5;

      width: 100%;
      background: transparent;
      letter-spacing: 0.5px;
    }
  }
  span {
    border-radius: 4px;
    background: red;
    color: black;
    letter-spacing: 0.5px;
    padding: 5px;
    font-size: 28px;
    @media screen and (max-width: 600px) {
      font-size: 10px;
    }
    @media screen and (max-width: 1400px) {
      font-size: 18px;
    }
  }
`;

export default connect(mapStatetoProps, mapDispatchtoProps)(Subscription);
