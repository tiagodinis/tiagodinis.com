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
  const [afterHeaderY, setAfterHeaderY] = useState(0);
  const afterHeaderEl = useRef();

  const [topmostIndex, setTopmostIndex] = useState(0);
  const observer = useRef();
  const refList = useRef([]);
  const router = useRouter();

  function goToAbout() {
    const topmostRect = refList.current[topmostIndex].getBoundingClientRect();
    const offset = Math.round(Math.abs(topmostRect.top));
    router.push(`/about?index=${topmostIndex}&offset=${offset}`);
  }

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((e) =>
        e.target.setAttribute("visible", e.isIntersecting)
      );

      const isVisible = (r) => r.getAttribute("visible") === "true";
      setTopmostIndex(refList.current.findIndex(isVisible));
    });

    refList.current.forEach((r) => observer.current.observe(r));

    return () => observer.current.disconnect();
  }, []);

  useLayoutEffect(() => {
    // Set layout and corresponding interpolation percentage
    const newIsSplitLayout = width >= 992;
    setIsSplitLayout(newIsSplitLayout);
    const percentageRange = newIsSplitLayout ? [900, 1800] : [480, 992];
    setPercentage(clamp(getPercentage(width, ...percentageRange), 0, 1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  useLayoutEffect(() => {
    if (!isSplitLayout || !router.query.index) return;

    let top = refList.current[router.query.index].getBoundingClientRect().top;
    let scrollTarget = Math.round(top + parseInt(router.query.offset));
    console.log(scrollTarget);
    window.scrollTo({ top: scrollTarget, behavior: "instant" });
  }, [isSplitLayout]);

  // // FIXME: resize and see its not working properly
  // useEffect(() => {
  //   if (isSplitLayout) return;
  //   const afterHeaderRect = afterHeaderEl.current.getBoundingClientRect();
  //   setAfterHeaderY(afterHeaderRect.y + window.scrollY);
  // }, [isSplitLayout]);

  return (
    <>
      <MetaHead />
      <S.HomepageWrapper>
        <Header
          projectsY={afterHeaderY}
          percentage={percentage}
          isSplitLayout={isSplitLayout}
          goToAbout={goToAbout}
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

{
  /* <ConditionalWrapper
condition={isSplitLayout}
wrapper={(children) => (
  <S.HomepageWrapper>{children}</S.HomepageWrapper>
)}
> */
}
