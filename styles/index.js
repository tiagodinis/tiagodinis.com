import styled from "styled-components";

export const HomepageWrapper = styled.div`
  position: relative;
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

export const ShakeWrapper = styled.div`
  overflow: ${(props) => props.overflowType};
`;

export const About = styled.div`
  height: 100vh;
  background-color: #f4f3f3;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const AboutWrapper = styled.div`
  padding: 100px;
  padding-bottom: 0px;
`;

export const AboutTitle = styled.div`
  font-family: "Raleway", sans-serif;
  font-weight: 800;
  font-size: 80px;
  color: #4a4a4a;
`;

export const AboutContent = styled.div`
  font-family: "Work sans", sans-serif;
  font-weight: 300;
  font-size: 26px;
  color: #4a4a4a;

  p {
    padding-top: 20px;
  }
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
