import * as S from "../styles/project";
import Image from "next/image";
import styles from "../styles/previewImage.module.css";
import GithubSVG from "../components/svg/GithubSVG";
import ExternalLinkSVG from "../components/svg/ExternalLinkSVG";

export default function Project({ p, i, percentage }) {
  const interps = S.getProjectInterpolations(percentage);

  return (
    <S.Project
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
              <GithubSVG dim={interps.githubSize} color={"#fafafa"} />
            </S.ProjectLink>
          )}
          {p.externalLink && (
            <S.ProjectLink onClick={() => window.open(p.externalLink)}>
              <ExternalLinkSVG
                dim={interps.externalLinkSize}
                color={"#fafafa"}
              />
            </S.ProjectLink>
          )}
        </S.LinksWrapper>
      </S.Details>
    </S.Project>
  );
}
