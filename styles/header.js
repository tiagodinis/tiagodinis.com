import styled from "styled-components";
import { breakpoints, clampedLerp } from "../utilities/styledUtilities";

export const Header = styled.header`
  @media (min-width: ${breakpoints.desktop}px) {
    width: 40%;
    height: fit-content;
    margin: 0;
    padding-left: ${clampedLerp(44, 90, 900, 1800, "px")};
    position: fixed;
    transform: translateY(calc(100vh - 100% - 10vh));
  }

  margin: 56px 48px 56px 44px;
  color: #fafafa;
`;

export const Slogan = styled.h1`
  @media (min-width: ${breakpoints.tablet}px) {
    line-height: 3.4rem;
    font-size: 44px;
  }

  @media (min-width: ${breakpoints.desktop}px) {
    line-height: ${clampedLerp(54, 67, 900, 1800, "px")};
    font-size: ${clampedLerp(44, 54, 900, 1800, "px")};
  }

  line-height: 2.7rem;
  font-family: "Raleway", sans-serif;
  font-weight: 800;
  font-size: 34px;
  color: #4a4a4a;
`;

export const About = styled.nav`
  @media (min-width: ${breakpoints.tablet}px) {
    margin: 50px 0px;
  }

  @media (min-width: 690px) {
    max-width: none;
  }

  @media (min-width: ${breakpoints.desktop}px) {
    max-width: 310px;
  }

  margin: 36px 0px;
  max-width: 316px;

  line-height: 26px;
  font-family: "Work Sans", sans-serif;
  font-weight: 300;
  font-size: 18px;
  color: #2d2d2d;
`;

export const Social = styled.nav`
  width: fit-content;

  display: flex;
  justify-content: flex-start;

  a {
    cursor: default;
  }

  svg {
    margin-right: 24px;
    cursor: pointer;
    fill: #a2a2a2;
    transition: fill 0.4s ease-out;
  }

  a:nth-child(2) > svg {
    position: relative;
    bottom: 1px;
  }

  a:nth-child(3) > svg {
    position: relative;
    bottom: -2px;
    left: 1px;
  }

  /* Hover colors */
  ${["#37474f", "#5c6bc0", "#03a9f4", "#1976d2"].map(
    (c, i) => `a:nth-child(${i + 1}) > svg:hover { fill: ${c}; }`
  )}
`;
