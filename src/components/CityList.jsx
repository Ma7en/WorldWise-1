/* eslint-disable no-unused-vars */
import styles from "./CityList.module.css";

// import CityItem from "./CityItem";
// import Message from "./Message";
import { uesCities } from "../features/cities/useCities";
import Spinner from "../ui/spinner/Spinner";
import Message from "../ui/error/Message";

const CityList = () => {
    const { cities, isLoading } = uesCities();
    // console.log(`cities:- `, cities);
    if (isLoading) return <Spinner />;

    if (!cities.length)
        return (
            <Message message="add your first city by clicking on a city on the map" />
        );

    return (
        <>
            <ul className={styles.cityList}>
                {cities.map((city) => (
                    <CityItem city={city} key={city.id} />
                ))}
            </ul>
        </>
    );
};

export default CityList;
