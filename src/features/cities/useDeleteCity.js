import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCity as deleteCityApi } from "../../services/apiCities";

export function useDeleteCity() {
    const queryClient = useQueryClient();

    const { mutate: deleteCity, isLoading: isDeleting } = useMutation({
        mutationFn: deleteCityApi,
        onSuccess: () => {
            toast.success("City successfully deleted");

            queryClient.invalidateQueries({
                queryKey: ["cities"],
                // queryKey: ["citiess"],
            });
        },
        onError: (error) => toast.error(error.message),
    });
    return { isDeleting, deleteCity };
}
