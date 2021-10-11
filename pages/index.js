import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  Footer,
  HomepageContainer,
  ProjectStub,
  ProjectList,
  LeftSide,
  RightSide,
  BorderGradient,
} from "./styles";

export default function Home() {
  return (
    <HomepageContainer>
      <LeftSide>
        <header>
          <h1>Hi! I'm Tiago Dinis</h1>
          <p>Frontend developer focusing on UX, interactivity and data viz.</p>
          <p>
            I'm currently looking for a job so feel free to 👋 if you like what
            you see (here's my resume)
          </p>
        </header>
        <Footer>© 2021 Tiago Dinis</Footer>
      </LeftSide>
      <RightSide>
        <BorderGradient />
        <ProjectList>
          {getProjectMetaData().map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}`}>
              <ProjectStub>
                <h3>{p.name}</h3>
                <div>{p.description}</div>
              </ProjectStub>
            </Link>
          ))}
        </ProjectList>
        <BorderGradient bottom />
      </RightSide>
    </HomepageContainer>
  );
}

function getProjectMetaData() {
  return [
    {
      name: "Notion Flashcards",
      description: "This is project A",
      slug: "notion-flashcards",
    },
    {
      name: "Pocket Calculator",
      description: "This is project A",
      slug: "pocket-calculator",
    },
    {
      name: "Code gallery",
      description: "This is project C",
      slug: "code-gallery",
    },
    {
      name: "Insofrido.com",
      description: "This is project C",
      slug: "insofrido",
    },
    {
      name: "Kendo Warriors",
      description: "This is project A",
      slug: "kendo-warriors",
    },
    { name: "Deltanaut", description: "This is project A", slug: "deltanaut" },
    {
      name: "GParticles",
      description: "This is project B",
      slug: "gparticles",
    },
    {
      name: "Telewarper Staff",
      description: "This is project B",
      slug: "telewarper-staff",
    },
  ];
}
