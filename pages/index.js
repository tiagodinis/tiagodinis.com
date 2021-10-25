import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useRouter } from "next/dist/client/router";
import useWindowSize from "../utilities/custom_hooks/useWindowSize";
import { clamp, getPercentage } from "../utilities/math";
import Header from "../components/Header";
import { Project } from "../components/Project";
import * as S from "../styles";
import MetaHead from "../components/MetaHead";

import projectsData from "../utilities/projectsData";

export default function Home() {
  const { width } = useWindowSize();
  const [isSplitLayout, setIsSplitLayout] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const router = useRouter();
  const observer = useRef();
  const refList = useRef([]);
  const topmostIndex = useRef(0);
  const [afterHeaderY, setAfterHeaderY] = useState(0);
  const afterHeaderEl = useRef();

  // Set layout and corresponding interpolation percentage
  useLayoutEffect(() => {
    const newIsSplitLayout = width >= 992;
    setIsSplitLayout(newIsSplitLayout);
    const percentageRange = newIsSplitLayout ? [900, 1800] : [480, 992];
    setPercentage(clamp(getPercentage(width, ...percentageRange), 0, 1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  // When returning to this page, set scroll position to the previous one
  useLayoutEffect(() => {
    if (!isSplitLayout || !router.query.index) return;

    let top = refList.current[router.query.index].getBoundingClientRect().top;
    let scrollTarget = Math.round(top + parseInt(router.query.offset));
    window.scrollTo({ top: scrollTarget, behavior: "instant" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSplitLayout]);

  // Observe project refs and keep a register of the topmost visible one
  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((e) =>
        e.target.setAttribute("visible", e.isIntersecting)
      );
      const isVisible = (r) => r.getAttribute("visible") === "true";
      topmostIndex.current = refList.current.findIndex(isVisible);
    });

    refList.current.forEach((r) => observer.current.observe(r));

    return () => observer.current.disconnect();
  }, []);

  useEffect(() => {
    if (isSplitLayout) return;
    const afterHeaderRect = afterHeaderEl.current.getBoundingClientRect();
    console.log(Math.round(afterHeaderRect.y + window.scrollY));
    setAfterHeaderY(Math.round(afterHeaderRect.y + window.scrollY));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  function goToAbout() {
    const topmostRef = refList.current[topmostIndex.current];
    const offset = Math.round(Math.abs(topmostRef.getBoundingClientRect().top));
    router.push(`/about?index=${topmostIndex.current}&offset=${offset}`);
  }

  function scrollToProjects() {
    window.scrollTo({ top: afterHeaderY, behavior: "smooth" });
  }

  return (
    <>
      <MetaHead />
      <S.HomepageWrapper>
        <Header
          percentage={percentage}
          isSplitLayout={isSplitLayout}
          goToAbout={goToAbout}
          goToProjects={isSplitLayout ? null : scrollToProjects}
        />

        {!isSplitLayout && <div ref={afterHeaderEl} />}

        <S.ProjectsWrapper isSplitLayout={isSplitLayout}>
          {projectsData.map((p, i) => (
            <Project
              ref={(ref) => (refList.current[i] = ref)}
              key={p.name}
              p={p}
              i={i}
              percentage={percentage}
            />
          ))}
        </S.ProjectsWrapper>
      </S.HomepageWrapper>
    </>
  );
}
