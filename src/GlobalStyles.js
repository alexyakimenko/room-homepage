import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --darkGray: hsl(0, 0%, 63%);
        --black: hsl(0, 0%, 0%);
        --white: hsl(0, 0%, 100%);
        --veryDarkGray: hsl(0, 0%, 27%);
    }

    html {
        font-size: 100%;
        box-sizing: border-box;
        height: 100%;
    }

    *, *::before, *::after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        padding: 0;
        font-size: 0.75rem;
        font-family: "League Spartan", sans-serif;
        overflow: ${({isNavOpen}) => (isNavOpen ? "hidden" : "scroll")};
    }
`