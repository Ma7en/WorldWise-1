// import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import styles from "./Login.module.css";
// import Button from "../components/Button";
import PageNav from "../ui/header/PageNav";

// import { useAuth } from "../contexts/FakeAuthContext";

import Main from "../ui/global/Main";
import DivForm from "../ui/form/DivForm";
import Button from "../ui/global/Button";
// import { login } from "../services/apiAuth";
// import { useLogin } from "../features/authentication/useLogin";
// import SpinnerMini from "../ui/spinner/SpinnerMini";
import Heading from "../ui/global/Heading";
import LoginForm from "../features/authentication/LoginForm";

export default function Login() {
    const navigate = useNavigate();
    // PRE-FILL FOR DEV PURPOSES
    // const [email, setEmail] = useState("papofi2757@grassdev.com");
    // const [password, setPassword] = useState("123123@@");
    // const { login, isLoading } = useLogin();

    // function handleSubmite(e) {
    //     e.preventDefault();
    //     if (!email || !password) return;
    //     login(
    //         { email, password },
    //         {
    //             onSettled: () => {
    //                 setEmail("");
    //                 setPassword("");
    //             },
    //         },
    //     );
    // }

    // const { login, isAuthenticated } = useAuth();

    // function handleSubmite(e) {
    //     e.preventDefault();
    //     if (email && password) login(email, password);
    // }

    // useEffect(
    //     function () {
    //         if (isAuthenticated) navigate("/app", { replace: true });
    //     },
    //     [isAuthenticated, navigate],
    // );

    return (
        <>
            <PageNav />

            <Main type="loginpage">
                <div className="container">
                    <section>
                        <Heading as="h4">Log in to your account</Heading>

                        <LoginForm sign="true" />

                        <DivForm>
                            <Button
                                size="large"
                                onClick={() => navigate("/resetpassword")}
                            >
                                Reset password
                            </Button>

                            <Button
                                size="large"
                                onClick={() => navigate("/signup")}
                            >
                                SignUp
                            </Button>
                        </DivForm>

                        {/* <form className="form" onSubmit={handleSubmite}> */}
                        {/* <form className="form" onSubmit={handleSubmite}>
                            <div className="row">
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="email"
                                    id="email"
                                    autoComplete="username"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={isLoading}
                                />
                            </div>

                            <div className="row">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    disabled={isLoading}
                                />
                            </div>

                            <div>
                                <Button type="primary" disabled={isLoading}>
                                    {!isLoading ? "Login" : <SpinnerMini />}
                                </Button>
                            </div>
                        </form> */}
                    </section>
                </div>
            </Main>
        </>
    );
}
