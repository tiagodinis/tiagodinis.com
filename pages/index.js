import useWindowSize from "../utilities/custom_hooks/useWindowSize";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { clamp, getPercentage } from "../utilities/math";
import MetaHead from "../components/MetaHead";
import Header from "../components/Header";
import ProjectList from "../components/ProjectList";
import * as S from "../styles";

export default function Home() {
  const { width } = useWindowSize();
  const [isSplitLayout, setIsSplitLayout] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const router = useRouter();
  const observer = useRef();
  const elList = useRef([]);
  const topmostVisibleIndex = useRef(0);
  const afterHeaderEl = useRef();

  // Set layout and corresponding interpolation percentage
  useLayoutEffect(() => {
    const newIsSplitLayout = width >= 992;
    setIsSplitLayout(newIsSplitLayout);
    const percentageRange = newIsSplitLayout ? [900, 1800] : [480, 992];
    setPercentage(clamp(getPercentage(width, ...percentageRange), 0, 1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  // When returning to this page, set scroll position to the one being used before leaving
  useLayoutEffect(() => {
    if (!isSplitLayout || !router.query.index) return;

    let top = elList.current[router.query.index].getBoundingClientRect().top;
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
      topmostVisibleIndex.current = elList.current.findIndex(isVisible);
    });

    elList.current.forEach((r) => observer.current.observe(r));

    return () => observer.current.disconnect();
  }, []);

  function goToAbout() {
    let offset = window.scrollY;
    if (isSplitLayout) {
      const topmostRef = elList.current[topmostVisibleIndex.current];
      offset = Math.round(Math.abs(topmostRef.getBoundingClientRect().top));
    }

    router.push(`/about?index=${topmostVisibleIndex.current}&offset=${offset}`);
  }

  function scrollToProjects() {
    const afterHeaderRect = afterHeaderEl.current.getBoundingClientRect();
    const afterHeaderY = Math.round(afterHeaderRect.y + window.scrollY);
    window.scrollTo({ top: afterHeaderY, behavior: "smooth" });
  }

  return (
    <>
      <MetaHead />
      <S.HomepageWrapper>
        <Header
          goToAbout={goToAbout}
          goToProjects={isSplitLayout ? null : scrollToProjects}
        />

        {!isSplitLayout && <div ref={afterHeaderEl} />}

        <S.ProjectsWrapper>
          <ProjectList elList={elList.current} percentage={percentage} />
        </S.ProjectsWrapper>
      </S.HomepageWrapper>
    </>
  );
}
