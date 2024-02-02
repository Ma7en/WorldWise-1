/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import styles from "./Login.module.css";
import PageNav from "../ui/header/PageNav";
// import Button from "../components/Button";

// import { useAuth } from "../contexts/FakeAuthContext";
import Main from "../ui/global/Main";
import { useSignup } from "../features/authentication/useSignup";
import { useForm } from "react-hook-form";
import DivForm from "../ui/form/DivForm";
import Heading from "../ui/global/Heading";
import Button from "../ui/global/Button";
import SignupForm from "../features/authentication/SignupForm";

export default function Signup() {
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
    const navigate = useNavigate();
    const { signup, isLoading } = useSignup();
    const { register, formState, getValues, handleSubmit, reset } = useForm();
    const { errors } = formState;
    const [showPassword, setShowPassword] = useState(false);

    function onSubmit({ fullName, email, password }) {
        // console.log(data);
        signup(
            { fullName, email, password },
            {
                onSettled: () => reset(),
            },
        );
    }

    return (
        <>
            <PageNav />

            <Main type="loginpage">
                <div className="container">
                    <section>
                        <Heading as="h4">Signup to your account</Heading>

                        <SignupForm sign="true" />

                        <DivForm>
                            <Button
                                size="large"
                                onClick={() => navigate("/resetpassword")}
                            >
                                Reset password
                            </Button>

                            <Button
                                size="large"
                                onClick={() => navigate("/login")}
                            >
                                Login
                            </Button>
                        </DivForm>

                        {/* <form
                            className="form"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className="row">
                                <label htmlFor="email">Full name</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    placeholder="full name"
                                    {...register("fullName", {
                                        required: `This field is required`,
                                    })}
                                    disabled={isLoading}
                                />
                            </div>

                            <div className="row">
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    disabled={isLoading}
                                    {...register("email", {
                                        required: `This field is required`,
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: `Please Provide a valid email address`,
                                        },
                                    })}
                                />
                            </div>

                            <div className="row">
                                <label htmlFor="password">Password</label>
                                <input
                                    type={!showPassword ? "password" : "text"}
                                    id="password"
                                    disabled={isLoading}
                                    {...register("password", {
                                        required: `This field is required`,
                                        minLength: {
                                            value: 8,
                                            message: `Password needs a minimum of 8 characters`,
                                        },
                                    })}
                                />
                            </div>

                            <div className="row">
                                <label htmlFor="passwordConfirm">
                                    Password confirm
                                </label>
                                <input
                                    type={!showPassword ? "password" : "text"}
                                    id="passwordConfirm"
                                    disabled={isLoading}
                                    {...register("passwordConfirm", {
                                        required: `This field is required`,
                                        minLength: {
                                            value: 8,
                                            message: `Password needs a minimum of 8 characters`,
                                        },
                                        validate: (value) =>
                                            value === getValues().password ||
                                            `Passwords need to match`,
                                    })}
                                />
                            </div>

                            <div>
                                <Button type="primary" disabled={isLoading}>
                                    Login
                                </Button>
                            </div>
                        </form> */}
                    </section>
                </div>
            </Main>
        </>
    );
}
