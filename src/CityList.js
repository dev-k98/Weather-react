import React, { useContext } from "react";
import { myContext } from "./App";
import img from "./thermostat_black_24dp.svg";

const temp = (temp) => Math.round(temp - 273.15);

const CityList = () => {
    const { cities, showDetails, removeCity } = useContext(myContext);

    const openMap = (city, country) => {
        console.log(city);
        window.open(
            `https://www.google.com/maps/place/${city},+${country}`,
            "_blank"
        );
    };

    return (
        <div className="weather-cont">
            {cities.map((item, index) => {
                return index !== 0 ? (
                    <div key={index} className="inner-cont">
                        <span onClick={() => showDetails(index)}>
                            {item.city}
                        </span>
                        <button
                            className="remove"
                            onClick={() => removeCity(index)}></button>
                    </div>
                ) : (
                    <div key={index} className="display-cont">
                        <div className="init-details">
                            <div
                                className="name"
                                onClick={() =>
                                    openMap(item.city, item.country)
                                }>
                                <h1>{item.city}</h1>
                                <span>{item.country}</span>
                            </div>
                            <div className="weather">
                                <img
                                    src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}
                                    alt="icon"></img>
                                <span>{item.weather}</span>
                            </div>
                        </div>
                        <div className="other-details">
                            <img src={img} alt="thermo" />
                            <label>{temp(item.temperature)} C</label>
                        </div>
                        <button
                            className="remove-main"
                            onClick={() => removeCity(index)}></button>
                    </div>
                );
            })}
        </div>
    );
};

export default CityList;
