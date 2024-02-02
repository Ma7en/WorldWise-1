/* eslint-disable no-unused-vars */
import { NavLink, useNavigate } from "react-router-dom";
// import { useAuth } from "../contexts/FakeAuthContext";
// import styles from "./User.module.css";
import { useUser } from "../features/authentication/useUser";
import { useLogout } from "../features/authentication/useLogout";
import SpinnerMini from "../ui/spinner/SpinnerMini";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { App_Url } from "../utils/constants";
import DarkModeToggle from "../ui/themes/DarkModeToggle";
import styled from "styled-components";
import Button from "../ui/global/Button";

const StyledUser = styled.div`
    position: absolute;
    top: 2.2rem;
    right: 2.2rem;
    background-color: var(--color-dark--1);
    padding: 1rem 1.4rem;
    border-radius: 7px;
    z-index: 999;
    box-shadow: 0 0.8rem 2.4rem rgba(36, 42, 46, 0.5);
    font-size: 1.6rem;
    font-weight: 600;

    display: flex;
    align-items: center;
    gap: 1.6rem;

    background-color: var(--color-grey-0);
    border: 1px solid var(--color-grey-100);
    /* box-shadow: var(--shadow-lg); */

    img {
        border-radius: 100px;
        height: 4rem;
    }

    .logout {
        background-color: var(--color-dark--2);
        border-radius: 7px;
        border: none;
        padding: 0.6rem 1.2rem;
        color: inherit;
        font-family: inherit;
        font-size: 1.2rem;
        font-weight: 700;
        text-transform: uppercase;
        cursor: pointer;
        transition: var(--main-transition);

        background-color: var(--color-grey-0);
        border: 1px solid var(--color-grey-100);
        box-shadow: var(--shadow-lg);
        &:hover {
            background-color: var(--color-grey-100);
        }
         svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-brand-600);
    }
`;

function User() {
    // const { user, logout } = useAuth();
    // const navigate = useNavigate();

    // function handleClick() {
    //     logout();
    //     navigate("/");
    // }
    const navigate = useNavigate();
    const { user } = useUser();
    const { logout, isLoading } = useLogout();
    const { fullName, avatar } = user.user_metadata;

    return (
        <>
            <StyledUser>
                {/* <img src={user.avatar} alt={user.name} /> */}

                <NavLink to={`${App_Url}/account`}>
                    <img
                        src={avatar || "/images/default-user.jpg"}
                        alt={`Avatar of ${fullName}`}
                        // onClick={() => navigate("/account")}
                    />
                </NavLink>

                <span>Welcome, {fullName}</span>
                <DarkModeToggle />
                {/* <button onClick={handleClick}>Logout</button> */}
                {/* <button disabled={isLoading} onClick={logout}>
                    {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
                </button> */}
                <button
                    disabled={isLoading}
                    onClick={logout}
                    className="logout"
                >
                    {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
                </button>
            </StyledUser>
            {/* <div>user</div> */}
        </>
    );
}

export default User;

/*
CHALLENGE

1) Add `AuthProvider` to `App.jsx`
2) In the `Login.jsx` page, call `login()` from context
3) Inside an effect, check whether `isAuthenticated === true`. If so, programatically navigate to `/app`
4) In `User.js`, read and display logged in user from context (`user` object). Then include this component in `AppLayout.js`
5) Handle logout button by calling `logout()` and navigating back to `/`
*/
