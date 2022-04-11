import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
function Subscription() {
  return (
    <Container>
      <Wrapper>
        <StyledTextField
          variant='outlined'
          autoComplete='new-password'
          color='primary'
          required={true}
          onChange={(event) => {
            // setConfirmationCode(event.target.value);
          }}
          inputProps={{}}
          defaultValue=''
          helperText=''
          type='email'
          name='Regjistrohu me email'
          placeholder='Regjistrohu me email'
          id='Regjistrohu me email'
        />
        <StyledButtonHome onClick={() => {}}>Regjistrohu</StyledButtonHome>
      </Wrapper>
      <Intro>
        <p>
          <span>Ofertë</span> Regjistrohu dhe merr muajin e parë falas!
        </p>
      </Intro>
    </Container>
  );
}

const Container = styled.form`
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

const Wrapper = styled.div`
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

const StyledButtonHome = styled(Button)`
  && {
    background-color: #2973d5;
    width: 20%;
    height: 56px;
    margin-left: -10px;
    border-radius: 0px;
    color: white;
    &:hover {
      background-color: #358eff;
    }
    @media screen and (max-width: 1400px) {
      font-size: 12px;
    }
    @media screen and (max-width: 1000px) {
      font-size: 8px;
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
export default Subscription;
