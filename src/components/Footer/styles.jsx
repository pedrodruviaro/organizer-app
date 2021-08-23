import styled from "styled-components";

export const Footer = styled.footer`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    background-color: #eee;

    nav {
        ul {
            display: flex;
            align-items: center;
            gap: 1.5rem;

            li {
                a {
                    outline: none;
                    
                    &:hover,
                    &:focus {
                        text-decoration: underline;
                    }
                }
            }
        }
    }

    p {
        font-size: .9rem;
        opacity: .8;
    }
`