import styled from "styled-components";

export const PrimaryTitle = styled.h1`
    font-size: 2rem;
    font-weight: 300;

    &:after {
        content: "";
        display: block;
        width: 50%;
        margin: 0.5rem auto;
        height: 1px;
        background-color: ${(props) => props.theme.accent};
    }
`;
