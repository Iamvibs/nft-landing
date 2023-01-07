import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from "./Button";

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;

  span {
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
  }
  .text-1 {
    color: blue;
  }
  .text-2 {
    color: orange;
  }
  .text-3 {
    color: red;
  }
  .text-4 {
    color: gold;
  }
  .text-5 {
    color: pink;
  }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
  @media (max-width: 40em) {
    width: 90%;
  }
`;
const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.6)`};
  font-weight: 600;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;

    button {
      margin: 0 auto;
    }
  }
`;
const TypeWriterText = () => {
  return (
    <>
      <Title>
        Discover a new era of non-BTs (Maybe)
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(`<span class="text-1">Mukul 🤟</span>`)
              .pauseFor(1500)
              .deleteAll()
              .typeString(`<span class="text-2">Awadhoot 🧑‍💻</span>`)
              .pauseFor(1500)
              .deleteAll()
              .typeString(`<span class="text-3">Sairaj 🏋️</span>`)
              .pauseFor(1500)
              .deleteAll()
              .typeString(`<span class="text-4">Ashutosh 🎥</span>`)
              .pauseFor(1500)
              .deleteAll()
              .typeString(`<span class="text-5">Sandeep 🤏</span>`)
              .pauseFor(1500)
              .deleteAll()
              .typeString(`<span class="text-1">Nayan 🧑‍🦱</span>`)
              .pauseFor(1500)
              .deleteAll()
              .typeString(`<span class="text-2">Jidnesh 🎮</span>`)
              .pauseFor(1500)
              .deleteAll()
              .typeString(`<span class="text-3">Manav 👽</span>`)
              .pauseFor(1500)
              .deleteAll()
              .typeString(`<span class="text-4">Kamil ⚙️</span>`)
              .pauseFor(1500)
              .deleteAll()
              .typeString(`<span class="text-5">Vaibhav 👋</span>`)
              .pauseFor(1500)
              .deleteAll()
              .typeString(`<span class="text-1">Dhawal 😶‍🌫️</span>`)
              .pauseFor(1500)
              .deleteAll()
              .typeString(`<span class="text-2">Oweis 🥸</span>`)
              .pauseFor(1500)
              .deleteAll()
              .typeString(`<span class="text-3">Aswin 🍚</span>`)
              .pauseFor(1500)
              .deleteAll()
              .typeString(`<span class="text-3">Anirudh 🚬</span>`)
              .pauseFor(1500)
              .deleteAll()
              .typeString(`<span class="text-4">Not the Korean BTS🤬</span>`)
              .pauseFor(1500)
              .deleteAll()
              .start();
          }}
        />
      </Title>
      <SubTitle>This Are Some Of My non-BT Friends</SubTitle>
      <ButtonContainer>
        <Button text="Explore" link="https://raspy.netlify.app/" />
      </ButtonContainer>
    </>
  );
};

export default TypeWriterText;
