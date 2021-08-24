import styled from "styled-components";

export const CreateTodoList = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;

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
`;
