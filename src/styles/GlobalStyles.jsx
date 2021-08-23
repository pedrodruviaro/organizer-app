import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        font-family: 'Roboto', sans-serif;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body { 
        background-color: ${props => props.theme.light};
        color: ${props => props.theme.dark};
    }
    
    img {
        max-width: 100%;
        height: auto;
    }
`