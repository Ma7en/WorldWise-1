/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import { HiEye, HiEyeSlash } from "react-icons/hi2";
import { useForm } from "react-hook-form";

import { useLogin } from "./useLogin";

import Form from "../../ui/form/Form";
import FormRowVertical from "../../ui/form/FormRowVertical";
import Input from "../../ui/form/Input";
import FormRowPass from "../../ui/form/FormRowPass";
import Button from "../../ui/global/Button";
import SpinnerMini from "../../ui/spinner/SpinnerMini";

// hi2 HiEye
// hi2 HiEyeSlash

function LoginForm({ sign }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, isLoading } = useLogin();
    const { register, formState, reset, handleSubmit } = useForm();
    const { errors } = formState;
    const [showPassword, setShowPassword] = useState(false);

    function onSubmit({ email, password }) {
        // console.log(data);
        login(
            { email, password },
            {
                onSettled: () => reset(),
            },
        );
    }

    // function handleSubmit(e) {
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

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormRowVertical
                    label="Email address"
                    error={errors?.email?.message}
                >
                    <Input
                        type="email"
                        id="email"
                        // This makes this form better for password managers
                        autoComplete="username"
                        disabled={isLoading}
                        {...register("email", {
                            required: `This field is required`,
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: `Please Provide a valid email address`,
                            },
                        })}
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                    />
                </FormRowVertical>

                <FormRowPass
                    label="Password"
                    error={errors?.password?.message}
                    sign={sign}
                    // icon={<HiEye />}
                >
                    <>
                        <Input
                            type={!showPassword ? "password" : "text"}
                            id="password"
                            autoComplete="current-password"
                            disabled={isLoading}
                            {...register("password", {
                                required: `This field is required`,
                                minLength: {
                                    value: 8,
                                    message: `Password needs a minimum of 8 characters`,
                                },
                            })}
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                        />
                        {!showPassword ? (
                            <HiEye
                                onClick={() => setShowPassword((show) => !show)}
                            />
                        ) : (
                            <HiEyeSlash
                                onClick={() => setShowPassword((show) => !show)}
                            />
                        )}
                    </>
                </FormRowPass>

                <FormRowVertical>
                    <Button size="large" disabled={isLoading}>
                        {!isLoading ? `Login` : <SpinnerMini />}
                    </Button>
                </FormRowVertical>
            </Form>
        </>
    );
}

export default LoginForm;
