import styles from "./CountryList.module.css";

import CountryItem from "./CountryItem";

import Spinner from "../../ui/spinner/Spinner";
import Message from "../../ui/error/Message";
import { uesCities } from "./useCities";

const CountryList = () => {
    const { isLoading, cities } = uesCities();

    if (isLoading) return <Spinner />;

    if (!cities.length)
        return (
            <Message message="add your first city by clicking on a city on the map" />
        );

    const countries = cities.reduce((arr, city) => {
        if (!arr.map((el) => el.country).includes(city.country)) {
            return [...arr, { country: city.country, emoji: city.emoji }];
        } else {
            return arr;
        }
    }, []);

    return (
        <>
            <ul className={styles.countryList}>
                {countries.map((country) => (
                    <CountryItem country={country} key={country.country} />
                ))}
            </ul>
        </>
    );
};

export default CountryList;
