/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledFormRow = styled.div`
    /* display: flex;
    flex-direction: column; */
    display: grid;
    grid-template-columns: 1fr;
    justify-items: stretch;
    align-items: stretch;

    /* gap: 0.8rem; */
    gap: 2.4rem;
    padding: 1.2rem 0;
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

function FormRowVertical({ label, error, children }) {
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

export default FormRowVertical;
