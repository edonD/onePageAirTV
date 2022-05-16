import React from "react";
import styled from "styled-components";
import ReactCountryFlag from "react-country-flag";
import Link from "next/link";
import Image from "next/image";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSnapchat,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <Footercontainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <WebsiteRights>
              ©{new Date().getFullYear()} All rights reserved.
              <Link href='/privacy-policy'>
                <TextContainer>
                  <span>Privacy Policy</span>
                </TextContainer>
              </Link>
              <Link href='/terms-and-conditions'>
                <TextContainer>
                  <span>Terms and conditions</span>
                </TextContainer>
              </Link>
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href='//www.facebook.com'
                target='_blank'
                aria-label='Facebook'
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href='//www.instagram.com'
                target='_blank'
                aria-label='Instagram'
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href='//www.snapchat.com'
                target='_blank'
                aria-label='Snapchat'
              >
                <FaSnapchat />
              </SocialIconLink>
              <SocialIconLink
                href='//www.youtube.com'
                target='_blank'
                aria-label='Youtube'
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href='//www.linkedin.com'
                target='_blank'
                aria-label='Linkedin'
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </Footercontainer>
  );
}

const Footercontainer = styled.div`
  background-color: #1a1a1a;
  width: 100%;
  height: 100%;
  height: fit-content;
`;

const FooterWrap = styled.div`
  padding: 48px 24 px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0 auto;
`;

const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
  height: 100%;
`;
const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  cursor: pointer;
`;

const SocialMediaWrap = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1100px;
  margin: 40px auto 20px auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
export default Footer;
