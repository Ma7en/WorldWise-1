import { useForm } from "react-hook-form";

// import Button from "../../ui/Button";
// import Form from "../../ui/Form";
// import FormRow from "../../ui/FormRow";
// import Input from "../../ui/Input";

import { useUpdateUser } from "./useUpdateUser";
import Form from "../../ui/form/Form";
import FormRow from "../../ui/form/FormRow";
import Input from "../../ui/form/Input";
import Button from "../../ui/global/Button";
import FormRowPass from "../../ui/form/FormRowPass";
import { useState } from "react";
import { HiEye, HiEyeSlash } from "react-icons/hi2";
// import FormRowVertical from "../../ui/form/FormRowVertical";

function UpdatePasswordForm() {
    const { register, handleSubmit, formState, getValues, reset } = useForm();
    const { errors } = formState;
    const { updateUser, isUpdating } = useUpdateUser();
    const [showPassword, setShowPassword] = useState(false);

    function onSubmit({ password }) {
        updateUser(
            { password },
            {
                // onSuccess: reset
                onSuccess: () => {
                    reset();
                },
            },
        );
    }

    return (
        <Form type="updata" onSubmit={handleSubmit(onSubmit)}>
            <FormRowPass
                label="New Password (min 8 characters)"
                error={errors?.password?.message}
                // sign={sign}
            >
                <>
                    <Input
                        type={!showPassword ? "password" : "text"}
                        id="password"
                        autoComplete="current-password"
                        disabled={isUpdating}
                        {...register("password", {
                            required: "This field is required",
                            minLength: {
                                value: 8,
                                message:
                                    "Password needs a minimum of 8 characters",
                            },
                        })}
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

            <FormRowPass
                label="Confirm password"
                error={errors?.passwordConfirm?.message}
            >
                <Input
                    type={!showPassword ? "password" : "text"}
                    autoComplete="new-password"
                    id="passwordConfirm"
                    disabled={isUpdating}
                    {...register("passwordConfirm", {
                        required: "This field is required",
                        validate: (value) =>
                            getValues().password === value ||
                            "Passwords need to match",
                    })}
                />
            </FormRowPass>

            <FormRow>
                <Button onClick={reset} type="reset" variation="secondary">
                    Cancel
                </Button>

                <Button disabled={isUpdating}>Update password</Button>
            </FormRow>
        </Form>
    );
}

export default UpdatePasswordForm;
