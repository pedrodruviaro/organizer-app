import styled from "styled-components";

export const ExpenseTracker = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding-top: 1.5rem;

    .cards {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 3rem;
        width: 100%;
        max-width: 900px;

        .balance {
            background-color: #00b894;
            color: #fff;
        }

        div {
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
                rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
            border-radius: 4px;
            padding: 1.5rem;
            flex: 1;
            text-align: center;

            header {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 1rem;
                margin-bottom: 1.5rem;

                svg {
                    font-size: 1.5rem;
                }
            }

            p {
                font-size: 2rem;
                font-weight: 500;
            }
        }
    }

    form {
        width: 100%;
        max-width: 600px;

        fieldset {
            display: flex;
            align-items: center;
            padding: 0.25rem;
            border-radius: 4px;
            box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
            background-color: #e84393;

            input {
                border: none;
                outline: none;
                font-size: 1rem;
                flex: 1;
                padding: 0.25rem;
                background-color: transparent;
                color: #fff;

                &::placeholder {
                    color: #fdfdfd;
                    opacity: 0.8;
                }
            }
        }

        button {
            background-color: transparent;
            border: none;
            outline: none;
            color: #e84393;
            font-size: 1rem;
            margin-top: 0.75rem;
            font-weight: 500;
            cursor: pointer;
            transition: transform 0.3s ease;

            &::before {
                content: "+ ";
            }

            &:focus,
            &:hover {
                transform: scale(1.1);
            }
        }
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
        max-width: 600px;

        li {
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
                rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
            display: flex;
            align-items: center;
            width: 100%;
            padding: 0.75rem 0.5rem;
            border-radius: 4px;

            p {
                flex: 1;
            }

            span {
                font-weight: 500;

                &::before {
                    content: "$ ";
                }
            }

            &:hover button {
                display: block;
            }

            button {
                background-color: transparent;
                border: none;
                outline: none;
                color: #e84393;
                font-size: 1rem;
                font-weight: 500;
                cursor: pointer;
                margin-left: 0.5rem;
                display: none;
            }
        }
    }
`;
