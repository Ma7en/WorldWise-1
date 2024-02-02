import { NavLink } from "react-router-dom";
// import styles from "./AppNav.module.css";
import { App_Url } from "../utils/constants";
import styled from "styled-components";

const NavStyled = styled.nav`
    /* margin-top: 3rem;
    margin-bottom: 2rem; */
    ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        /* background-color: var(--color-dark--2);
        border-radius: 7px; */
        box-shadow: var(--shadow-lg);
        background-color: var(--color-grey-0);
        border: 1px solid var(--color-grey-100);
        border-radius: var(--border-radius-md);
        li {
            a:link,
            a:visited {
                display: block;
                color: inherit;
                text-decoration: none;
                text-transform: uppercase;
                font-size: 1.2rem;
                font-weight: 700;
                padding: 0.5rem 2rem;
                border-radius: 5px;
            }
            a.active {
                /* background-color: var(--color-dark--0); */
                background-color: var(--color-grey-300);
            }
        }
    }
`;

const AppNav = () => {
    return (
        <>
            <NavStyled>
                <ul>
                    <li>
                        <NavLink to={`${App_Url}/cities`}>Cities</NavLink>
                    </li>
                    <li>
                        <NavLink to={`${App_Url}/countries`}>Countries</NavLink>
                    </li>
                    <li>
                        <NavLink to={`${App_Url}/account`}>Account</NavLink>
                    </li>
                </ul>
            </NavStyled>
        </>
    );
};

export default AppNav;
