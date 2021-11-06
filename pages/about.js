import { useRouter } from "next/dist/client/router";
import useWindowSize from "../utilities/custom_hooks/useWindowSize";
import { useLayoutEffect, useRef, useState } from "react";
import { clamp, getPercentage } from "../utilities/math";
import { lerp, ease } from "../utilities/math";
import { Shake2D } from "../utilities/shake2d";
import MetaHead from "../components/MetaHead";
import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import ProjectList from "../components/ProjectList";
import * as S from "../styles";

export default function About() {
  const router = useRouter();
  const fromHome =
    router.query.index !== undefined && router.query.offset !== undefined;
  const index = parseInt(router.query.index || 0);
  const offset = useRef(parseInt(router.query.offset || 0));
  const { width } = useWindowSize();
  const [isSplitLayout, setIsSplitLayout] = useState(false);
  const [percentage, setPercentage] = useState(-1);
  const [useProjects, setUseProjects] = useState(fromHome);
  const [animFinished, setAnimFinished] = useState(!fromHome);

  const shakeableEl = useRef();
  const aboutSectionRef = useRef();

  useLayoutEffect(() => {
    // Set layout and corresponding interpolation percentage
    const newIsSplitLayout = width >= 992;
    setIsSplitLayout(newIsSplitLayout);
    const percentageRange = newIsSplitLayout ? [900, 1800] : [480, 992];
    setPercentage(clamp(getPercentage(width, ...percentageRange), 0, 1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  useLayoutEffect(() => {
    if (percentage >= 0 && !animFinished) {
      if (fromHome && isSplitLayout) scrollInto();
      else if (fromHome && !isSplitLayout) scrollIntoHorizontal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [percentage]);

  const scrollInto = () =>
    animateScroll(
      aboutSectionRef.current.getBoundingClientRect().height + offset.current,
      0,
      1100,
      (x) => ease(x, -0.6, 0),
      true,
      null,
      () => {
        shake(12, 60, 700);
        setUseProjects(false);
        setAnimFinished(true);
      }
    );

  const scrollOutOf = () =>
    animateScroll(
      window.scrollY,
      aboutSectionRef.current.getBoundingClientRect().height + offset.current,
      800,
      (x) => ease(x, 0.8, 0.1),
      true,
      () => setUseProjects(true),
      () => router.push(`/?index=${index}&offset=${offset.current}`)
    );

  const scrollIntoHorizontal = () =>
    animateScroll(
      window.innerWidth,
      0,
      900,
      (x) => ease(x, 0.7, 0.2),
      false,
      () => window.scrollTo({ top: offset.current, behavior: "instant" }),
      () => {
        setUseProjects(false);
        setAnimFinished(true);
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    );

  const scrollOutOfHorizontal = () =>
    animateScroll(
      0,
      window.innerWidth,
      900,
      (x) => ease(x, 0.7, 0.2),
      false,
      () => {
        setUseProjects(true);
        offset.current = 0;
      },
      () => router.push(`/`)
    );

  function animateScroll(
    start,
    end,
    duration,
    easer,
    verticalScroll,
    onStart,
    onFinish
  ) {
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
      window.scrollTo({
        [verticalScroll ? "top" : "left"]: lerpedNewValue,
        behavior: "instant",
      });

      if (elapsedPercentage < 1) window.requestAnimationFrame(step);
      else if (onFinish) onFinish();
    }
  }

  function shake(amplitude, frequency, duration) {
    let shake = new Shake2D(amplitude, frequency, duration, (p) => p);
    shake.generateSamples();

    let startTimestamp = null;
    window.requestAnimationFrame(step);
    function step(timestamp) {
      if (!startTimestamp) startTimestamp = timestamp;

      const elapsedTime = timestamp - startTimestamp;
      const elapsedPercentage = Math.min(elapsedTime / duration, 1);
      const offsets = shake.compute(elapsedPercentage);
      shakeableEl.current.style.top = `${offsets.x}px`;
      shakeableEl.current.style.left = `${offsets.y}px`;

      if (elapsedPercentage < 1) window.requestAnimationFrame(step);
    }
  }

  const About = (
    <AboutSection
      ref={aboutSectionRef}
      isSplitLayout={isSplitLayout}
      applyTransitionStyle={!isSplitLayout && useProjects}
      scrollOutOf={isSplitLayout ? scrollOutOf : scrollOutOfHorizontal}
      width={shakeableEl.current?.getBoundingClientRect().width}
      offset={offset.current}
    />
  );

  return (
    <>
      <MetaHead />
      {/* This div hides vertical scrollbar flicker on shake */}
      <div style={{ overflow: "hidden" }}>
        {!isSplitLayout && About}
        <S.HomepageWrapper
          ref={shakeableEl}
          applyTransitionStyle={!isSplitLayout && useProjects}
          width={aboutSectionRef.current?.getBoundingClientRect().width}
        >
          {(isSplitLayout || (!isSplitLayout && useProjects)) && (
            <Header goToProjects={useProjects ? null : scrollOutOf} />
          )}

          <S.ProjectsWrapper isSplitLayout={isSplitLayout}>
            {isSplitLayout && About}
            {useProjects && (
              <ProjectList topmostIndex={index} percentage={percentage} />
            )}
          </S.ProjectsWrapper>
        </S.HomepageWrapper>
      </div>
    </>
  );
}
