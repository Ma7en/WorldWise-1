/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React from "react";
import styles from "./PageNav.module.scss";

const PageNav = () => {
    return (
        <>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link to="/pricing">pricing</Link>
                    </li>
                    <li>
                        <Link to="/product">product</Link>
                    </li>
                    <li>
                        <Link to="/product">product</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default PageNav;
