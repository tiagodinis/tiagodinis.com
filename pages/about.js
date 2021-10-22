import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useRouter } from "next/dist/client/router";
import useWindowSize from "../utilities/custom_hooks/useWindowSize";
import { clamp, getPercentage } from "../utilities/math";
import ConditionalWrapper from "../utilities/components/ConditionalWrapper";
import Header from "../components/Header";
import { Project } from "../components/Project";
import * as S from "../styles";
import MetaHead from "../components/MetaHead";

import projectsData from "../utilities/projectsData";

import { lerp, ease } from "../utilities/math";

function easeOutBounce(x) {
  const n1 = 7.5625;
  const d1 = 2.75;

  if (x < 1 / d1) return n1 * x * x;
  else if (x < 2 / d1) return n1 * (x -= 1.5 / d1) * x + 0.75;
  else if (x < 2.5 / d1) return n1 * (x -= 2.25 / d1) * x + 0.9375;
  else return n1 * (x -= 2.625 / d1) * x + 0.984375;
}

export default function About() {
  const { width } = useWindowSize();
  const [isSplitLayout, setIsSplitLayout] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [afterHeaderY, setAfterHeaderY] = useState(0);
  const afterHeaderEl = useRef();

  const router = useRouter();
  const index = parseInt(router.query.index);
  const offset = parseInt(router.query.offset);
  const [useElems, setUseElems] = useState(true);
  const [introAnimFinished, setIntroAnimFinished] = useState(false);

  useLayoutEffect(() => startAnim(), []);

  const startAnim = () =>
    animateScroll(
      window.innerHeight + offset,
      0,
      1800,
      (x) => easeOutBounce(x),
      null,
      toggle
    );

  const endAnim = () =>
    animateScroll(
      0,
      window.innerHeight + offset,
      1000,
      (x) => ease(x, 0.8, 0.1),
      toggle,
      () => router.push(`/?index=${index}&offset=${offset}`)
    );

  function toggle() {
    setUseElems(!useElems);
    setIntroAnimFinished(!introAnimFinished);
  }

  function animateScroll(start, end, duration, easer, onStart, onFinish) {
    if (onStart) onStart();

    let startTimestamp = null;
    window.requestAnimationFrame(step);

    function step(timestamp) {
      if (!startTimestamp) startTimestamp = timestamp;

      const elapsedTime = timestamp - startTimestamp;
      const elapsedPercentage = Math.min(elapsedTime / duration, 1);
      const easedPercentage = easer
        ? easer(elapsedPercentage)
        : elapsedPercentage;
      const lerpedNewValue = lerp(easedPercentage, start, end);
      window.scrollTo({ top: lerpedNewValue, behavior: "instant" });

      if (elapsedPercentage < 1) window.requestAnimationFrame(step);
      else if (onFinish) onFinish();
    }
  }

  useLayoutEffect(() => {
    // Set layout and corresponding interpolation percentage
    const newIsSplitLayout = width >= 992;
    setIsSplitLayout(newIsSplitLayout);
    const percentageRange = newIsSplitLayout ? [900, 1800] : [480, 992];
    setPercentage(clamp(getPercentage(width, ...percentageRange), 0, 1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

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
        />

        {!isSplitLayout && <div ref={afterHeaderEl} />}

        <S.ProjectsWrapper
          isSplitLayout={isSplitLayout}
          introAnimFinished={introAnimFinished}
        >
          <S.About onClick={endAnim}>Go back</S.About>
          {useElems &&
            projectsData
              .slice(index)
              .map((p, i) => (
                <Project
                  key={p.name}
                  p={p}
                  i={i + index}
                  percentage={percentage}
                />
              ))}
        </S.ProjectsWrapper>
      </S.HomepageWrapper>
    </>
  );
}
