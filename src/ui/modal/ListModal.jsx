/* eslint-disable no-unused-vars */
import styled from "styled-components";

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const StyledToggle = styled.button`
    background: none;
    border: none;
    padding: 0.4rem;
    border-radius: var(--border-radius-sm);
    transform: translateX(0.8rem);
    transition: all 0.2s;

    &:hover {
        background-color: var(--color-grey-100);
    }

    & svg {
        width: 2.4rem;
        height: 2.4rem;
        color: var(--color-grey-700);
    }
`;

const StyledList = styled.ul`
    position: fixed;

    background-color: var(--color-grey-0);
    box-shadow: var(--shadow-md);
    border-radius: var(--border-radius-md);

    right: ${(props) => props.position.x}px;
    top: ${(props) => props.position.y}px;
`;

const StyledButton = styled.button`
    width: 100%;
    text-align: left;
    background: none;
    border: none;
    padding: 1.2rem 2.4rem;
    font-size: 1.4rem;
    transition: all 0.2s;

    display: flex;
    align-items: center;
    gap: 1.6rem;

    &:hover {
        background-color: var(--color-grey-50);
    }

    & svg {
        width: 1.6rem;
        height: 1.6rem;
        color: var(--color-grey-400);
        transition: all 0.3s;
    }
`;

const Button = styled.button`
    background: none;
    border: none;
    padding: 0.4rem;
    /* border-radius: var(--border-radius-sm); */
    border-radius: 50%;
    color: var(--color-brand-600);
    transform: translateX(0.8rem);
    position: absolute;
    top: 1.2rem;
    right: 1.9rem;

    border: 1px solid var(--color-grey-500);
    border-radius: 50%;

    transition: all 0.5s;

    &:hover {
        /* background-color: var(--color-grey-100); */
        background-color: var(--color-brand-600);
        color: var(--color-grey-0);

        border: 1px solid var(--color-grey-0);
        transition: all 0.5s;
        svg {
            color: var(--color-grey-500);
            transition: all 0.5s;
        }
    }

    & svg {
        width: 2.4rem;
        height: 2.4rem;
        /* Sometimes we need both */
        /* fill: var(--color-grey-500);
        stroke: var(--color-grey-500); */

        color: var(--color-grey-500);
        transition: all 0.5s;
        &:hover {
            color: var(--color-grey-500);
            transition: all 0.5s;
        }
    }
`;

function ListModal() {
    return (
        <>
            <ul>
                <li></li>
            </ul>
        </>
    );
}

export default ListModal;
