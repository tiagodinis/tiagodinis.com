import styled from "styled-components";

export const HomepageWrapper = styled.main`
  @media (min-width: 992px) {
    position: relative; /* Allow it to be shaken by shake2d */

    display: flex;
    justify-content: space-between;
  }

  ${({ applyTransitionStyle, width }) => {
    if (applyTransitionStyle)
      return `
        position: absolute;
        width: ${width}px;
        left: ${width}px;
      `;
  }}
`;

export const ProjectsWrapper = styled.div`
  @media (min-width: 992px) {
    width: 60%;
  }
`;
