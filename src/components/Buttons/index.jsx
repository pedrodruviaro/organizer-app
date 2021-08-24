import styled from "styled-components";

export const InputButtons = styled.button`
    outline: none;
    background-color: transparent;
    border: none;
    font-size: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.5rem;
    color: ${(props) => props.color};
    transition: filter 0.2s ease;
    cursor: pointer;

    &:focus,
    &:hover {
        filter: brightness(0.7);
    }
`;
