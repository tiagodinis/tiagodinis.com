import styled from "styled-components";

export default function TextLink({ href, label, onClick, children }) {
  return (
    <Link onClick={onClick} href={href} target="_blank" aria-label={label}>
      {children}
    </Link>
  );
}

const Link = styled.a`
  display: inline-block;

  font-weight: 600;
  color: #3b80fe;
  text-decoration: none;

  &:hover {
    color: #7ba9fc;
    cursor: pointer;
  }

  transition: color 0.2s ease-out;
`;
