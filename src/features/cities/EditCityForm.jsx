/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import styles from "./Form.module.css";

import { useUpdateCity } from "./useUpdateCity";
import { flagEmojiApi } from "../../utils/helpers";
import { App_Url } from "../../utils/constants";
import { useCity } from "./useCity";

import BackButton from "../../ui/global/BackButton";
import Button from "../../ui/global/Button";
import Spinner from "../../ui/spinner/Spinner";
import Empty from "../../ui/error/Empty";
import styled from "styled-components";

// Move these outside any conditional statements

const StyledInput = styled.input`
    width: 100%;
    padding: 0.8rem 1.2rem;
    font-family: inherit;
    font-size: 1.6rem;
    border: none;
    border-radius: 5px;
    background-color: var(--color-light--3);
    transition: all 0.2s;
`;

const StyledTextarea = styled.textarea`
    width: 100%;
    padding: 0.8rem 1.2rem;
    font-family: inherit;
    font-size: 1.6rem;
    border: none;
    border-radius: 5px;
    background-color: var(--color-light--3);
    transition: all 0.2s;

    border: 1px solid var(--color-grey-300);
    background-color: var(--color-grey-0);
`;

function EditCityForm({ cityToEdit }) {
    // console.log(`cityto=>`, cityToEdit);
    const { isUpdating, updateCity } = useUpdateCity();
    const navigate = useNavigate();
    // const { isLoading, city } = useCity();
    const {
        cityName,
        country,
        date,
        emoji,
        notes,
        position,
        email,
        user_id,
        id: editId,
    } = cityToEdit;

    const { register, handleSubmit, reset, formState, setValue } = useForm({});
    const { errors } = formState;
    console.log(`errors`, errors);

    useEffect(() => {
        const editCityData = async () => {
            try {
                setValue("cityName", cityName || "");
                if (date === undefined) {
                    console.log(``);
                } else if (typeof date === "string") {
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
                } else {
                    // إذا كان نوع date غير متوقع، قم بمعالجته بشكل مناسب
                    console.error("Unexpected type for date:", typeof date);
                }
                setValue("notes", notes || "");
            } catch (error) {
                console.error(error);
            }
        };
        editCityData();
    }, [cityName, date, notes, setValue]);

    function onSubmit(data) {
        // console.log(`data:::`, data);
        updateCity(
            {
                newCityData: {
                    ...data,
                    emoji: emoji,
                    country: country,
                    position: position,
                    user_id: user_id,
                    email: email,
                },
                id: editId,
            },
            {
                // eslint-disable-next-line no-unused-vars
                onSuccess: (data) => {
                    reset();
                    navigate(`/${App_Url}/cities`);
                },
            },
        );
    }

    function onError(errors) {
        console.log(errors);
    }

    // if (isLoading) return <Spinner />;
    if (!cityToEdit) return <Empty resourceName="city" />;
    // if (isLoadingGeocoding) return <Spinner />;
    // if (!lat && !lng) {
    //     return <Message message="start by clicking somewhere on the map" />;
    // }
    // if (geocodingError) return <Message message={geocodingError} />;

    return (
        <>
            <form
                className={`${styles.form} `}
                onSubmit={handleSubmit(onSubmit, onError)}
            >
                <div className={styles.row}>
                    <label htmlFor="cityName">City name</label>
                    <input
                        className={styles.input}
                        type="text"
                        id="cityName"
                        {...register("cityName", {
                            required: "This field is required",
                        })}
                        disabled={isUpdating}
                    />
                    <span className={styles.flag}>
                        <img src={flagEmojiApi(emoji)} alt={country} />
                    </span>
                </div>
                <div className={styles.row}>
                    <label htmlFor="date">When did you go to {cityName}?</label>
                    <input
                        className={styles.input}
                        type="date"
                        id="date"
                        {...register("date", {
                            required: "This field is required",
                        })}
                        disabled={isUpdating}
                    />
                </div>
                <div className={styles.row}>
                    <label htmlFor="notes">
                        Notes about your trip to {cityName}
                    </label>
                    <textarea
                        className={styles.input}
                        id="notes"
                        {...register("notes", {
                            required: "This field is required",
                        })}
                        disabled={isUpdating}
                    />
                </div>
                <div className={styles.buttons}>
                    <Button>Updata</Button>
                    <BackButton />
                </div>
            </form>
        </>
    );
}

export default EditCityForm;
