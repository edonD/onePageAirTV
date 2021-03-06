import styled from "styled-components";
import HomeHeader from "../../Components/Layout/HomeHeader";
import Logo from "../../Components/Logo";
import Subscription from "../../Components/Subscription";
import Package from "../../Components/Package";
import Button from "@material-ui/core/Button";
import { StylesProvider } from "@material-ui/core";
import WorksOn from "../../Components/WorksOn";
import Apple from "../../icons/apple.svg";
import Amazon from "../../icons/amazon.svg";
import Android from "../../icons/android.svg";
import AppleTv from "../../icons/apple-tv.svg";
import Chromecast from "../../icons/chromecast-device.svg";
import SmartTV from "../../icons/smart-tv.svg";
import Xbox from "../../icons/Xbox_Logo.svg";
import Footer from "../../Components/Footer";
import { useRouter } from "next/router";
import Multitheme from "../../Components/Multitheme";
import TemplateofAllChannels from "../../Components/TemplateofAllChannels";
import AboutUs from "../../Components/AboutUs";
import { useEffect, useState } from "react";
import Head from "next/head";
import TemplateofAllDevices from "../../Components/TemplateofAllDevices";
// import ButtonFooter from "../../Components/VOD/Components/ButtonFooter";
import Image from "next/image";

import Auth from "@aws-amplify/auth";

import _ from "lodash";

function Home(props) {
  useEffect(() => {
    Auth.currentAuthenticatedUser({
      bypassCache: false,
    })
      .then((user) => {
        router.push("/Home", undefined, { shallow: true });
      })
      .catch((err) => {
        router.push("/Home", undefined, { shallow: true });
      });
  }, []);
  const [allChannelsPopup, setAllChannelsPopup] = useState(false);
  const router = useRouter();
  return (
    <HomeHeader>
      <Container>
        <BannerHome id='Banner'>
          <Intro>
            <span>Platforma më cilësore shqiptare në botë po vjen!</span>

            <p>
              Funksionon kudo në botë. Të gjitha kanalet shqiptare, ku
              përfshihen lajmet, sporti, historia, filmat dhe shumë të tjera.
              Shumë kanale të huaja. Deri në 5 pajisje njëkohësisht.
            </p>
          </Intro>
          <Video>
            <video
              autoPlay
              muted
              loop
              playsInline
              disablePictureInPicture
              src='/videos/temporary-video.mp4'
              type='video/mp4'
            />
          </Video>
          <Subscription />
        </BannerHome>
        {/* <Kanalet id='Kanalet'>
          <Channels>
            <Logo logosrc='logo/dukagjini.png' alt='dukagjini'></Logo>
            <Logo logosrc='logo/kanal10.png' alt='kanal10'></Logo>
            <Logo logosrc='logo/klan.png' alt='klan'></Logo>
            <Logo logosrc='logo/klanK.png' alt='klanK'></Logo>
            <Logo logosrc='logo/Ktv.png' alt='Ktv'></Logo>
            <Logo logosrc='logo/rtk.jpg' alt='rtk'></Logo>
            <Logo logosrc='logo/rtv21.png' alt='rtv21'></Logo>
            <Logo logosrc='logo/t7.png' alt='t7'></Logo>
            <Logo logosrc='logo/atv.jpg' alt='atv' differentiator='atv'></Logo>
            <Logo logosrc='logo/rtsh.png' alt='rtsh'></Logo>
            <Logo logosrc='logo/kanal7.png' alt='kanal7'></Logo>
            { <Logo logosrc='logo/topchannel.png'></Logo> }
            <Logo logosrc='logo/abc.png' alt='abc'></Logo>
            <Logo logosrc='logo/klanplus.png' alt='klanplus'></Logo>
            { <Logo logosrc='logo/news24.png'></Logo> }
            { <Logo logosrc='logo/oranews.png'></Logo> }
            <Logo logosrc='logo/alsatm.png' alt='alsatm'></Logo>
            <Logo logosrc='logo/rtshsport.svg' alt='rtshsport'></Logo>
            <Logo logosrc='logo/vizionplus.png' alt='vizionplus'></Logo>
          </Channels>
          <TemplateofAllChannels trigger={allChannelsPopup} />
          <h1>Kudo në botë, qasje në të gjitha kanalet shqiptare </h1>
          <h2>
            Pa proces të instalimit. Thjesht abonohu the shijoje eksperiencën.
          </h2>
        </Kanalet>*/}
        <AddOns id='AddOns'>
          <Multitheme />
        </AddOns>
        <Ofertat id='Ofertat'>
          <PackageOfertaContainer>
            <p>Ofertat tona! </p>
          </PackageOfertaContainer>
          <PackageContainer>
            <Package
              offer='MOBILE'
              oldPrice='6.99'
              price='4.99'
              nrikanaleve='250'
              kanaleTotal='2000'
              LiveEventscheck={false}
              kanaletepreferuara={false}
              isBlackstate='gray'
              pajisjet='1 Smartphone'
              hd={false}
              size='small'
              VOD='0'
            ></Package>
            <Package
              offer='FAMILY+'
              oldPrice='13.99'
              price='8.99'
              nrikanaleve='250'
              kanaleTotal='2000'
              LiveEventscheck={true}
              kanaletepreferuara='1'
              netflix={true}
              isBlackstate='orange'
              pajisjet='3 Paisje'
              hd={true}
              size='medium'
              VOD='100'
            ></Package>
            <Package
              offer='PREMIUM'
              oldPrice='20.99'
              price='14.99'
              nrikanaleve='250'
              kanaleTotal='2000'
              LiveEventscheck={true}
              kanaletepreferuara={true}
              isBlackstate='purple'
              netflix={true}
              size='big'
              pajisjet='5 Paisje'
              hd={true}
              VOD='100'
            ></Package>
          </PackageContainer>
        </Ofertat>{" "}
        <Pajisjet id='Pajisjet'>
          <FourthActDescription>
            <h1>Air TV në të gjitha pajisjet.</h1>
            <p>
              Air TV në të gjitha dhomat. Qoftë në dhomën e ndenjes, dhomën e
              gjumit, kuzhinën apo banjën, funksionon kudo! Argëtimi më i mirë
              për të gjithë familjen.
            </p>
            <ButtonDiv>
              <StylesProvider injectFirst>
                <TemplateofAllDevices />
              </StylesProvider>
            </ButtonDiv>
          </FourthActDescription>
          <FourthActImage>
            <Image
              layout='fill'
              objectFit='contain'
              src='/images/alldevices.png'
              alt='pajisjet'
            ></Image>
          </FourthActImage>
        </Pajisjet>
        <Works id='Punon'>
          <WorksOn icon={Apple} title='Apple'></WorksOn>
          <WorksOn icon={Android} title='Android'></WorksOn>
          <WorksOn icon={Amazon} title='Amazon'></WorksOn>
          <WorksOn icon={AppleTv} title='Apple TV'></WorksOn>
          <WorksOn icon={Chromecast} title='Chromecast'></WorksOn>
          <WorksOn icon={SmartTV} title='Smart TV'></WorksOn>
          <WorksOn icon={Xbox} title='Xbox'></WorksOn>
        </Works>
        <AboutUs />
        {/* <ButtonFooter /> */}
        <Footer id='Footer' />
      </Container>
    </HomeHeader>
  );
}

const Container = styled.div`
  top: 0;
  text-align: center;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const BannerHome = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  @media screen and (max-height: 600px) {
    justify-content: flex-end;
  }
  @media screen and (min-width: 800px) and (max-width: 1350px) {
    height: 75vh;
    padding-bottom: 100px;
  }
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 100%;
  }
`;
const Kanalet = styled.div`
  margin: 40px;
  position: relative;
  height: fit-content;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f4f4f4;

  @media screen and (max-width: 600px) {
    height: fit-content;
  }

  a {
    margin-top: 50px;

    font-weight: bold;
    color: #0063e5;
    background-color: transparent;
    margin-bottom: 12px;
    width: 30%;
    cursor: pointer;
    letter-spacing: 1.5px;
    font-size: 25px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;
    @media screen and (max-width: 600px) {
      font-size: 15px;
    }
    @media screen and (min-width: 600px) and (max-width: 1900px) {
      font-size: 20px;
    }

    &:hover {
      color: #0483ee;
    }
  }
  h1 {
    color: black;
    font-size: 50px;
    @media screen and (max-width: 600px) {
      font-size: 15px;
    }
    @media screen and (min-width: 600px) and (max-width: 1900px) {
      font-size: 20px;
    }
  }

  h2 {
    margin: 0 200px 100px;
    color: black;
    font-size: 25px;
    font-weight: 500;
    @media screen and (max-width: 600px) {
      font-size: 10px;
      margin: 0 40px 40px 40px;
    }
    @media screen and (min-width: 600px) and (max-width: 1900px) {
      font-size: 20px;
      margin: 0 40px 40px 40px;
    }
  }
`;
const Channels = styled.div`
  margin-top: 60px;
  display: grid;
  grid-row-gap: 50px;
  grid-column-gap: 30px;
  grid-template-columns: repeat(8, 1fr);
  @media screen and (max-width: 600px) {
    display: grid;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (min-width: 900px) and (max-width: 1400px) {
    display: grid;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    grid-template-columns: repeat(6, 1fr);
  }

  @media screen and (min-width: 600px) and (max-width: 900px) {
    display: grid;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
  }
`;
const Ofertat = styled.div`
  height: 850px;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  background: #f4f4f4;
  position: relative;

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 2890px;
  }
`;

const PackageOfertaContainer = styled.div`
  user-select: none;
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  p {
    position: relative;
    top: 0;
    color: black;
    font-weight: bold;

    font-size: 40px;
  }
  @media screen and (max-width: 1000px) {
    width: 20%;
    height: 5%;
  }
`;
const PackageContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  cursor: pointer;
  overflow: hidden;
  background: transparent;
  position: relative;
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const AddOns = styled.div`
  height: 900px;
  width: 80%;
  display: flex;
  margin: 40px;

  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: transparent;
  position: relative;
`;
const ButtonDiv = styled.div`
  width: 300px;
  height: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 1400px) {
    width: 300px;
    height: 45px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 20px;
  }
`;
const Pajisjet = styled.div`
  height: 670px;
  width: 80%;
  display: flex;
  margin: 40px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #f4f4f4;
  position: relative;

  @media screen and (max-width: 1400px) {
    width: 80%;
    height: fit-content;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
`;

const FourthActDescription = styled.div`
  height: 100%;
  width: 35%;
  margin-left: 45px;
  margin-right: 60px;
  letter-spacing: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  background: transparent;
  position: relative;
  text-align: left;
  p {
    color: black;
    font-size: 20px;
  }
  h1 {
    font-size: 50px;
    color: black;
    @media screen and (max-width: 800px) {
      font-size: 35px;
    }
    @media screen and (max-width: 400px) {
      font-size: 30px;
    }
  }
  @media screen and (min-width: 800px) and (max-width: 1400px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 15%;
    width: 40%;
    margin-top: 20px;
    padding: 5px;
    text-align: center;
  }
  @media screen and (max-width: 800px) {
    height: 15%;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding: 5px;
    text-align: center;
  }
`;

const FourthActImage = styled.div`
  height: 100%;
  width: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: transparent;
  position: relative;

  Image {
    max-width: 100%;
    max-height: 100%;
    @media screen and (max-width: 800px) {
      height: auto;
      width: auto;
    }
  }
  @media screen and (max-width: 1400px) {
    margin-top: 20px;
    height: 100%;
    width: 85%;
  }
`;

const Intro = styled.div`
  width: 50%;
  position: relative;
  background: transparent;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
  span {
    font-weight: bold;
    background: transparent;
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 55px;
    line-height: 1.15;
    letter-spacing: 1.5px;
    margin-bottom: 10px;
    @media screen and (max-width: 1400px) {
      font-size: 30px;
      line-height: 1.5;
      width: 100%;
      background: transparent;
      letter-spacing: 0.5px;
    }

    @media screen and (max-width: 1250px), screen and (max-height: 800px) {
      font-size: 30px;
      line-height: 1.5;
      width: 100%;
      background: transparent;
      letter-spacing: 0.5px;
    }
    @media screen and (max-width: 800px) {
      font-size: 20px;
      line-height: 1.5;
      width: 100%;
      background: transparent;
      letter-spacing: 0.5px;
    }
  }
  p {
    width: 60%;
    background: transparent;
    margin: 0px;
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 20px;
    line-height: 1.5;
    letter-spacing: 1.5px;
    @media screen and (max-width: 1450px), screen and (max-height: 800px) {
      font-size: 15px;
      line-height: 1.5;
      width: 100%;
      background: transparent;
      letter-spacing: 0.5px;
    }
    @media screen and (max-width: 1000px), screen and (max-height: 600px) {
      font-size: 10px;
      line-height: 1.5;
      margin: 0px;
      width: 100%;
      background: transparent;
      letter-spacing: 0.5px;
    }
  }
`;

const Video = styled.div`
  position: absolute;
  top: 0;
  height: auto;
  width: 100%;
  background: black;
  z-index: 0;
  video {
    left: 0;
    top: 0;

    width: 100%;
    height: auto;

    opacity: 0.48;
    @media screen and (max-width: 800px) {
      height: 100%;
      width: auto;
    }
  }
  @media screen and (max-width: 800px) {
    height: 100%;
    width: auto;
  }
`;

const Works = styled.div`
  margin: 20px;
  width: 80%;
  background: transparent;
  display: grid;
  grid-gap: 5px;
  gap: 5px;
  grid-template-columns: repeat(7, minmax(70px, 1fr));
  @media screen and (max-width: 1400px) {
    grid-gap: 0px;
    gap: 0px;
    grid-template-columns: repeat(4, minmax(40px, 1fr));
  }
  @media screen and (max-width: 1000px) {
    grid-gap: 0px;
    gap: 0px;
    grid-template-columns: repeat(3, minmax(40px, 1fr));
  }
`;

export default Home;
