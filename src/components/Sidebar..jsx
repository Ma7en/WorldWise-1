/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
// import styles from "./Sidebar.module.css";

import Logo from "./Logo";
import AppNav from "./AppNav";
import styled from "styled-components";

const StyledSodebar = styled.div`
    /* flex-basis: 56rem; */
    /* background-color: var(--color-dark--1); */
    /* padding: 3rem 5rem 3.5rem 5rem; */
    padding: 1.4rem 2.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    /* height: calc(100vh - 4.8rem); */
    .footer {
        padding: 1.4rem 0rem;
        margin-top: auto;
        .copyright {
            font-size: 1.2rem;
            color: var(--color-light--1);
        }
    }
    background-color: var(--color-grey-0);
    border: 2px solid var(--color-grey-100);
    box-shadow: var(--shadow-lg);
`;

const Sidebar = () => {
    // const pathname = window.location.pathname;
    // console.log(ma);
    return (
        <>
            <StyledSodebar>
                <Logo />

                <AppNav />

                <Outlet />

                <footer className="footer">
                    <p className="copyright">
                        &copy; Copyright {new Date().getFullYear()} by worlwise
                        M7S.
                    </p>
                </footer>
            </StyledSodebar>
        </>
    );
};

export default Sidebar;
