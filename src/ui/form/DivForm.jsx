/* eslint-disable react/prop-types */
import styled from "styled-components";

const Div = styled.div`
    /* display: flex;
    align-items: center;
    justify-content: center; */

    /* margin-bottom: 3.2rem; */
    width: 100%;
    max-width: 48rem;
    /* background-color: var(--color-dark--2); */

    /* border: 1px solid var(--color-grey-100); */
    /* border-radius: var(--border-radius-md); */
    border-radius: 7px;
    /* box-shadow: var(--shadow-lg); */
    padding: 1.2rem 2rem;
    font-size: 1.4rem;
    transition: var(--main-transition);

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.8rem;

    background-color: var(--color-grey-0);
    border: 1px solid var(--color-grey-100);
    border-radius: var(--border-radius-md);
    box-shadow: var(--shadow-lg);

    button {
        text-transform: capitalize;
    }
`;

function DivForm({ children }) {
    return (
        <>
            <Div>{children}</Div>
        </>
    );
}

export default DivForm;
