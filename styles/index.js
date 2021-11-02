import styled from "styled-components";

export const HomepageWrapper = styled.div`
  position: relative; /* Allow it to be shaken by shake2d */
  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const ProjectsWrapper = styled.main`
  width: ${({ isSplitLayout }) => (isSplitLayout ? "60%" : "auto")};
`;

export const Footer = styled.footer`
  padding: 5px;
  text-align: center;
  font-size: 12px;
  font-family: "Work sans", sans-serif;
  font-weight: 500;
  color: hsl(0 0% 98% / 0.6);
  background-color: #4a4a4a;
`;
