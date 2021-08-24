import styled from "styled-components";

export const Dashboard = styled.div`
    margin-left: 5rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: min-content 1fr min-content;
    grid-template-areas:
        "header"
        "main"
        "footer";
    min-height: 100vh;

    header {
        grid-area: header;
    }

    footer {
        grid-area: footer;
    }

    main {
        padding: 1.5rem;
    }
`;
