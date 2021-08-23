import styled from "styled-components";
import pattern from '../../assets/images/pattern.svg'

export const LoginPage = styled.div`
    display: flex;
    justify-content: space-between;
    min-height: 100vh;
    background-image: url(${pattern});
            
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;

    .left {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4rem;
        padding: 1.5rem;
        background-color: transparent;
        flex: 6;

        
        img {
            max-width: 350px;
        }
        
        h1 {
            font-size: 4rem;
            font-weight: 300;
        }
    }
    
    .right {
        flex: 8;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.5em;


        > div {
            box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
            border-radius: 4px;
            padding: 3rem;
            text-align: center;
            background-color: #fefefe;

            h2 {
                font-size: 2rem;
                font-weight: 400;

                &::after {
                    content: "";
                    display: block;
                    margin: 1rem auto 2rem auto;
                    width: 70%;
                    height: 1px;
                    background-color: ${props => props.theme.accent};
                }
            }

            p {
                margin: 2rem 0;
                text-align: center;
            }
            
            button {
                outline: none;
                background-color: transparent;
                border: 1px solid ${props => props.theme.accent};
                border-radius: 10px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto;
                gap: .5em;
                font-size: 1rem;
                padding: .5em .75em;
                font-weight: 400;
                transition: all .2s ease;

                &:focus,
                &:hover {
                    transform: scale(1.1);
                    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                }

            }
        }
    }
`