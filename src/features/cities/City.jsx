import styles from "./City.module.css";
import { useCity } from "./useCity";
import BackButton from "../../ui/global/BackButton";
import Spinner from "../../ui/spinner/Spinner";
import { flagEmojiApi, formatDateCity } from "../../utils/helpers";
// import { useParams } from "react-router-dom";
import Empty from "../../ui/error/Empty";
// import EditCityForm from "./EditCityForm";
// import CreateCityForm from "./CreateCityForm";

function City() {
    // const { cityId } = useParams();
    // console.log(`id`, cityId, useParams());
    const { isLoading, city } = useCity();
    // console.log(`city`, city);

    if (isLoading) return <Spinner />;
    if (!city) return <Empty resourceName="city" />;

    const { created_at, cityName, date, emoji, notes, country } = city;
    // const {
    //     id,
    //     currentCity,
    //     position,
    //     user_id,
    // } = city;

    if (isLoading) return <Spinner />;

    return (
        <>
            <div className={styles.city}>
                <div className={styles.row}>
                    <h6>City name</h6>
                    <h3>
                        <img src={flagEmojiApi(emoji)} alt={country} />
                        <span>{cityName}</span>
                    </h3>
                </div>

                <div className={styles.row}>
                    <h6>You went to {cityName} on</h6>
                    <p>{formatDateCity(date || created_at || null)}</p>
                </div>

                {notes && (
                    <div className={styles.row}>
                        <h6>Your notes</h6>
                        <p>{notes || `no notes`}</p>
                    </div>
                )}

                <div className={styles.row}>
                    <h6>Learn more</h6>
                    <a
                        href={`https://en.wikipedia.org/wiki/${cityName}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Check out {cityName} on Wikipedia &rarr;
                    </a>
                </div>

                <div>
                    <BackButton />
                </div>
            </div>
            {/* <EditCityForm cityToEdit={city} /> */}
        </>
    );
}

export default City;
