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

export const SubmitButton = styled.button`
    width: 50%;
    font-size: 1rem;
    margin-top: 2rem;
    border-radius: 4px;
    outline: none;
    border: none;
    background-color: ${(props) => props.theme.accent};
    color: #fff;
    font-weight: 500;
    padding: 0.25em;
    cursor: pointer;
    transition: all 0.2s ease;

    &:focus,
    &:hover {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
            rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
        transform: scale(1.1);
    }
`;
