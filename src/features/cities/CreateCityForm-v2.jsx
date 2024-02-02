/* eslint-disable no-unused-vars */
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
// import { useUpdateCity } from "./useUpdateCity";
import { convertToEmoji } from "../../utils/helpers";
// import ReactDatePicker from "react-datepicker";

// export function convertToEmoji(countryCode) {
//     const codePoints = countryCode
//         .toUpperCase()
//         .split("")
//         .map((char) => 127397 + char.charCodeAt());
//     return String.fromCodePoint(...codePoints);
// }

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function CreateCityForm() {
    const [lat, lng] = useUrlPosition();
    const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
    const navigate = useNavigate();

    // const [cityName, setCityName] = useState("");
    const [country, setCountry] = useState("");
    // const [date, setDate] = useState(new Date());
    const [emoji, setEmoji] = useState("");
    const [position, setPosition] = useState({ lat, lng });
    const [geocodingError, setGeocodingError] = useState("");

    const { isCreating, createCity } = useCreateCity();
    // console.log(`id`, isCreating, country, position);
    // const { isUpdating, updateCity } = useUpdateCity();
    // const isWorking = isCreating || isUpdating;

    // const { id: editId, ...editValues } = cityToEdit;
    // const isEditSession = Boolean(editId);

    // const { register, handleSubmit, reset, getValues, formState, setValue } =
    // const { register, handleSubmit, reset, formState, setValue } = useForm({
    //     defaultValues: isEditSession ? editValues : {},
    // });
    const { handleSubmit, register, reset, setValue } = useForm({});
    // const { errors } = formState;

    // useEffect(() => {
    //     if (!lat && !lng) return;

    //     const fetchCityData = async () => {
    //         try {
    //             setIsLoadingGeocoding(true);
    //             setGeocodingError("");

    //             const response = await fetch(
    //                 `${BASE_URL}?latitude=${lat}&longitude=${lng}`,
    //             );
    //             const data = await response.json();
    //             console.log(`fetchCityData`, data.city);

    //             if (!data.countryCode)
    //                 throw new Error(
    //                     "that dosen't seem to be a city. click somewhare else 😉",
    //                 );

    //             setValue("cityName", data.city || data.locality || "");
    //             setValue("date", new Date());
    //             // setDate(new Date());

    //             // setCityName(data.city || data.locality || "");
    //             setCountry(data.countryName);
    //             setEmoji(convertToEmoji(data.countryCode));
    //             setPosition({ lat: data.latitude, lng: data.longitude });
    //         } catch (error) {
    //             setGeocodingError(error.message);
    //         } finally {
    //             setIsLoadingGeocoding(false);
    //         }
    //     };
    //     fetchCityData();
    // }, [lat, lng, setValue]);

    function onSubmit(data) {
        // console.log(`date:-create`, data);
        // createCity({ ...data });
        createCity(
            // { ...data },
            {
                ...data,
                // emoji: "ff",
                // country: "ff",
                // position: { lat: "d", lng: "d" },
            },
            {
                onSuccess: (data) => {
                    // console.log(`ex:- `, data);
                    reset();
                    navigate("/app/cities");
                },
            },
        );
    }

    function onError(errors) {
        console.log(errors);
    }

    // if (isLoadingGeocoding) return <Spinner />;
    // if (!lat && !lng) {
    //     return <Message message="start by clicking somewhere on the map" />;
    // }
    // if (geocodingError) return <Message message={geocodingError} />;

    return (
        <>
            <form
                // className={`${styles.form} ${isLoading ? styles.loading : ""}`}
                className={`${styles.form} `}
                // onSubmit={handleSubmitForm}
                onSubmit={handleSubmit(onSubmit, onError)}
                // type={onCloseModal ? "modal" : "regular"}
            >
                {/* <div className={styles.row}>
                    <label htmlFor="cityName">City name</label>
                    <input
                        type="text"
                        id="cityName"
                        {...register("cityName", {
                            required: "This field is required",
                        })}
                        // disabled={isWorking}
                    />
                    <span className={styles.flag}>{emoji}</span>
                    <span>{errors?.cityName?.message}</span>
                </div> */}

                {/* <div className={styles.row}>
                    <label htmlFor="date">When did you go to {cityName}?</label>

                    <ReactDatePicker
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
                    />
                </div> */}

                {/* <div className={styles.row}>
                    <label htmlFor="notes">
                        Notes about your trip to {cityName}
                    </label>
                    <textarea
                        id="notes"
                        // disabled={isWorking}
                        {...register("notes", {
                            required: "This field is required",
                        })}
                    />
                </div> */}

                {/* ========= */}
                <div className={styles.row}>
                    <label htmlFor="cityName">City name</label>
                    <input
                        type="text"
                        id="cityName"
                        {...register("cityName", {
                            required: "This field is required",
                        })}
                        // disabled={isWorking}
                    />
                    <span className={styles.flag}>{emoji}</span>
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
