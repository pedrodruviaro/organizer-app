import styled from "styled-components";

export const Dashboard = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: min-content 1fr min-content;
    grid-template-areas: "header header"
                        "aside main"
                        "footer footer";
    min-height: 100vh;

    header {
        grid-area: header;
    }
    
    footer {
        grid-area: footer;
    }
`