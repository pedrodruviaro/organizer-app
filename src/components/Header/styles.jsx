import styled from "styled-components";

export const Header = styled.header`
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    z-index: 999;

    .logo-container {
        display: flex;
        align-items: center;
        gap: .5rem;

        svg {
            font-size: 1.5rem;
        }

        span {
            font-size: 1.25rem;
        }
    }

    .user-info {
        display: flex;
        align-items: center;
        gap: .5rem;

        img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }
`;
