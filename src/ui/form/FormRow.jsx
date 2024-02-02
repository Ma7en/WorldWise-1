/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledFormRow = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 24rem 1fr 1.2fr;
    gap: 2.4rem;

    padding: 1.2rem 0;

    &:first-child {
        padding-top: 0;
    }

    &:last-child {
        padding-bottom: 0;
    }

    /* &:not(:last-child) {
        border-bottom: 1px solid var(--color-grey-100);
    } */

    &:has(button) {
        display: flex;
        justify-content: flex-end;
        gap: 1.2rem;
    }
`;

const Label = styled.label`
    font-weight: 500;
`;

const Error = styled.span`
    font-size: 1.4rem;
    color: var(--color-red-700);
`;

// const Div = styled.div`
//     position: relative;
//     display: grid;
//     grid-template-columns: 1fr;
//     justify-items: stretch;
//     align-items: stretch;
//     gap: 1.4rem;
//     input {
//         width: 100%;
//     }
//     svg {
//         position: absolute;
//         cursor: pointer;
//         right: 13px;
//         top: 50%;
//         transform: translateY(-50%);
//     }
// `;

function FormRow({ label, error, children }) {
    return (
        <>
            <StyledFormRow>
                {label && <Label htmlFor={children.props.id}>{label}</Label>}
                {/* <Div>{children}</Div> */}
                {children}
                {error && <Error>{error}</Error>}
            </StyledFormRow>
        </>
    );
}

export default FormRow;
