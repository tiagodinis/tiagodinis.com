import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  // Footer,
  // HomepageContainer,
  // ProjectStub,
  // ProjectList,
  // LeftSide,
  // RightSide,
  // BorderGradient,
  HomepageContainer,
  Header,
  Hero,
  About,
  TextLink,
  Social,
  ProjectsContainer,
  BorderGradient,
  ProjectList,
  ProjectStub,
  Footer,
} from "../styles";

import GithubSVG from "../components/svg/GithubSVG";
import TwitterSVG from "../components/svg/TwitterSVG";
import LinkedInSVG from "../components/svg/LinkedInSVG";
import MailSVG from "../components/svg/MailSVG";

export default function Home() {
  const iconSize = 24;
  const iconIdleColor = "#a2a2a2";

  return (
    // <HomepageContainer>
    //   <LeftSide>
    //     <header>
    //       <h1>Hi! I&apos;m Tiago Dinis</h1>
    //       <p>Frontend developer focusing on UX, interactivity and data viz.</p>
    //       <p>
    //         I&apos;m currently looking for a job so feel free to 👋 if you like
    //         what you see (here&apos;s my resume)
    //       </p>
    //     </header>
    //     <Footer>© 2021 Tiago Dinis</Footer>
    //   </LeftSide>
    //   <RightSide>
    //     <BorderGradient />
    //     <ProjectList>
    //       {getProjectMetaData().map((p) => (
    //         <ProjectStub key={p.name} onClick={() => window.open(p.slug)}>
    //           <h3>{p.name}</h3>
    //           <div>{p.description}</div>
    //         </ProjectStub>
    //       ))}
    //     </ProjectList>
    //     <BorderGradient bottom />
    //   </RightSide>
    // </HomepageContainer>

    <HomepageContainer>
      <Header>
        <Hero>
          Making.
          <br />
          Breaking.
          <br />
          Looking up.
        </Hero>

        <About>
          I'm{" "}
          <TextLink href="https://www.google.com/" target="_blank">
            Tiago Dinis
          </TextLink>
          . Frontend developer focused on UX and interactivity.
          <br />
          <br />
          <TextLink href="https://www.google.com/" target="_blank">
            Explore
          </TextLink>{" "}
          highlighted works, and feel free to{" "}
          <TextLink href="https://www.google.com/" target="_blank">
            say hello!
          </TextLink>
        </About>
        <Social>
          <GithubSVG dim={iconSize} />
          {/* <MailSVG color={iconIdleColor} dim={38} /> */}
          <MailSVG dim={28} />
          <TwitterSVG dim={iconSize} />
          <LinkedInSVG dim={iconSize} />
        </Social>
      </Header>
      {/* <ProjectsContainer>
        {getProjectMetaData().map((p) => (
          <ProjectStub key={p.name} onClick={() => window.open(p.slug)}>
            <h3>{p.name}</h3>
            <div>{p.description}</div>
          </ProjectStub>
        ))}
      </ProjectsContainer>
      <Footer>© 2021 Tiago Dinis</Footer> */}
    </HomepageContainer>
  );
}

function getProjectMetaData() {
  return [
    {
      name: "Notion Flashcards",
      description: "This is project A",
      slug: "https://github.com/tiagodinis/notion-flashcards",
    },
    {
      name: "Pocket Calculator",
      description: "This is project A",
      slug: "https://github.com/tiagodinis/calculator",
    },
    // {
    //   name: "Code gallery",
    //   description: "This is project C",
    //   slug: "https://insofrido.com",
    // },
    {
      name: "Insofrido.com",
      description: "This is project C",
      slug: "https://insofrido.com",
    },
    {
      name: "Kendo Warriors",
      description: "This is project A",
      slug: "https://insofrido.com",
    },
    {
      name: "Deltanaut",
      description: "This is project A",
      slug: "https://youtu.be/Hdfng36DgX0",
    },
    {
      name: "GParticles",
      description: "This is project B",
      slug: "https://github.com/tiagodinis/GParticles",
    },
    {
      name: "Telewarper Staff",
      description: "This is project B",
      slug: "https://github.com/tiagodinis/TelewarperStaff",
    },
  ];
}
