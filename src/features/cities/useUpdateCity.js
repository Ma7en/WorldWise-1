import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCity as updateCityApi } from "../../services/apiCities";

export function useUpdateCity() {
    const queryClient = useQueryClient();

    const { mutate: updateCity, isLoading: isUpdating } = useMutation({
        mutationFn: ({ newCityData, id }) => updateCityApi(newCityData, id),
        onSuccess: () => {
            toast.success("City succesfully edited");
            queryClient.invalidateQueries({ queryKey: ["cities"] });
            // queryClient.invalidateQueries({ queryKey: ["citiess"] });
        },
        onError: (error) => toast.error(error.message),
    });

    return { isUpdating, updateCity };
}
