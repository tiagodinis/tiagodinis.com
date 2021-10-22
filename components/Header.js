import * as S from "../styles/header";
import GithubSVG from "./svg/GithubSVG";
import TwitterSVG from "./svg/TwitterSVG";
import LinkedInSVG from "./svg/LinkedInSVG";
import MailSVG from "./svg/MailSVG";
import ConditionalWrapper from "../utilities/components/ConditionalWrapper";

export default function Header(props) {
  const interps = S.getHeaderInterpolations(props.percentage);

  function handleExploreProjects() {
    if (props.isSplitLayout) return;
    window.scrollTo({ top: props.projectsY, behavior: "smooth" });
  }

  return (
    <S.Header style={{ "--headerLeft": `${interps.headerLeft}px` }}>
      <S.Slogan
        style={{
          "--heroLHeight": `${interps.heroLHeight}rem`,
          "--heroFSize": `${interps.heroFSize}px`,
        }}
      >
        Making.
        <br />
        Breaking.
        <br />
        Looking up.
      </S.Slogan>

      <S.About>
        I&apos;m{" "}
        <S.TextLink onClick={props.goToAbout} aria-label="Go to about page">
          Tiago Dinis.
        </S.TextLink>{" "}
        Frontend developer focused on UX and interactivity.
        <br />
        <br />
        <ConditionalWrapper
          condition={!props.isSplitLayout}
          wrapper={(children) => (
            <S.TextLink onClick={handleExploreProjects}>{children}</S.TextLink>
          )}
        >
          Take a look
        </ConditionalWrapper>{" "}
        at my work, and feel free to{" "}
        <S.TextLink
          href="mailto:tiagoddinis@gmail.com"
          aria-label="Send e-mail"
        >
          say hello!
        </S.TextLink>
      </S.About>

      <S.Social>
        <a
          href="https://github.com/tiagodinis"
          aria-label="Go to github"
          target="_blank"
          rel="noreferrer"
        >
          <GithubSVG dim={24} />
        </a>
        <a href="mailto:tiagoddinis@gmail.com" aria-label="Send e-mail">
          <MailSVG dim={28} />
        </a>
        <a
          href="https://twitter.com/insofrido"
          aria-label="Go to twitter"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterSVG dim={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/tiagoddinis/"
          aria-label="Go to github"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInSVG dim={24} />
        </a>
      </S.Social>
    </S.Header>
  );
}
