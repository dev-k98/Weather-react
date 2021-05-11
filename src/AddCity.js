import axios from "axios";
import React, { useContext, useState } from "react";
import { myContext } from "./App";
import getCountryName from "./CountryConverter";

const AddCity = () => {
    const { addCity } = useContext(myContext);
    const [city, setCity] = useState("");
    const [err, setErr] = useState(false);

    const addCityData = (res) => {
        const data = {
            city: res.name,
            temperature: res.main.temp,
            country: getCountryName(res.sys.country),
            weather: res.weather[0].description,
            icon: res.weather[0].icon,
        };
        addCity(data);
        setErr(false);
    };

    const onCLickListener = (city) => {
        axios
            .get(
                `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0c712e338cabb3996a78ae788fa566a1`
            )
            .then((res) => addCityData(res.data))
            .catch((err) => setErr(true));
    };

    const onChangeListener = (e) => {
        setErr(false);
        setCity(e.target.value);
    };

    return (
        <>
            <h1 className="title">Enter City Name</h1>
            <div className="search">
                <input
                    value={city}
                    placeholder="Eg. Barcelona"
                    onChange={(e) => onChangeListener(e)}></input>
                <button onClick={() => onCLickListener(city)}></button>
            </div>
            <p className="function">Click on the city name to open it on map</p>
            {err && <span className="error">Not found</span>}
        </>
    );
};

export default AddCity;
