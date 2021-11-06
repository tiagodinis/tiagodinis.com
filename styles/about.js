import styled, { css } from "styled-components";
import { breakpoints } from "../utilities/styledUtilities";

const titlePadding = 20;
const valuesTitleColor = "#4a4a4a";

export const About = styled.main`
  @media (min-width: ${breakpoints.desktop}px) {
    padding-bottom: 0px;
  }

  ${({ applyTransitionStyle, offset }) => {
    if (applyTransitionStyle)
      return css`
        position: absolute;
        top: ${offset}px;
      `;
  }}

  padding: 32px;
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

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AboutTitle = styled.h1`
  line-height: 64px;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 54px;
  color: #4a4a4a;
`;

export const AboutIntro = styled.article`
  p {
    padding-top: 16px;
  }

  padding-bottom: ${titlePadding}px;
`;

export const ValuesTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ValuesTitleLine = styled.div`
  flex-grow: 1;
  border-top: 1px solid ${valuesTitleColor};
`;

export const ValuesTitle = styled.h2`
  padding: 0px 10px;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: ${valuesTitleColor};
`;

export const ValuesGrid = styled.article`
  @media (min-width: 1450px) {
    grid: 1fr 1fr / 1fr 1fr;
  }

  padding-top: ${titlePadding}px;
  width: 100%;
  display: grid;
  grid: repeat(4, fit-content(1fr)) / 1fr;
  gap: 40px;
`;

export const GoBackContainer = styled.nav`
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

export const TitleGoBackContainer = styled.nav`
  position: relative;
  top: 1px;

  display: flex;
  align-items: center;

  cursor: pointer;

  &:hover svg {
    transform: rotate(90deg) translateY(-10px);
  }
  svg {
    transform: rotate(90deg);
    transition: 0.2s ease-in-out;
  }
`;
