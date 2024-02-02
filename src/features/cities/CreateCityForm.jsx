/* eslint-disable react/prop-types */

// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import styles from "./Form.module.css";

import Message from "../../ui/error/Message";
import Spinner from "../../ui/spinner/Spinner";
import BackButton from "../../ui/global/BackButton";
import Button from "../../ui/global/Button";

import { useCreateCity } from "./useCreateCity";
import { useUrlPosition } from "../../hooks/useUrlPosition";
import { useUpdateCity } from "./useUpdateCity";
import { flagEmojiApi } from "../../utils/helpers";
import { useUser } from "../authentication/useUser";
import { App_Url, BASE_URL } from "../../utils/constants";

function CreateCityForm({ cityToEdit = {}, onCloseModal }) {
    const { user } = useUser();
    const { id: userId, email: userEmail } = user;
    const { isCreating, createCity } = useCreateCity();
    const { isUpdating, updateCity } = useUpdateCity();
    const [emoji, setEmoji] = useState("");

    // console.log(`cityto`, cityToEdit);

    const {
        cityName,
        country: countryCity,
        date: dateCity,
        emoji: emojiCity,
        position: positionCity,
    } = cityToEdit;
    // console.log(`c`, countryCity, positioncity, dateCity);
    // const [lat, lng] = useUrlPosition(positionCity?.lat, positionCity?.lng);
    const [lat, lng] = useUrlPosition({ ...positionCity });
    // console.log(`lat`, positionCity);
    // console.log(`d==========`, lat, lng);
    // console.log(`em`, emoji);
    // console.log(`em`, emojiCity);

    // console.log(`flag`, flagEmojiApi(emojiCity));

    const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
    const navigate = useNavigate();

    // const [cityName, setCityName] = useState("");
    const [country, setCountry] = useState("");
    const [date, setDate] = useState(new Date());
    // const [date, setDate] = useState();

    const [position, setPosition] = useState({ lat, lng });
    // console.log(`pos================`, position);
    const [geocodingError, setGeocodingError] = useState("");

    const isWorking = isCreating || isUpdating;

    const { id: editId, ...editValues } = cityToEdit;
    const isEditSession = Boolean(editId);
    // console.log(``, isEditSession);
    // console.log(`id`, editId, `cityto`, cityToEdit.id);

    // const { register, handleSubmit, reset, getValues, formState, setValue } =
    const { register, handleSubmit, reset, formState, setValue } = useForm({
        defaultValues: isEditSession ? editValues : {},
    });
    // eslint-disable-next-line no-unused-vars
    const { errors } = formState;
    // console.log(`e`, errors);

    // console.log(`ld`, lat, lng);
    useEffect(() => {
        if (!lat && !lng) return;

        const fetchCityData = async () => {
            try {
                setIsLoadingGeocoding(true);
                setGeocodingError("");

                const response = await fetch(
                    `${BASE_URL}?latitude=${lat}&longitude=${lng}`,
                );
                const data = await response.json();
                // console.log(`data=>==================`, data);

                if (!data.countryCode)
                    throw new Error(
                        "that dosen't seem to be a city. click somewhare else 😉",
                    );

                setValue(
                    "cityName",
                    cityName || data.city || data.locality || "",
                );

                setDate(dateCity);
                setCountry(countryCity);

                if (typeof date === "string") {
                    // إذا كان date سلسلة نصية، قم بتحويله إلى كائن Date
                    const dateObject = new Date(date);
                    setValue(
                        "date",
                        dateObject.toISOString().split("T")[0] ||
                            new Date().toISOString().split("T")[0],
                    );
                } else if (date instanceof Date) {
                    // إذا كان date من نوع Date بالفعل
                    setValue(
                        "date",
                        date.toISOString().split("T")[0] ||
                            new Date().toISOString().split("T")[0],
                    );
                } else if (date === undefined) {
                    // console.log(``);
                } else {
                    // إذا كان نوع date غير متوقع، قم بمعالجته بشكل مناسب
                    console.error("Unexpected type for date:", typeof date);
                }
                // setValue("date", new Date().toISOString().split("T")[0]);
                // setDate(new Date().toISOString().split("T")[0]);

                // setCityName(data.city || data.locality || "");
                setCountry(data.countryName);
                // setEmoji(convertToEmoji(data.countryCode));
                setEmoji(data.countryCode || emojiCity);
                // console.log(`country code:- `, data.countryCode);

                setPosition({ lat: data.latitude, lng: data.longitude });
            } catch (error) {
                setGeocodingError(error.message);
            } finally {
                setIsLoadingGeocoding(false);
            }
        };
        fetchCityData();
    }, [cityName, countryCity, date, dateCity, emojiCity, lat, lng, setValue]);

    function onSubmit(data) {
        console.log(`da-xxx`, data);
        if (isEditSession)
            updateCity(
                {
                    newCityData: {
                        ...data,
                        emoji: emojiCity,
                        country: countryCity,
                        position: positionCity,
                        user_id: userId,
                        email: userEmail,
                    },
                    id: editId,
                },
                {
                    // eslint-disable-next-line no-unused-vars
                    onSuccess: (data) => {
                        reset();
                        onCloseModal?.();
                        navigate(`/${App_Url}/cities`);
                    },
                },
            );
        else
            createCity(
                {
                    ...data,
                    emoji: emoji,
                    country: country,
                    position: position,
                    user_id: userId,
                    email: userEmail,
                },
                {
                    // eslint-disable-next-line no-unused-vars
                    onSuccess: (data) => {
                        reset();
                        onCloseModal?.();
                        navigate(`/${App_Url}/cities`);
                    },
                },
            );
    }

    function onError(errors) {
        console.log(errors);
    }

    if (isLoadingGeocoding) return <Spinner />;
    if (!position) {
        return <Message message="start by clicking somewhere on the map" />;
    }
    // if (!lat && !lng) {
    //     return <Message message="start by clicking somewhere on the map" />;
    // }
    if (geocodingError) return <Message message={geocodingError} />;

    // console.log(`fl`, emoji, "cy", emojiCity);
    return (
        <>
            <form
                // className={`${styles.form} ${isLoading ? styles.loading : ""}`}
                className={`${styles.form} `}
                // onSubmit={handleSubmitForm}
                onSubmit={handleSubmit(onSubmit, onError)}
                // type={onCloseModal ? "modal" : "regular"}
            >
                <div className={styles.row}>
                    <label htmlFor="cityName">City name</label>
                    <input
                        type="text"
                        id="cityName"
                        {...register("cityName", {
                            required: "This field is required",
                        })}
                        disabled={isWorking}
                    />
                    <span className={styles.flag}>
                        <img
                            src={flagEmojiApi(emojiCity || emoji)}
                            alt={country}
                        />
                    </span>
                </div>

                <div className={styles.row}>
                    <label htmlFor="date">When did you go to ?</label>
                    <input
                        type="date"
                        id="date"
                        {...register("date", {
                            required: "This field is required",
                        })}
                        disabled={isWorking}
                    />
                </div>

                <div className={styles.row}>
                    <label htmlFor="notes">Notes about your trip to</label>
                    <textarea
                        id="notes"
                        disabled={isWorking}
                        {...register("notes", {
                            required: "This field is required",
                        })}
                    />
                </div>

                <div className={styles.buttons}>
                    {/* <Button>Add</Button> */}
                    <Button disabled={isWorking}>
                        {isEditSession ? "Updata" : "Create"}
                    </Button>
                    <BackButton />
                </div>
            </form>
        </>
    );
}

export default CreateCityForm;
