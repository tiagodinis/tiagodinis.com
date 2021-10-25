import styled from "styled-components";
import { lerp } from "../utilities/math";

export const getHeaderInterpolations = (percentage) => ({
  headerLeft: lerp(percentage, 44, 90),
  heroFSize: lerp(percentage, 44, 54),
  heroLHeight: lerp(percentage, 3.4, 4.2),
});

export const Header = styled.header`
  @media (min-width: 992px) {
    width: 40%;
    height: fit-content;
    margin: 0;
    padding-left: var(--headerLeft);
    position: sticky;
    top: 0px;
    transform: translateY(calc(100vh - 100% - 10vh));
  }

  margin: 56px 48px 56px 44px;
  color: #fafafa;
`;

export const Slogan = styled.h1`
  @media (min-width: 480px) {
    line-height: 3.4rem;
    font-size: 44px;
  }

  @media (min-width: 992px) {
    line-height: var(--heroLHeight);
    font-size: var(--heroFSize);
  }

  line-height: 2.7rem;
  font-family: "Raleway", sans-serif;
  font-weight: 800;
  font-size: 34px;
  color: #4a4a4a;
`;

export const About = styled.nav`
  @media (min-width: 480px) {
    margin: 50px 0px;
  }

  @media (min-width: 690px) {
    max-width: none;
  }

  @media (min-width: 992px) {
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

export const TextLink = styled.a`
  display: inline-block;

  font-weight: 500;
  color: #3b80fe;
  text-decoration: none;

  &:hover {
    color: #7ba9fc;
    cursor: pointer;
  }

  transition: color 0.2s ease-out;
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
