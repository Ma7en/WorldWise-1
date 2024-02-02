/* eslint-disable no-unused-vars */
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { HiBars3, HiMiniXMark } from "react-icons/hi2";

import Logo from "../../components/Logo";
import Nav from "./Nav";
import DarkModeToggle from "../themes/DarkModeToggle";
import Button from "../global/Button";

const PageNav = () => {
    const [navbar, setNavbar] = useState(false);
    const [sticky, setSticky] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setNavbar(false);
            if (window.scrollY > 50) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        });
    }, []);

    return (
        <>
            <Nav type={sticky ? "sticky" : ""}>
                <div className="container">
                    <Logo />

                    <DarkModeToggle />

                    <ul className={`${navbar ? "nav open" : "nav"}`}>
                        <li>
                            <NavLink to="/home">Home</NavLink>
                            {/* <a onClick={() => navigate("/home")}>Home</a> */}
                        </li>

                        <li>
                            <NavLink to="/pricing">pricing</NavLink>
                        </li>
                        <li>
                            <NavLink to="/product">product</NavLink>
                        </li>
                        <li>
                            <Button
                                size="large"
                                onClick={() => navigate("/login")}
                            >
                                Login
                            </Button>
                            {/* <NavLink to="/login" className="ctaLink">
                                Login
                            </NavLink> */}
                        </li>
                    </ul>

                    <div className="btn-toggle">
                        {navbar ? (
                            <HiMiniXMark
                                onClick={() => {
                                    setNavbar(!navbar);
                                }}
                            />
                        ) : (
                            <HiBars3
                                onClick={() => {
                                    setNavbar(!navbar);
                                }}
                            />
                        )}
                    </div>
                </div>
            </Nav>
        </>
    );
};

export default PageNav;
