/* eslint-disable no-unused-vars */
import styled, { css } from "styled-components";

const Nav = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: calc(100% - 4rem);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.8rem 0rem;
    margin: 2rem 2rem 0rem 2rem;
    /* background-color: #4c4d50; */
    border-top-right-radius: 2.5rem;
    border-top-left-radius: 2.5rem;
    z-index: 1000;
    transition: var(--main-transition);
    /* background-color: #262e3241; */
    /* background-color: #ff00002f; */

    background-color: var(--color-grey-0);
    border: 1px solid var(--color-grey-100);
    /* box-shadow: var(--shadow-lg); */

    .container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        /* .logo {
            height: 5.2rem;
            transition: var(--main-transition);
            a {
                img {
                    max-width: 100%;
                    max-height: 100%;
                }
            }
        } */

        .btn-toggle {
            display: none;
            svg {
                font-size: 2.8rem;
                cursor: pointer;
                transition: var(--main-transition);
            }
            @media (max-width: 768px) {
                display: flex;
            }
        }

        ul {
            list-style: none;
            display: flex;
            align-items: center;
            gap: 4rem;
            transition: var(--main-transition);

            li {
                transition: var(--main-transition);
                a {
                    transition: var(--main-transition);
                }
                a:link,
                a:visited {
                    text-decoration: none;
                    /* color: var(--color-light--2); */
                    text-transform: uppercase;
                    font-size: 1.5rem;
                    font-weight: 600;
                }
                a.active {
                    color: var(--color-brand--2);
                }
                a.ctaLink:link,
                a.ctaLink:visited {
                    background-color: var(--color-brand--2);
                    color: var(--color-dark--0);
                    padding: 0.8rem 2rem;
                    border-radius: 7px;
                }
            }
            @media (max-width: 768px) {
                display: none;
            }
            @media (max-width: 768px) {
                &.open {
                    /* background-color: #ff00002f; */
                    /* background-color: #262e32; */
                    /* background-color: #262e3241; */
                    /* background-color: #4c4d50; */
                    /* transform: scale(0.94); */
                    /* top: 100%; */

                    display: flex;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    width: 100%;
                    padding: 2rem 2rem;
                    flex-direction: column;
                    gap: 2rem;
                    transition: var(--main-transition);

                    background-color: var(--color-grey-50);
                    li {
                        width: 100%;
                        a {
                            display: block;
                            width: 100%;
                            &.ctaLink {
                                width: fit-content;
                            }
                        }
                    }
                }
            }
        }
    }
    ${(props) =>
        props.type === "sticky" &&
        css`
            /* padding-top: 0; */
            margin-top: 0rem;
            border-radius: 0;
            @media (max-width: 768px) {
                margin-top: 0rem;
                border-radius: 0;
            }
        `}
`;

// Nav.defaultProps = {
//     type: "vertical",
// };

export default Nav;
