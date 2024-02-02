/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../features/authentication/useUser";
import Spinner from "../spinner/Spinner";

// import Spinner from "./Spinner";

// import { useUser } from "../features/authentication/useUser";

const FullPage = styled.div`
    height: 100vh;
    background-color: var(--color-grey-50);
    display: flex;
    align-items: center;
    justify-content: center;
`;

function ProtectedRoute({ children }) {
    const navigate = useNavigate();

    // 1) authenticated user
    const { isLoading, isAuthenticated } = useUser();

    // 2) is thre is no authenticated user, redirect to the /login
    useEffect(
        function () {
            if (!isAuthenticated && !isLoading) {
                // navigate("/login");
                navigate("/home");
            }
            // else if (isAuthenticated) {
            //     // Redirect to the specified URL if authenticated
            //     navigate("/app/account");
            // }
        },
        [isAuthenticated, isLoading, navigate],
    );

    // 3) while loading , show a spinner
    if (isLoading)
        return (
            <>
                <FullPage>
                    <Spinner />;
                </FullPage>
            </>
        );

    // 4) if there is a user, render the app
    if (isAuthenticated) return children;
}

export default ProtectedRoute;
