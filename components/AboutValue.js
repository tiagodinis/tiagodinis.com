import styled from "styled-components";

export default function AboutValue({ valueData }) {
  return (
    <article>
      <Title>{valueData.title}</Title>
      <QuoteWrapper>
        <Quote>{valueData.quote}&nbsp;</Quote>
        <Author>— {valueData.author}</Author>
      </QuoteWrapper>
      <Description>{valueData.description}</Description>
    </article>
  );
}

const Title = styled.h3`
  padding-bottom: 10px;
  font-size: 38px;
  color: #4a4a4a;
`;

const QuoteWrapper = styled.div`
  @media (min-width: 420px) {
    position: relative;
    top: -3px;

    display: flex;
    padding-left: 46px;
    align-items: flex-end;

    div:first-child {
      padding-top: 10px;
    }

    div:last-child {
      top: 1px;
    }
  }
`;

const Quote = styled.div`
  text-align: center;
  font-style: italic;
  font-size: 16px;
  color: #7e7e7e;
`;

const Author = styled.div`
  position: relative;
  top: -5px;
  text-align: right;
  font-size: 12px;
`;

const Description = styled.p`
  padding-top: 6px;
`;

export const valuesData = [
  {
    title: "Curiosity",
    quote: "God is in the detail",
    author: "Ludwig Mies van der Rohe",
    description:
      "I was born a curious child. Feeling the patterns, making sense, unveiling the beauty of connectedness — that is still my greatest joy. From art to philosophy to history and math, I'm always exploring the world's infinite mesh of detail.",
  },
  {
    title: "Excellence",
    quote: "We must imagine Sisyphus happy",
    author: "Albert Camus",
    description:
      "I'm driven to do well and go beyond expectations. I'm always thinking if there's a faster, simpler, more elegant way of doing things. I'm the guy carrying all the grocery bags at once.",
  },
  {
    title: "Pragmatism",
    quote: "Hands that help over lips that pray",
    author: "J H McIntosh",
    description:
      "I believe results stand above methodology. Plans must adapt, and theory only goes so far. I've learned that *actually* working on a problem is usually a more efficient way of understanding its constraints.",
  },
  {
    title: "Honesty",
    quote: "Sunlight's the best disinfectant",
    author: "William O Douglas",
    description:
      "I strive to be kind and assume best intent without compromising being honest with myself and others. Managing expectations, not wasting people's time or allowing issues to fester, that is kindness as well.",
  },
];
