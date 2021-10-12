import styled from "styled-components";

// export const HomepageContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// export const LeftSide = styled.div`
//   width: 100vw;
//   height: 100vh;

//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// export const RightSide = styled.div`
//   width: 100vw;
//   height: 100vh;

//   overflow-y: scroll;
//   scrollbar-width: none;
//   ::-webkit-scrollbar {
//     display: none;
//   }
// `;

// export const BorderGradient = styled.div`
//   height: 200px;
//   width: 50%;

//   position: absolute;
//   bottom: ${({ bottom }) => (bottom ? "0px" : "none")};

//   background: linear-gradient(
//     ${({ bottom }) => (bottom ? "0deg" : "180deg")},
//     rgba(255, 255, 255, 1) 10%,
//     rgba(255, 255, 255, 0) 100%
//   );

//   pointer-events: none;
// `;

// export const ProjectList = styled.main`
//   padding: 24vh 0px;

//   display: flex;
//   flex-direction: column;
// `;

// export const ProjectStub = styled.main`
//   border: 1px solid black;

//   padding: 10px;
//   margin: 20px;

//   cursor: pointer;
// `;

// export const Footer = styled.footer`
//   position: absolute;
//   bottom: 10px;
// `;

// MOBILE

export const HomepageContainer = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: #fafafa;

  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

export const Header = styled.header`
  /* border: 1px solid black; */
  position: relative;
  left: 48px;
  top: 56px;

  width: fit-content;
`;

export const Hero = styled.h1`
  /* border: 1px solid black; */

  line-height: 2.7rem;
  font-family: "Raleway", sans-serif;
  font-weight: 800;
  font-size: 34px;
  color: #4a4a4a;
`;

export const About = styled.section`
  /* border: 1px solid black; */

  margin-top: 40px;

  line-height: 1.6rem;
  font-family: "Work Sans", sans-serif;
  font-weight: 300;
  font-size: 18px;
  color: #2d2d2d;

  width: 230px;
`;

export const TextLink = styled.a`
  font-weight: 500;
  color: #3b80fe;
  text-decoration: none;

  &:hover {
    color: #7ba9fc;
  }

  transition: color 0.2s ease-out;
`;

export const Social = styled.nav`
  width: fit-content;
  margin-top: 50px;

  display: flex;
  justify-content: flex-start;

  svg {
    margin-right: 24px;
    cursor: pointer;
    fill: #a2a2a2;
    transition: fill 0.4s ease-out;
  }

  svg:nth-child(2) {
    position: relative;
    bottom: 1px;
  }

  svg:nth-child(3) {
    position: relative;
    bottom: -2px;
    left: 1px;
  }

  svg:last-child {
    margin-right: 0px;
  }

  svg:nth-child(1):hover {
    fill: #37474f;
  }

  svg:nth-child(2):hover {
    fill: #5c6bc0;
  }

  svg:nth-child(3):hover {
    fill: #03a9f4;
  }

  svg:nth-child(4):hover {
    fill: #1976d2;
  }
`;

export const ProjectsContainer = styled.div`
  /* border: 1px solid black; */
`;

export const ProjectStub = styled.main`
  border: 1px solid black;

  padding: 10px;
  margin: 20px;

  cursor: pointer;
`;

export const Footer = styled.footer`
  /* border: 1px solid black; */
  width: fit-content;
  margin: auto;
`;
