import styled from "styled-components";

export const ThemeToggler = styled.div`
    .checkbox {
        opacity: 0;
        position: absolute;
    }

    .label {
        background-color: #111;
        height: 26px;
        width: 50px;
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px;
        position: relative;
        cursor: pointer;
    }

    .ball {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background-color: #fff;
        position: absolute;
        top: 2px;
        left: 2px;
        transition: transform .2s linear;
    }

    .checkbox:checked + .label .ball {
        transform: translateX(24px);
    }


    .moon {
        color: #f1c40f;
    }

    .sun {
        color: #f39c12;
    }
`;
