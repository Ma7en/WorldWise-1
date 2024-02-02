import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getCity } from "../../services/apiCities";

export function useCity() {
    const { cityId } = useParams();

    const {
        isLoading,
        data: city,
        error,
    } = useQuery({
        queryKey: ["city", cityId],
        queryFn: () => getCity(cityId),
        retry: false,
    });

    return { isLoading, error, city };
}
