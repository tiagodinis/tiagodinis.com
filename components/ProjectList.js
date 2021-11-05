import Project, { projectsData } from "../components/Project";
import styled from "styled-components";

export default function ProjectList({ elList, topmostIndex, percentage }) {
  return (
    <>
      <article>
        {projectsData.slice(topmostIndex).map((p, i) => (
          <Project
            ref={elList ? (ref) => (elList[i] = ref) : null}
            key={p.name}
            p={p}
            i={i + (topmostIndex ? topmostIndex : 0)}
            percentage={percentage}
            priority={i === 0}
          />
        ))}
      </article>
      <Footer>© 2021 Tiago Dinis</Footer>
    </>
  );
}

const Footer = styled.footer`
  padding: 2px;
  text-align: center;
  font-size: 12px;
  font-family: "Work sans", sans-serif;
  font-weight: 500;
  color: #a5a5a5;
  background-color: #4a4a4a;
`;
