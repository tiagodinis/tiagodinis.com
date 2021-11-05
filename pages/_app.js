import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    /* When navigating to about ... */
    overflow-y: scroll; /* ... avoid horizontal shift on desktop scroll-up*/
    overflow-x: hidden; /* ... hide horizontal scrollbar on mobile side-swipe*/
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
