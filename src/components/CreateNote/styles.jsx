import styled from "styled-components";

export const CreateNote = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    margin: 0 auto;
    max-width: 500px;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        width: 100%;
    }

    fieldset {
        display: flex;
        /* flex-direction: column; */
        gap: 2rem;

        label,
        input {
            cursor: pointer;
        }

        input {
            margin-right: 0.25rem;
        }
    }

    textarea {
        resize: vertical;
        min-height: 150px;
        outline: none;
        padding: 0.5rem 0.75rem;
        font-size: 1rem;
        border-radius: 4px;
        border: 1px solid ${(props) => props.theme.accent};
        outline: none;
        width: 100%;
    }

    div {
        label {
            align-items: center;
            display: flex;
            gap: 0.5rem;
            cursor: pointer;
        }

        input {
            cursor: pointer;
            background-color: transparent;
            border-radius: 4px;
            padding: 0 .15rem;
        }
    }
`;
