import { forwardRef } from "react";
import Image from "next/image";
import GithubSVG from "../components/svg/GithubSVG";
import ExternalLinkSVG from "../components/svg/ExternalLinkSVG";
import styles from "../styles/previewImage.module.css";
import * as P from "../styles/project";

const Project = forwardRef(({ p, i, percentage, priority }, ref) => {
  const interps = P.getProjectInterpolations(percentage);

  return (
    <P.Project ref={ref} color={p.bgColor}>
      <P.Title>
        <P.Index>{`00${i + 1} ~`}&nbsp;</P.Index>
        <P.Name>{p.name}</P.Name>
      </P.Title>
      <P.Preview>
        <Image
          className={styles.previewImage}
          src={p.imgPath}
          layout="responsive"
          alt={p.alt}
          quality="100"
          lazyBoundary="600px"
          priority={priority}
        />
        {/* <Overlay>
                <p>Go to project page</p>
              </Overlay> */}
      </P.Preview>
      <P.Details>
        <P.Description>{p.description}</P.Description>
        <P.LinksWrapper>
          {p.githubSlug && (
            <P.ProjectLink onClick={() => window.open(p.githubSlug)}>
              <GithubSVG dim={interps.githubSize || 18} color={"#fafafa"} />
            </P.ProjectLink>
          )}
          {p.externalLink && (
            <P.ProjectLink onClick={() => window.open(p.externalLink)}>
              <ExternalLinkSVG
                dim={interps.externalLinkSize || 20}
                color={"#fafafa"}
              />
            </P.ProjectLink>
          )}
        </P.LinksWrapper>
      </P.Details>
    </P.Project>
  );
});

Project.displayName = "Project";
export default Project;

import flashcards from "../public/project_previews/notion_flashcards.png";
import calculator from "../public/project_previews/calculator.png";
import insofrido from "../public/project_previews/insofrido_elites.png";
import kendo from "../public/project_previews/kendo_block.png";
import deltanaut from "../public/project_previews/deltanaut.png";
import telewarper from "../public/project_previews/telewarper.jpg";
import particles from "../public/project_previews/particles.png";

export const projectsData = [
  {
    name: "NOTION FLASHCARDS",
    description: "Spaced repetition flashcard app",
    githubSlug: "https://github.com/tiagodinis/notion-flashcards",
    externalLink: "https://notion-flashcards.herokuapp.com/",
    imgPath: flashcards,
    imgAlt: "A training session of a 'TV Pop Culture Trivia' flashcard set",
    bgColor: "#8575d0",
  },
  {
    name: "POCKET CALCULATOR",
    description: "A simple calculator app",
    githubSlug: "https://github.com/tiagodinis/calculator",
    externalLink: "https://pocketcalculator.netlify.app/",
    imgPath: calculator,
    imgAlt: "An expression example on the calculator",
    bgColor: "#47414e",
  },
  {
    name: "INSOFRIDO.COM",
    description: "Written & Interactive poetry site",
    githubSlug: "https://github.com/tiagodinis/insofrido",
    externalLink: "https://insofrido.com",
    imgPath: insofrido,
    imgAlt:
      "An interactive poem where dots animate from a selection of user choices",
    bgColor: "#d1aaac",
  },
  {
    name: "KENDO WARRIORS",
    description: "Kendo themed mini-game",
    externalLink: "https://i.imgur.com/AXn859r.gif",
    imgPath: kendo,
    imgAlt:
      "Two kendokas fight - the one to the right blocks the opponent's strike to his head",
    bgColor: "#AC5C6C",
  },
  {
    name: "DELTANAUT",
    description: "Hardcore platformer prototype",
    externalLink: "https://youtu.be/Hdfng36DgX0",
    imgPath: deltanaut,
    imgAlt:
      "A black 3-eyed robot jumps in the air, dodgin two rockets, in an arena filled with hazards",
    bgColor: "#40a0ae",
  },
  {
    name: "GPARTICLES",
    description: "Flexible GPU-based particle library",
    githubSlug: "https://github.com/tiagodinis/GParticles",
    imgPath: particles,
    imgAlt: "Fuzzy green particles disperse in a spherical pattern",
    bgColor: "#44824C",
  },
  {
    name: "TELEWARPER STAFF",
    description: "Don't Starve Together item mod",
    githubSlug: "https://github.com/tiagodinis/TelewarperStaff",
    imgPath: telewarper,
    imgAlt:
      "Don't Starve Together crafting menu shows the player he is able to craft the Telewarper Staff",
    bgColor: "#92774B",
  },
];
