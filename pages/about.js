import { useLayoutEffect, useRef, useState } from "react";
import { useRouter } from "next/dist/client/router";
import useWindowSize from "../utilities/custom_hooks/useWindowSize";
import { clamp, getPercentage } from "../utilities/math";
import Header from "../components/Header";
import { Project } from "../components/Project";
import * as S from "../styles";
import MetaHead from "../components/MetaHead";
import DoubleArrowSVG from "../components/svg/DoubleArrowSVG";
import projectsData from "../utilities/projectsData";
import { lerp, ease } from "../utilities/math";
import { Shake2D } from "../utilities/shake2d";

export default function About() {
  const { width } = useWindowSize();
  const [isSplitLayout, setIsSplitLayout] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [afterHeaderY, setAfterHeaderY] = useState(0);
  const afterHeaderEl = useRef();

  const router = useRouter();
  const fromHome =
    router.query.index !== undefined && router.query.offset !== undefined;
  const index = parseInt(router.query.index);
  const offset = parseInt(router.query.offset);
  const [useProjects, setUseProjects] = useState(fromHome);

  useLayoutEffect(() => {
    if (fromHome) startAnim();
  }, [fromHome]);

  const startAnim = () =>
    animateScroll(
      window.innerHeight + offset,
      0,
      1100,
      (x) => ease(x, -0.6, 0),
      null,
      () => {
        setOverflowType("hidden");
        setUseProjects(!useProjects);
      }
    );

  const endAnim = () =>
    animateScroll(
      0,
      window.innerHeight + offset,
      800,
      (x) => ease(x, 0.8, 0.1),
      () => {
        // setOverflowType("visible");
        setUseProjects(!useProjects);
      },
      () => router.push(`/?index=${index}&offset=${offset}`)
    );

  function animateScroll(start, end, duration, easer, onStart, onFinish) {
    if (onStart) onStart();

    window.scrollTo({ top: window.innerHeight + offset, behavior: "instant" });

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

  // Shake
  const shakeableEl = useRef();
  const [overflowType, setOverflowType] = useState("visible");

  function shake(amplitude, frequency, duration) {
    let shake = new Shake2D(amplitude, frequency, duration, (p) =>
      ease(p, 0, 0)
    );
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
      else {
        console.log(offsets);
        setOverflowType("visible");
      }
    }
  }

  useLayoutEffect(() => {
    if (overflowType === "hidden") shake(12, 60, 700);
  }, [overflowType]);

  return (
    <>
      <MetaHead />
      <S.ShakeWrapper overflowType={overflowType}>
        <S.HomepageWrapper ref={shakeableEl}>
          <Header
            projectsY={afterHeaderY}
            percentage={percentage}
            isSplitLayout={isSplitLayout}
            goToProjects={endAnim}
          />

          {!isSplitLayout && <div ref={afterHeaderEl} />}

          <S.ProjectsWrapper isSplitLayout={isSplitLayout}>
            <S.About>
              <S.AboutWrapper>
                <S.AboutTitle>About me</S.AboutTitle>
                <S.AboutContent>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </S.AboutContent>
              </S.AboutWrapper>
              <S.GoBackContainer onClick={endAnim}>
                <DoubleArrowSVG dim="64" color="#4a4a4a" />
              </S.GoBackContainer>
            </S.About>
            {useProjects &&
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
      </S.ShakeWrapper>
    </>
  );
}
