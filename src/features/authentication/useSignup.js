/* eslint-disable no-unused-vars */
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { signup as signupApi } from "../../services/apiAuth";

export function useSignup() {
    const navigate = useNavigate();

    const { mutate: signup, isLoading } = useMutation({
        mutationFn: signupApi,
        onSuccess: (user) => {
            // console.log(user);
            toast.success(
                `Account successfully created! please verufy the new account from the user's emil address.`,
            );
            navigate("/app", { replace: true });
        },
    });
    return { signup, isLoading };
}
