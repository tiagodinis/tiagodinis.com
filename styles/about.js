import styled from "styled-components";

export const ShakeWrapper = styled.div`
  overflow: hidden;
`;

const padding = 32;

export const About = styled.div`
  padding: ${padding}px;
  padding-bottom: 0px;
  min-height: 100vh;
  background-color: #f1f1f1;
  line-height: 26px;
  font-family: "Lato", sans-serif;
  font-size: 16px;
  color: #393939;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const AboutTitle = styled.div`
  line-height: 64px;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 54px;
  color: #4a4a4a;
`;

const titlePadding = 40;

export const AboutIntro = styled.div`
  p {
    padding-top: 16px;
  }

  padding-bottom: ${titlePadding}px;
`;

export const ValuesGrid = styled.div`
  @media (min-width: 1450px) {
    grid: 1fr 1fr / 1fr 1fr;
  }

  padding-top: ${titlePadding}px;
  width: 100%;
  display: grid;
  grid: repeat(4, fit-content(1fr)) / 1fr;
  gap: 40px;
`;

export const GoBackContainer = styled.div`
  margin: 0 auto;
  padding: 10px;
  cursor: pointer;

  &:hover svg {
    transform: translateY(10px);
  }
  svg {
    transition: 0.2s ease;
  }
`;
