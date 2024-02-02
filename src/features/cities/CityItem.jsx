/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { HiEye, HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { Link, NavLink, useNavigate } from "react-router-dom";

import styles from "./CityItem.module.css";

// import Menus from "../../ui/modal/Menus";
// import Modal from "../../ui/modal/Modal";
// import ConfirmDelete from "../../ui/modal/ConfirmDelete";
// import CreateCityForm from "./CreateCityForm";

import Modal from "../../ui/modal/Modal";
import Menus from "../../ui/modal/Menus";
import CreateCityForm from "./CreateCityForm";
import ConfirmDelete from "../../ui/modal/ConfirmDelete";
import Button from "../../ui/global/Button";

import { useCreateCity } from "./useCreateCity";
import { useDeleteCity } from "./useDeleteCity";
import { flagEmojiApi, formatDate } from "../../utils/helpers";
import { useUser } from "../authentication/useUser";
import { App_Url } from "../../utils/constants";
import EditCityForm from "./EditCityForm";

function CityItem({ city }) {
    // console.log(`city`, city);
    // const { currentCity, deleteCity } = useCities();

    const navigate = useNavigate();

    const { user } = useUser();
    const { id: userId, email: userEmail } = user;

    const { isCreating, createCity } = useCreateCity();
    const { isDeleting, deleteCity } = useDeleteCity();
    const {
        id: cityId,
        created_at,
        date,
        cityName,
        country,
        emoji,
        notes,
        position,
    } = city;
    // console.log(``, created_at, country, notes);

    function handleDetails() {
        // e.preventDefault();
        navigate(`${cityId}`);
    }

    // function handleDelete(e) {
    //     e.preventDefault();
    //     deleteCity(cityId);
    // }

    // const FR = "🇯🇴";
    // console.log(`code`, isonToEmoji(FR));
    // console.log(`city`, city);

    // console.log(``, isonToEmoji("ُEG"));

    // const [countryCode, setCountryCode] = useState(
    //     // `https://flagcdn.com/16x12/eg.webp`,
    //     `https://flagcdn.com/16x12/${emoji}.webp`,
    // );
    // const Code = emoji;
    // const countryCode = `https://flagcdn.com/16x12/${emoji}.webp`.toLowerCase();
    // console.log(`xxx`, countryCode);

    // console.log(`flagEmoji:- `, flagEmojiApi(emoji));

    function handleDeuplicate() {
        // e.preventDefault();

        createCity({
            cityName: `Capy of ${cityName}`,
            date,
            country,
            emoji,
            notes,
            position,
            user_id: userId,
            email: userEmail,
        });
    }

    // function handleEdit(e) {
    //     e.preventDefault();
    //     // navigate(`${App_Url}/form/${cityId}`);
    //     // window.history.pushState(null, null, `${App_Url}/form/${cityId}`);
    //     // window.history.pushState();
    //     // const location = location();
    //     const url = new URL(location).origin;
    //     console.log(`url`, url);
    //     history.pushState({}, "", `${url}/${App_Url}/form/${cityId}`);
    //     // navigate(`${url}/form/${cityId}`);
    //     // console.log(`location`, location);
    //     // url.searchParams.set("foo", "bar");
    //     // url.pathname.set(`form/${cityId}`);
    //     // history.pushState({}, "", url);
    // }

    function handleEdit(e) {
        e.preventDefault();
        navigate(`edit/${cityId}`);
    }

    return (
        <>
            <li className={`${styles.cityItem}`}>
                {/* <Link
                    // className={`${styles.cityItem} ${
                    //     id === currentCity.id ? styles["cityItem--active"] : ""
                    // }`}
                    className={`${styles.cityItem}`}
                    // to={`${cityId}?lat=${position.lat}&lng=${position.lng}`}
                    to={`${cityId}`}
                > */}
                <img src={flagEmojiApi(emoji)} alt={country} />

                <h3 className={styles.name}>{cityName}</h3>
                <time className={styles.date}>
                    ({formatDate(date || created_at)})
                </time>

                {/* <button className={styles.deleteBtn} onClick={handleDetails}>
                    <HiEye />
                </button>

                <button className={styles.deleteBtn} onClick={handleDelete}>
                    &times;
                </button>

                <button
                    className={styles.deleteBtn}
                    onClick={handleDeuplicate}
                    disabled={isCreating}
                >
                    <HiSquare2Stack />
                </button> */}

                <Modal>
                    <Menus.Menu>
                        <Menus.Toggle id={cityId} />
                        <Menus.List id={cityId}>
                            <Menus.Button
                                icon={<HiEye />}
                                onClick={handleDetails}
                                disabled={isCreating}
                            >
                                Details
                            </Menus.Button>

                            <Menus.Button
                                icon={<HiSquare2Stack />}
                                onClick={handleDeuplicate}
                                disabled={isCreating}
                            >
                                Duplicating
                            </Menus.Button>

                            <Modal.Open opens="edit">
                                <Menus.Button icon={<HiPencil />}>
                                    Edit
                                </Menus.Button>
                            </Modal.Open>

                            <Modal.Open opens="delete">
                                <Menus.Button icon={<HiTrash />}>
                                    Delete
                                </Menus.Button>
                            </Modal.Open>
                        </Menus.List>

                        <Modal.Window name="edit">
                            <CreateCityForm cityToEdit={city} />
                        </Modal.Window>

                        <Modal.Window name="delete">
                            <ConfirmDelete
                                resourceName="City"
                                disabled={isDeleting}
                                onConfirm={() => deleteCity(cityId)}
                            />
                        </Modal.Window>
                    </Menus.Menu>
                </Modal>

                {/* <button className={styles.deleteBtn} onClick={handleEdit}>
                    <HiPencil />
                </button> */}
                {/* <button className={styles.deleteBtn} onClick={handleEdit}>
                    <HiPencil />
                </button> */}

                {/* <NavLink to={<CreateCityForm cityToEdit={city} />}>
                        <HiPencil />
                    </NavLink> */}
                {/* <NavLink to={`form/${cityId}`}>
                        <HiPencil />
                    </NavLink> */}

                {/* <button className={styles.deleteBtn}>&times;</button> */}
                {/* </Link> */}

                {/* <div>
                    <Modal>
                        <Menus.Menu>
                            <Menus.Toggle id={cityId} />
                            <Menus.List id={cityId}>
                                <Menus.Button
                                    icon={<HiSquare2Stack />}
                                    onClick={handleDeuplicate}
                                    disabled={isCreating}
                                >
                                    Duplicating
                                </Menus.Button>

                                <Modal.Open opens="edit">
                                    <Menus.Button icon={<HiPencil />}>
                                        Edit
                                    </Menus.Button>
                                </Modal.Open>

                                <Modal.Open opens="delete">
                                    <Menus.Button icon={<HiTrash />}>
                                        Delete
                                    </Menus.Button>
                                </Modal.Open>
                            </Menus.List>

                            <Modal.Window name="edit">
                                <CreateCityForm cityToEdit={city} />
                            </Modal.Window>

                            <Modal.Window name="delete">
                                <ConfirmDelete
                                    resourceName="City"
                                    disabled={isDeleting}
                                    onConfirm={() => deleteCity(cityId)}
                                />
                            </Modal.Window>
                        </Menus.Menu>
                    </Modal>
                </div> */}
            </li>
        </>
    );
}

export default CityItem;
