import styled from "styled-components";

export const SidebarMenu = styled.aside`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem 0;

    a {
        display: flex;
        align-items: center;
        gap: .7rem;
        padding: 1rem 2rem;
        font-size: 1.125rem;
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
        
        &:hover {
            background-color: #e8e8e8;
        }
    }

    button {
        outline: none;
        border: none;
        border-radius: 4px;
        padding: .25em .5em;
        background-color: ${props => props.theme.accent};
        color: ${props => props.theme.light};
        cursor: pointer;
        font-size:1rem;
        transition: filter .2s ease;
        margin: 0 1rem;

        &:hover,
        &:focus {
            filter: brightness(.8);
        }
    }
`