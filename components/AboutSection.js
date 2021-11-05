import { forwardRef } from "react";
import AboutValue, { valuesData } from "./AboutValue";
import TextLink from "./TextLink";
import DoubleArrowSVG from "./svg/DoubleArrowSVG";
import SingleArrowSVG from "./svg/SingleArrowSVG";
import * as A from "../styles/about";

const AboutSection = forwardRef(
  (
    { isSplitLayout, scrollOutOf, applyTransitionStyle, width, offset },
    ref
  ) => {
    return (
      <A.About
        ref={ref}
        isSplitLayout={isSplitLayout}
        applyTransitionStyle={applyTransitionStyle}
        width={width}
        offset={offset}
      >
        <div>
          <A.TitleWrapper>
            <A.AboutTitle>About</A.AboutTitle>
            {!isSplitLayout && (
              <A.TitleGoBackContainer onClick={scrollOutOf}>
                <SingleArrowSVG dim="32" color="#4a4a4a" />
              </A.TitleGoBackContainer>
            )}
          </A.TitleWrapper>

          <A.AboutIntro>
            <p>
              💻 I&apos;m a Software engineer based in Portugal, with game
              development and teaching experience.
            </p>
            <p>
              ❤️ I&apos;m passionate about interactive systems and everything
              UI/UX.
            </p>
            <p>💡 I like to make and I like to solve.</p>
            <p>
              🤹‍♂️ I have many interests. Recently, I&apos;ve been writing,
              creative coding, and Brazilian Jiu Jitsu-ing.
            </p>
            <p>
              👋 I&apos;m looking for frontend web development opportunities.{" "}
              <TextLink href="documents/tiagodinis_resume.pdf">
                Here&apos;s my resume.
              </TextLink>
            </p>
          </A.AboutIntro>
        </div>

        <A.ValuesTitleWrapper>
          <A.ValuesTitleLine />
          <A.ValuesTitle>💎 Values 💎</A.ValuesTitle>
          <A.ValuesTitleLine />
        </A.ValuesTitleWrapper>

        <A.ValuesGrid>
          {valuesData.map((d) => (
            <AboutValue key={d.title} valueData={d} />
          ))}
        </A.ValuesGrid>

        {isSplitLayout && (
          <A.GoBackContainer onClick={scrollOutOf}>
            <DoubleArrowSVG dim="64" color="#4a4a4a" />
          </A.GoBackContainer>
        )}
      </A.About>
    );
  }
);

AboutSection.displayName = "AboutSection";
export default AboutSection;
