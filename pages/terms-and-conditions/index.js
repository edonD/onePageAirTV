import React, { useEffect, useState } from "react";
import HomeHeader from "../../Components/Layout/HomeHeader";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

function index() {
  return (
    <Container>
      {" "}
      <Link href='/Home'>
        <Nav>
          <Logo>
            <Image
              src={"/images/brandLogo/symbol4.png"}
              width='40px'
              height='40px'
            />
          </Logo>

          <NavMenu>
            <span>HOME</span>
          </NavMenu>
        </Nav>
      </Link>
      <TextContainer>
        <h1>Terms and conditions</h1>
        <h2>Introduction</h2>
        <p>
          These Website Standard Terms and Conditions written on this webpage
          shall manage your use of our app and/or our website, accessible at
          http://www.airtv.live These Terms will be applied fully and affect
          your use of this App and/or Website. By using this App and/or Website,
          you agreed to accept all terms and conditions written in here. You
          must not use this App and/or Website if you disagree with any of these
          Website Standard Terms and Conditions. These Terms and Conditions have
          been generated with the help of the
          “https://www.termsandcondiitionssample.com”.
        </p>
        <h2>Intellectual Property Rights</h2>
        <p>
          Other than the content you own, under these Terms, AirTV sh.p.k.
          and/or its licensors own all the intellectual property rights and
          materials contained in this App and/or Website.
        </p>
        <h2>Restrictions</h2>
        <p>
          You are specifically restricted from all of the following: ● selling,
          sublicensing and/or otherwise commercializing any Website material ●
          using this App and/or Website in any way that is or may be damaging to
          this App and/or Website ● using this App and/or Website in any way
          that impacts user access to this App and/or Website ● using this App
          and/or Website contrary to applicable laws and regulations, or in any
          way may cause harm to the App and/or Website, or to any person or
          business entity ● engaging in any data mining, data harvesting, data
          extracting or any other similar activity in relation to this App
          and/or Website ● using this App and/or Website to engage in any
          advertising or marketing Certain areas of this App and/or Website are
          restricted from being accessed by you and AirTV sh.p.k. may further
          restrict access by you to any areas of this Website, at any time, in
          absolute discretion. Any user ID and password you may have for this
          Website are confidential and you must maintain confidentiality as
          well.
        </p>
        <h2>Your Content</h2>
        <p>
          In these Website Standard Terms and Conditions, “Your Content” shall
          mean any audio, video text, images or other material you choose to
          display on this Website. By displaying Your Content, you grant AirTV
          sh.p.k. a non-exclusive, worldwide irrevocable, sub licensable license
          to use, reproduce, adapt, publish, translate and distribute it in any
          and all media. Your Content must be your own and must not be invading
          any third-party’s rights. AirTV sh.p.k. reserves the right to remove
          any of Your Content from this Website at any time without notice.
        </p>
        <h2> Your Privacy</h2>
        <p>Please read Privacy Policy.</p>
        <h2> No warranties</h2>
        <p>
          This App and/or Website is provided “as is,” with all faults, and
          AirTV sh.p.k. express no representations or warranties of any kind
          related to this App and/or Website or the materials contained on this
          App and/or Website. Also, nothing contained on this App and/or Website
          shall be interpreted as advising you.
        </p>
        <h2> Limitation of liability</h2>
        <p>
          In no event shall AirTV sh.p.k., nor any of its officers, directors
          and employees, shall be held liable for anything arising out of or in
          any way connected with your use of this App and/or Website whether
          such liability is under contract. AirTV sh.p.k., including its
          officers, directors and employees shall not be held liable for any
          indirect, consequential or special liability arising out of or in any
          way related to your use of this App and/or Website.
        </p>
        <h2>Indemnification</h2>
        <p>
          You hereby indemnify to the fullest extent AirTV sh.p.k. from and
          against any and/or all liabilities, costs, demands, causes of action,
          damages and expenses arising in any way related to your breach of any
          of the provisions of these Terms.
        </p>
        <h2> Severability</h2>
        <p>
          If any provision of these Terms is found to be invalid under any
          applicable law, such provision shall be deleted without affecting the
          remaining provisions herein.
        </p>
        <h2>Variation of Terms</h2>
        <p>
          AirTV sh.p.k. is permitted to revise these Terms at any time as it
          sees fit, and by using this App and/or Website you are expected to
          review these Terms on a regular basis.
        </p>
        <h2>Assignment </h2>
        <p>
          The AirTV sh.p.k. is allowed to assign, transfer, and subcontract its
          rights and/or obligations under these Terms without any notification.
          However, you are not allowed to assign, transfer, or subcontract any
          of your rights and/or obligations under these Terms.
        </p>
        <h2>Entire Agreement</h2>
        <p>
          These Terms constitute the entire agreement between AirTV sh.p.k. and
          you in relation to your use of this App and/or Website, and supersedes
          all prior agreements and understandings.
        </p>
        <h2>Governing Law & Jurisdiction</h2>
        <p>
          These Terms will be governed by and interpreted in accordance with the
          laws of the State of al, and you submit to the non-exclusive
          jurisdiction of the state and federal courts located in al for the
          resolution of any disputes.
        </p>
      </TextContainer>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  background: white;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: #1a1a1a;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
  user-select: none;
  @media (max-width: 1200px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;
const Logo = styled.a`
  padding: 0;
  width: 60px;
  margin-top: 4px;
  max-height: 70px;
  background: transparent;
  font-size: 0;
  display: inline-block;
  cursor: pointer;
  img {
    display: block;
    background: transparent;
  }
`;
const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  cursor: pointer;
  margin-right: auto;

  margin-left: 25px;

  span {
    color: white;
    font-size: 13px;
    letter-spacing: 1.42px;
    line-height: 1.08;
    padding: 2px 0px;
    white-space: nowrap;
    position: relative;
  }
  &:hover {
    span:before {
      transform: scaleX(1);
      visibility: visible;
      opacity: 1 !important;
    }
  }
`;
const TextContainer = styled.div`
  color: black;
  width: 80%;
  height: 100%;
  text-align: left;
  margin-top: 80px;
`;

export default index;
