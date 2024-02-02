/* eslint-disable react/prop-types */

import { flagEmojiApi } from "../../utils/helpers";
import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
    const { country: countryItem, emoji } = country;

    return (
        <>
            <li className={styles.countryItem}>
                {/* <span>{emoji}</span> */}
                <img src={flagEmojiApi(emoji)} alt={countryItem} />
                <span>{countryItem}</span>
            </li>
        </>
    );
}

export default CountryItem;
