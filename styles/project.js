import styled from "styled-components";
import { lerp } from "../utilities/math";

export const getProjectInterpolations = (percentage) => ({
  padding: lerp(percentage, 20, 40),
  paddingBottom: lerp(percentage, 10, 30),
  titleFSize: lerp(percentage, 20, 38),
  descFSize: lerp(percentage, 14, 18),
  githubSize: lerp(percentage, 18, 22),
  externalLinkSize: lerp(percentage, 20, 24),
});

export const Project = styled.article`
  background-color: ${({ color }) => color};
  padding: var(--padding);
  padding-bottom: var(--paddingBottom);
`;

export const Title = styled.h3`
  font-family: "Work sans", sans-serif;
  font-weight: 400;
  font-size: var(--titleFSize);
  color: #fafafa;

  display: flex;
`;

export const Index = styled.span`
  @media (min-width: 480px) {
    position: absolute; /* "Take out" of flexbox */
  }

  opacity: 60%;
`;

export const Name = styled.span`
  @media (min-width: 480px) {
    width: 70%;
    margin: auto;
  }
`;

export const Preview = styled.section`
  @media (min-width: 480px) {
    width: 70%;
  }

  position: relative;
  margin: 1.5% auto;
`;

export const Details = styled.section`
  @media (min-width: 480px) {
    width: 70%;
    margin: 0% auto;
  }

  display: flex;
  justify-content: space-between;
`;

export const Description = styled.div`
  opacity: 60%;

  font-family: "Work sans", sans-serif;
  font-weight: 500;
  font-size: var(--descFSize);
  color: #fafafa;
`;

export const LinksWrapper = styled.nav`
  display: flex;
`;

export const ProjectLink = styled.a`
  margin-left: 8px;
  opacity: 60%;

  &:hover {
    cursor: pointer;
    opacity: 90%;
  }

  transition: opacity 0.2s ease;
`;

// export const Overlay = styled.div`
//   cursor: pointer;

//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;

//   border-radius: 10px;
//   background: linear-gradient(
//     180deg,
//     transparent 62%,
//     rgba(0, 0, 0, 0.00345888) 63.94%,
//     rgba(0, 0, 0, 0.014204) 65.89%,
//     rgba(0, 0, 0, 0.0326639) 67.83%,
//     rgba(0, 0, 0, 0.0589645) 69.78%,
//     rgba(0, 0, 0, 0.0927099) 71.72%,
//     rgba(0, 0, 0, 0.132754) 73.67%,
//     rgba(0, 0, 0, 0.177076) 75.61%,
//     rgba(0, 0, 0, 0.222924) 77.56%,
//     rgba(0, 0, 0, 0.267246) 79.5%,
//     rgba(0, 0, 0, 0.30729) 81.44%,
//     rgba(0, 0, 0, 0.341035) 83.39%,
//     rgba(0, 0, 0, 0.367336) 85.33%,
//     rgba(0, 0, 0, 0.385796) 87.28%,
//     rgba(0, 0, 0, 0.396541) 89.22%,
//     rgba(0, 0, 0, 0.4) 91.17%
//   );

//   opacity: 0;

//   &:hover {
//     opacity: 1;
//   }

//   transition: opacity 0.3s ease;

//   display: flex;
//   justify-content: center;

//   p {
//     position: absolute;
//     bottom: 0;
//     padding-bottom: 22px;

//     font-size: 20px;
//     font-family: "Work sans", sans-serif;
//     font-weight: 400;
//     color: #fafafa;
//   }
// `;
