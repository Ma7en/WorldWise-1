import styled, { css } from "styled-components";

const Form = styled.form`
    width: 100%;
    max-width: 48rem;
    box-shadow: var(--shadow-lg);
    ${(props) =>
        props.type === "regular" &&
        css`
            padding: 2.4rem 4rem;

            /* Box */
            background-color: var(--color-grey-0);
            border: 1px solid var(--color-grey-100);
            border-radius: var(--border-radius-md);
        `}

    ${(props) =>
        props.type === "modal" &&
        css`
            width: 80rem;
        `}

    ${(props) =>
        props.type === "updata" &&
        css`
            max-width: 100%;
            padding: 2rem 2rem;
            background-color: var(--color-grey-0);
            border: 1px solid var(--color-grey-100);
            border-radius: var(--border-radius-md);
        `}
    
    overflow: hidden;
    font-size: 1.4rem;

    > div:not(:last-child) {
        border-bottom: 1px solid var(--color-grey-100);
    }
`;

Form.defaultProps = {
    type: "regular",
};

export default Form;
