/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import { resetPassword as resetPasswordApi } from "../../services/apiAuth";
// import { App_Url } from "../../utils/constants";

export function useResetPassword() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate: resetPassword, isResetPassword } = useMutation({
        mutationFn: (email) => resetPasswordApi(email),
        onSuccess: (user) => {
            // console.log(user);
            queryClient.setQueryData(["user"], user.user);
            toast.success(
                `Reset Password successfully! please verufy account from the user's emil address.`,
            );
            navigate("/app/account", { replace: true });
        },
        onError: (error) => {
            console.error(error);
            toast.error(`Provided email is incorrect`);
        },
    });
    return { resetPassword, isResetPassword };
}
