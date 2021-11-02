import * as S from "../styles/project";
import Image from "next/image";
import styles from "../styles/previewImage.module.css";
import GithubSVG from "../components/svg/GithubSVG";
import ExternalLinkSVG from "../components/svg/ExternalLinkSVG";
import { forwardRef } from "react";

const Project = forwardRef(({ p, i, percentage }, ref) => {
  const interps = S.getProjectInterpolations(percentage);

  return (
    <S.Project
      ref={ref}
      color={p.bgColor}
      style={{
        "--padding": `${interps.padding}px`,
        "--paddingBottom": `${interps.paddingBottom}px`,
      }}
    >
      <S.Title style={{ "--titleFSize": `${interps.titleFSize}px` }}>
        <S.Index>{`00${i + 1} ~`}&nbsp;</S.Index>
        <S.Name>{p.name}</S.Name>
      </S.Title>
      <S.Preview>
        <Image
          className={styles.previewImage}
          src={p.imgPath}
          layout="responsive"
          alt={p.alt}
          quality="100"
        />
        {/* <Overlay>
                <p>Go to project page</p>
              </Overlay> */}
      </S.Preview>
      <S.Details>
        <S.Description style={{ "--descFSize": `${interps.descFSize}px` }}>
          {p.description}
        </S.Description>
        <S.LinksWrapper>
          {p.githubSlug && (
            <S.ProjectLink onClick={() => window.open(p.githubSlug)}>
              <GithubSVG dim={interps.githubSize || 18} color={"#fafafa"} />
            </S.ProjectLink>
          )}
          {p.externalLink && (
            <S.ProjectLink onClick={() => window.open(p.externalLink)}>
              <ExternalLinkSVG
                dim={interps.externalLinkSize || 20}
                color={"#fafafa"}
              />
            </S.ProjectLink>
          )}
        </S.LinksWrapper>
      </S.Details>
    </S.Project>
  );
});

Project.displayName = "Project";
export default Project;
