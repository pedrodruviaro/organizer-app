import styled from "styled-components";

export const TodoList = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;

    h1 {
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
    }

    > input {
        padding: 0.5rem 0.75rem;
        font-size: 1rem;
        border-radius: 4px;
        border: 1px solid ${(props) => props.theme.accent};
        outline: none;
        width: 100%;
        transition: border-color .6s ease;
    }

    form {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 4px;
        border: 1px solid ${(props) => props.theme.accent};
        overflow: hidden;
        width: 100%;

        input {
            padding: 0.5rem 0.75rem;
            font-size: 1rem;
            border: none;
            outline: none;
            flex: 1;
        }
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        margin-top: 2rem;
        width: 100%;

        h3 {
            font-size: 1.5rem;
            font-weight: 400;
        }

        ul {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            width: 100%;

            li {
                box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
                    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
                border-radius: 4px;
                padding: 0.5rem;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;

                p {
                    flex: 1;
                }

                
            }

            span {
                text-align: center;
                opacity: .8;
            }
        }
    }

    > button {
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
    }
`;
