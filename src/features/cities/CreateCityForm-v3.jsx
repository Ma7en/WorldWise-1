/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useState, useEffect } from "react";
// import ReactDatePicker from "react-datepicker";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

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
import { convertToEmoji, flagEmojiApi } from "../../utils/helpers";
import { useUser } from "../authentication/useUser";
import { App_Url } from "../../utils/constants";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function CreateCityForm({ cityToEdit = {}, onCloseModal }) {
    const { user } = useUser();
    const { id: userId, email: userEmail } = user;

    const [lat, lng] = useUrlPosition();
    const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
    const navigate = useNavigate();

    const [cityName, setCityName] = useState("");
    const [country, setCountry] = useState("");
    const [date, setDate] = useState(new Date());
    // const [date, setDate] = useState();
    const [emoji, setEmoji] = useState("");
    const [position, setPosition] = useState({ lat, lng });
    const [geocodingError, setGeocodingError] = useState("");

    const { isCreating, createCity } = useCreateCity();
    const { isUpdating, updateCity } = useUpdateCity();
    const isWorking = isCreating || isUpdating;

    const { id: editId, ...editValues } = cityToEdit;
    const isEditSession = Boolean(editId);

    // const { register, handleSubmit, reset, getValues, formState, setValue } =
    const { register, handleSubmit, reset, formState, setValue } = useForm({
        defaultValues: isEditSession ? editValues : {},
    });
    const { errors } = formState;

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

                setValue("cityName", data.city || data.locality || "");
                setValue("date", new Date().toISOString().split("T")[0]);
                setDate(new Date().toISOString().split("T")[0]);

                setCityName(data.city || data.locality || "");
                setCountry(data.countryName);
                // setEmoji(convertToEmoji(data.countryCode));
                setEmoji(data.countryCode);
                // console.log(`country code:- `, data.countryCode);

                setPosition({ lat: data.latitude, lng: data.longitude });
            } catch (error) {
                setGeocodingError(error.message);
            } finally {
                setIsLoadingGeocoding(false);
            }
        };
        fetchCityData();
    }, [lat, lng, setValue]);

    function onSubmit(data) {
        // console.log(`da-xxx`, data);
        if (isEditSession)
            updateCity(
                {
                    newCityData: {
                        ...data,
                        emoji: emoji,
                        country: country,
                        position: position,
                        user_id: userId,
                        email: userEmail,
                    },
                    id: editId,
                },
                {
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
                    onSuccess: (data) => {
                        // console.log(`ex:- `, data);
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
    if (!lat && !lng) {
        return <Message message="start by clicking somewhere on the map" />;
    }
    if (geocodingError) return <Message message={geocodingError} />;

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
                        {/* {emoji} */}
                        <img src={flagEmojiApi(emoji)} alt={country} />
                    </span>
                    {/* <span>{errors?.cityName?.message}</span> */}
                </div>

                <div className={styles.row}>
                    <label htmlFor="date">When did you go to {cityName}?</label>

                    {/* <ReactDatePicker */}
                    {/* <DatePicker
                        id="date"
                        name="date"
                        selected={date}
                        onChange={(date) => {
                            setDate(date);
                            setValue("date", date);
                        }}
                        {...register("date", {
                            required: "This field is required",
                        })}
                        dateFormat="yyyy/MM/dd"
                        // disabled={isWorking}
                        // disabled={true}
                    /> */}
                    <input
                        type="date"
                        id="date"
                        // value={date}
                        // onChange={(e) => setDate(e.target.value)}
                        // value={
                        //     date instanceof Date
                        //         ? date.toISOString().split("T")[0]
                        //         : ""
                        // }
                        {...register("date", {
                            required: "This field is required",
                        })}
                        disabled={isWorking}
                    />
                </div>

                <div className={styles.row}>
                    <label htmlFor="notes">
                        Notes about your trip to {cityName}
                    </label>
                    <textarea
                        id="notes"
                        disabled={isWorking}
                        {...register("notes", {
                            required: "This field is required",
                        })}
                    />
                </div>

                <div className={styles.buttons}>
                    <Button>Add</Button>
                    <BackButton />
                </div>
            </form>

            {/* <input
                    id="date"
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                /> */}
        </>
    );
}

export default CreateCityForm;
