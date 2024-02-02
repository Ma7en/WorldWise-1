// import { useEffect, useState } from "react";

// import styles from "./Login.module.css";
import PageNav from "../ui/header/PageNav";
// import Button from "../components/Button";

// import { useAuth } from "../contexts/FakeAuthContext";
// import { useNavigate } from "react-router-dom";
import Main from "../ui/global/Main";
import Heading from "../ui/global/Heading";
import ResetPasswordForm from "../features/authentication/ResetPasswordForm";
import DivForm from "../ui/form/DivForm";
import Button from "../ui/global/Button";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
    const navigate = useNavigate();

    // PRE-FILL FOR DEV PURPOSES
    // const [email, setEmail] = useState("info@mazen.com");
    // const [password, setPassword] = useState("123123@@");

    // const { login, isAuthenticated } = useAuth();
    // const navigate = useNavigate();

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
                        <Heading as="h4">
                            Reset Password to your account
                        </Heading>

                        <ResetPasswordForm />

                        <DivForm>
                            <Button
                                size="large"
                                onClick={() => navigate("/login")}
                            >
                                Login
                            </Button>

                            <Button
                                size="large"
                                onClick={() => navigate("/signup")}
                            >
                                SignUp
                            </Button>
                        </DivForm>

                        {/* <form className="form" onSubmit={handleSubmite}>
                            <div className="row">
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="email"
                                    id="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                            </div>

                            <div className="row">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    value={password}
                                />
                            </div>

                            <div>
                                <Button type="primary">Login</Button>
                            </div>
                        </form> */}
                    </section>
                </div>
            </Main>
        </>
    );
}
