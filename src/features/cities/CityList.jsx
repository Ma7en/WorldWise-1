import Message from "../../ui/error/Message";
import Menus from "../../ui/modal/Menus";
import Spinner from "../../ui/spinner/Spinner";
import CityItem from "./CityItem";
import styles from "./CityList.module.css";

import { uesCities } from "./useCities";

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
            <Menus>
                <ul className={styles.cityList}>
                    {cities.map((city) => (
                        <CityItem city={city} key={city.id} />
                    ))}
                </ul>
            </Menus>
        </>
    );
};

export default CityList;
