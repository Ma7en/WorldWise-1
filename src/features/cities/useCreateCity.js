import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createCity as createCityApi } from "../../services/apiCities";

export function useCreateCity() {
    const queryClient = useQueryClient();

    const { mutate: createCity, isLoading: isCreating } = useMutation({
        mutationFn: createCityApi,
        onSuccess: () => {
            toast.success("New City Succesfully Created");
            queryClient.invalidateQueries({ queryKey: ["cities"] });
        },
        onError: (error) => toast.error(error.message),
    });

    return { isCreating, createCity };
}
