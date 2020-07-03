import React, { useState, useEffect } from "react";
import "./Welcome.css";
import SignUp from "./SignUp/SignUp";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import "./Header.css";
import { useHistory, useLocation } from "react-router-dom";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
  DotGroup,
  Dot,
} from "pure-react-carousel";
import SignIn from "./SignIn/SignIn";
const dotValue = [
  {
    key: 1,
  },
  {
    key: 2,
  },
  {
    key: 2,
  },
];
export default function Welcome() {
  const [option, setOption] = useState(true);
  let history = useHistory();
  let location = useLocation();
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log("resize");
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    });
  }, []);
  return (
    <div id="main_screen">
      {/* <CarouselProvider
        // isPlaying
        lockOnWindowScroll
        naturalSlideWidth={400}
        naturalSlideHeight={800}
        totalSlides={3}
        infinite
        className="carousel-container"
      >
        <Slider style={{}} className="carousel-provider">
          <Slide
            style={{ height: "auto" }}
            className="carousel-slide "
            // innerClassName="slideInner___2mfX9"
            index={0}
          >
          
            <img
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                width: "100%",
                height: "100vh",
                position: "relative",
              }}
              className="slider-image"
              src={require("./assets/doctor_patient.png")}
            />
           
            <div className="welcome-darex-holder">
              <span className="welcome-text">Welcome to</span>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span className="darex-text">Dare X</span>
                <span className="moto-text">One Person One Clinic</span>
              </div>
            </div>
          </Slide>
          <Slide style={{}} className="carousel-slide" index={1}>
        
            <Image
              isBgImage
              style={{
                // display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "100%",
                height: "auto",
              }}
              className="slider-image"
              src={require("./assets/doctor_patient.png")}
            />
            <div style={{ position: "absolute" }}>
              <span>Welcome to</span>
              <div>
                <span>Dare X</span>
                <span>One Person One Clinic 2</span>
              </div>
            </div>
          </Slide>
          <Slide style={{}} className="carousel-slide" index={2}>
          
            <Image
              isBgImage
              style={{
                // display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "100%",
                height: "auto",
              }}
              className="slider-image"
              src={require("./assets/doctor_patient.png")}
            />
            <div style={{ position: "absolute" }}>
              <span>Welcome to</span>
              <div>
                <span>Dare X</span>
                <span>One Person One Clinic 3</span>
              </div>
            </div>
          </Slide>
        </Slider>
        <div className="dot-group">
          <DotGroup
            className="dot-group"
            renderDots={() =>
              dotValue.map((value, index) => {
                return (
                  // <div style={{ display: "flex", flexDirection: "row" }}>
                  <Dot className="dot-style" slide={index} />
                );
              })
            }
          />
        </div>

        <div className="button_container">
          <ButtonBack disabled={false} className="back-button button-style">
            <ChevronLeft
              style={{ fontSize: 20 }}
              color="#005194"
              className=".MuiIcon-root chevron-style"
            />
          </ButtonBack>
          <ButtonNext disabled={false} className=" next-button button-style">
            <ChevronRight
              style={{ fontSize: 20 }}
              color="#005194"
              className="chevron-style"
            />
          </ButtonNext>
        </div>
      </CarouselProvider> */}
      <div id="main_welcome">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
          }}
          className="main_carousel"
        >
          <img
            style={{
              width: "100%",
            }}
            src={require("./assets/undraw_doctors_hwty.png")}
          />
        </div>
        <div className="main_signup_signin">
          {/* {option && (
            <SignUp
              windowDimensions={windowDimensions}
              signIn={() => {
                setOption(false);
                // history.push("/dashboard");
                console.log(location);
              }}
            />
          // )} */}

          <SignIn
            windowDimensions={windowDimensions}
            signUp={() => {
              setOption(true);
            }}
          />
        </div>
      </div>
    </div>
  );
}
