/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDarkMode } from "../contexts/DarkModeContext";
// import styles from "./Logo.module.css";

const StyledLogo = styled.div`
    height: 5.2rem;
    transition: var(--main-transition);
    a {
        img {
            max-width: 100%;
            max-height: 100%;
        }
    }
`;

function Logo() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <>
            <StyledLogo>
                <Link to="/">
                    <img
                        src={`/images/logo/${isDarkMode ? "logo-dark.png" : "logo-light.png"}`}
                        alt="WorldWise logo"
                    />
                </Link>
            </StyledLogo>
        </>
    );
}

export default Logo;
