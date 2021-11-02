import styled from "styled-components";

export default function SectionTitle({ title }) {
  return (
    <Wrapper>
      <Line />
      <Title>{title}</Title>
      <Line />
    </Wrapper>
  );
}

const color = "#4a4a4a";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
  flex-grow: 1;
  border-top: 1px solid ${color};
`;

const Title = styled.div`
  padding: 0px 10px;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: ${color};
`;
