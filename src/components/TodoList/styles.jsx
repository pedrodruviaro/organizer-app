import styled from "styled-components";

export const TodoList = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;

    > div {
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;
    }
`




export const Todo = styled.article`
        border-top: 2px solid ${props => props.theme.accent};
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        border-radius: 10px;
        flex: 1;
        min-width: 300px;
        padding: 1.5rem;

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 2rem;

            h2 {
                font-size: 1.25rem;
                text-align: center;
            }
            
            span {
                font-size: .9rem;
                border-left: 1px solid ${props => props.theme.accent};
                padding-left: 1rem;
            }
        }


        ul {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            li {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: .5rem;
                box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
                border-radius: 4px;
            }

            li.checked {
                color: red;
            }
        }

`