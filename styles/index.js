import styled, { css } from "styled-components";

export const HomepageWrapper = styled.div`
  @media (min-width: 992px) {
    position: relative; /* Allow it to be shaken by shake2d */

    display: flex;
    justify-content: space-between;
  }

  ${({ applyTransitionStyle, width }) => {
    if (applyTransitionStyle)
      return css`
        position: absolute;
        width: ${width}px;
        left: ${width}px;
      `;
  }}
`;

export const ProjectsWrapper = styled.main`
  width: ${({ isSplitLayout }) => (isSplitLayout ? "60%" : "auto")};
`;
