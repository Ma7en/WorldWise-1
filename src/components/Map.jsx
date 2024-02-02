/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Navigate, useNavigate } from "react-router-dom";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMapEvents,
    useMap,
} from "react-leaflet";
import { useEffect, useState } from "react";

import styles from "./Map.module.css";

// import { useCities } from "../contexts/CitiesContext";
import { useGeolocation } from "../hooks/useGeolocation";
import { useUrlPosition } from "../hooks/useUrlPosition";
import { uesCities } from "../features/cities/useCities";

import Button from "./Button";
import { flagEmojiApi } from "../utils/helpers";
import { App_Url } from "../utils/constants";

const Map = () => {
    const { isLoading, cities } = uesCities();
    // console.log(`==================`, cities);
    const [mapPosition, setMapPosition] = useState([
        // 38.727881642324164, -9.140900099907554,
        40, 0,
        // 29.129314532211584, 30.587975269925604,
    ]);
    // console.log(`is`, isLoading);

    // const [searchParams, setSearchParams] = useSearchParams();
    // const mapLat = searchParams.get("lat");
    // const mapLng = searchParams.get("lng");

    // const { cities } = useCities();
    // console.log(`d:- `, isLoading, error);

    const {
        isLoading: isLoadingPosition,
        position: geolocationPosition,
        getPosition,
    } = useGeolocation();
    const [mapLat, mapLng] = useUrlPosition();

    useEffect(
        function () {
            if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
        },
        [mapLat, mapLng],
    );

    useEffect(
        function () {
            if (geolocationPosition)
                setMapPosition([
                    geolocationPosition.lat,
                    geolocationPosition.lng,
                ]);
        },
        [geolocationPosition],
    );

    return (
        <>
            <div
                className={styles.mapContainer}
                // onClick={() => Navigate("form")}
            >
                {!geolocationPosition && (
                    <Button type="position" onClick={getPosition}>
                        {isLoadingPosition
                            ? "Loading..."
                            : "User Your position"}
                    </Button>
                )}

                <MapContainer
                    center={mapPosition}
                    // center={[mapLat, mapLng]}
                    zoom={5}
                    scrollWheelZoom={true}
                    className={styles.map}
                >
                    <TileLayer
                        attribtion='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreeMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                    />

                    {cities?.map((city) => (
                        <Marker
                            position={[
                                city?.position?.lat,
                                city?.position?.lng,
                            ]}
                            key={city.id}
                        >
                            <Popup>
                                {/* <span>{city.emoji}</span> */}
                                <img
                                    src={flagEmojiApi(city.emoji)}
                                    alt={city.country}
                                />
                                <span>{city.cityName}</span>
                            </Popup>
                        </Marker>
                    ))}

                    <ChangeCenter position={mapPosition} />

                    <DetectClick />
                </MapContainer>
            </div>
        </>
    );
};

function ChangeCenter({ position }) {
    const map = useMap();
    map.setView(position);
    return null;
}

function DetectClick() {
    const navigate = useNavigate();
    useMapEvents({
        click: (e) => {
            // console.log(e);
            navigate(`${App_Url}/form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
        },
    });
}

export default Map;
