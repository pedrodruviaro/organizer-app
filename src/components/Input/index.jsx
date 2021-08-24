import styled from "styled-components";

export const Input = styled.input`
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.accent};
    outline: none;
    width: 100%;
`;
