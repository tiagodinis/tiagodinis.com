import { useLayoutEffect, useRef, useState } from "react";
import useWindowSize from "../utilities/custom_hooks/useWindowSize";
import { clamp, getPercentage } from "../utilities/math";
import ConditionalWrapper from "../utilities/components/ConditionalWrapper";
import Header from "../components/Header";
import Project from "../components/Project";
import * as S from "../styles";
import MetaHead from "../components/MetaHead";

import projectsData from "../utilities/projectsData";

export default function Home() {
  const { width } = useWindowSize();
  const [isSplitLayout, setIsSplitLayout] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [afterHeaderY, setAfterHeaderY] = useState(0);
  const afterHeaderEl = useRef();

  useLayoutEffect(() => {
    const newIsSplitLayout = width >= 992;
    setIsSplitLayout(newIsSplitLayout);

    // Get interpolated values and project start Y target
    const percentageRange = newIsSplitLayout ? [900, 1800] : [480, 992];
    setPercentage(clamp(getPercentage(width, ...percentageRange), 0, 1));
    if (!isSplitLayout)
      setAfterHeaderY(
        afterHeaderEl.current.getBoundingClientRect().y + window.scrollY
      );
  }, [width]);

  return (
    <>
      <MetaHead />
      <ConditionalWrapper
        condition={isSplitLayout}
        wrapper={(children) => (
          <S.HomepageWrapper>{children}</S.HomepageWrapper>
        )}
      >
        <Header projectsY={afterHeaderY} percentage={percentage} />

        {!isSplitLayout && <div ref={afterHeaderEl} />}

        <S.ProjectsWrapper isSplitLayout={isSplitLayout}>
          {projectsData.map((p, i) => (
            <Project key={p.name} p={p} i={i} percentage={percentage} />
          ))}
          <S.Footer>© 2021 Tiago Dinis</S.Footer>
        </S.ProjectsWrapper>
      </ConditionalWrapper>
    </>
  );
}
