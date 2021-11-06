import ConditionalWrapper from "../utilities/components/ConditionalWrapper";
import TextLink from "./TextLink";
import GithubSVG from "./svg/GithubSVG";
import TwitterSVG from "./svg/TwitterSVG";
import LinkedInSVG from "./svg/LinkedInSVG";
import MailSVG from "./svg/MailSVG";
import * as H from "../styles/header";

export default function Header({ goToAbout, goToProjects }) {
  return (
    <div>
      <H.Header>
        <H.Slogan>
          Making.
          <br />
          Breaking.
          <br />
          Looking up.
        </H.Slogan>

        <H.About>
          I&apos;m{" "}
          <ConditionalWrapper
            condition={goToAbout}
            wrapper={(children) => (
              <TextLink onClick={goToAbout} label="Go to about page">
                {children}
              </TextLink>
            )}
          >
            Tiago Dinis.
          </ConditionalWrapper>{" "}
          Frontend developer focused on UX and interactivity.
          <br />
          <br />
          <ConditionalWrapper
            condition={goToProjects}
            wrapper={(children) => (
              <TextLink onClick={goToProjects} label="Go to projects">
                {children}
              </TextLink>
            )}
          >
            Take a look
          </ConditionalWrapper>{" "}
          at my work, and feel free to{" "}
          <TextLink href="mailto:tiagoddinis@gmail.com" label="Send e-mail">
            say hello!
          </TextLink>
        </H.About>

        <H.Social>
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
        </H.Social>
      </H.Header>
    </div>
  );
}
