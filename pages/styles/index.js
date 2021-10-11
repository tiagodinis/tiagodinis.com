import styled from "styled-components";

export const HomepageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftSide = styled.div`
  /* border: 1px solid black; */

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightSide = styled.div`
  /* border: 1px solid black; */

  width: 100vw;
  height: 100vh;

  overflow-y: scroll;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const BorderGradient = styled.div`
  height: 200px;
  width: 50%;

  position: absolute;
  /* top: ${({ bottom }) => (bottom ? "none" : "10vh")}; */
  bottom: ${({ bottom }) => (bottom ? "0px" : "none")};

  background: linear-gradient(
    ${({ bottom }) => (bottom ? "0deg" : "180deg")},
    rgba(255, 255, 255, 1) 10%,
    rgba(255, 255, 255, 0) 100%
  );

  pointer-events: none;
`;

export const ProjectList = styled.main`
  /* border: 1px solid black; */

  padding: 24vh 0px;

  display: flex;
  flex-direction: column;
`;

export const ProjectStub = styled.main`
  border: 1px solid black;

  padding: 10px;
  margin: 20px;

  cursor: pointer;
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 10px;
`;
