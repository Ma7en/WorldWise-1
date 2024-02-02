/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import { getCities } from "../../services/apiCities";

export function uesCities() {
    const {
        isLoading,
        data: cities,
        error,
    } = useQuery({
        queryKey: ["cities"],
        // queryKey: ["citiess"],
        queryFn: getCities,
    });

    return { isLoading, error, cities };
}
