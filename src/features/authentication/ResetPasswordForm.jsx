/* eslint-disable no-unused-vars */
// import { useState } from "react";

import { useState } from "react";
import { useResetPassword } from "./useResetPassword";
import Form from "../../ui/form/Form";
import FormRowVertical from "../../ui/form/FormRowVertical";
import Input from "../../ui/form/Input";
import Button from "../../ui/global/Button";
import SpinnerMini from "../../ui/spinner/SpinnerMini";
import { useForm } from "react-hook-form";
import { useUser } from "./useUser";

// import Form from "../../ui/Form";
// import FormRowVertical from "../../ui/FormRowVertical";
// import Input from "../../ui/Input";
// import Button from "../../ui/Button";
// import SpinnerMini from "../../ui/SpinnerMini";

// import { useResetPassword } from "./useResetPassword";

// Email regex: /\S+@\S+\.\S+/

function ResetPasswordForm() {
    // const { isLoading, user, isAuthenticated } = useUser();
    // console.log(`user:- `, user);
    // console.log(`islo:- `, isLoading);
    // console.log(`isAuthenticated:- `, isAuthenticated);

    const [email, setEmail] = useState("");
    const { resetPassword, isResetPassword } = useResetPassword();

    const { register, formState, reset, handleSubmit } = useForm();
    const { errors } = formState;

    function onSubmit({ email }) {
        // console.log(data);
        resetPassword(
            { email },
            {
                onSettled: () => reset(),
            },
        );
    }

    // function handleSubmit(e) {
    //     e.preventDefault();

    //     if (!email) return;

    //     resetPassword(
    //         { email },
    //         {
    //             onSettled: () => {
    //                 setEmail("");
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
                        autoComplete="email"
                        {...register("email", {
                            required: `This field is required`,
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: `Please Provide a valid email address`,
                            },
                        })}
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                        disabled={isResetPassword}
                    />
                </FormRowVertical>

                <FormRowVertical>
                    <Button size="large" disabled={isResetPassword}>
                        {!isResetPassword ? `Reset Password` : <SpinnerMini />}
                    </Button>
                </FormRowVertical>
            </Form>
        </>
    );
}

export default ResetPasswordForm;
