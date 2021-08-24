import styled from "styled-components";

export const SidebarMenu = styled.aside`

    background-color: #333;
    color: #fff;
    position: fixed;
    width: 5rem;
    height: 100vh;
    left: 0;
    z-index: 999;
    pointer-events: all;

    transition: width 200ms ease;

    &:hover {
        width: 16rem;
    }

    .link-text {
        display: none;
    }

    &:hover .link-text {
        display: block;
    }

    &:hover .logo span{
        display: block;
    }

    &:hover .logo svg{
        transform: rotate(-180deg);
    }

    nav {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        padding-bottom: 1rem;
    }

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;

        li {
            width: 100%;
        }
    }

    .logo {
        font-weight: bold;
        text-transform: uppercase;
        margin: 1rem 0;
        text-align:center;
        color: ${props => props.theme.accent};
        letter-spacing: 0.3ch;
        display: flex;
        align-items: center;
        justify-content: center;

        span {
            display: none;
        }

        svg {
            transform: rotate(0);
            transition: transform .6s;
            min-width: 2rem;
            font-size: 2rem;
            margin: 0 1.5rem;
        }
    }

    a {
        display: flex;
        align-items: center;
        height: 5rem;

        &:hover {
            background-color: #444;
        }

        svg {
            min-width: 2rem;
            font-size: 2rem;
            margin: 0 1.5rem;
        }
    }

    button {
       margin-top: auto;
       width: 85%;
       margin: 0 auto;
       display: flex;
       align-items: center;
       text-align: center;
       font-size: 1rem;
       background-color: #fff;
       color: #333;
       outline: none;
       border: none;
       border-radius: 4px;
       padding: .25em;
       justify-content: space-around;
       cursor: pointer;
    }
`;
