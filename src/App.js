import React, { createContext, useState } from "react";

import AddCity from "./AddCity";
import CityList from "./CityList";

import "./App.css";

export const myContext = createContext({
    cities: [],
    addCity: (data) => {},
    showDetails: (index) => {},
    removeCity: (index) => {},
});

const Provider = myContext.Provider;

const App = () => {
    const [cities, setCities] = useState([]);

    const addCity = (data) => {
        const list = [...cities];
        if (list.length >= 5) {
            let len = list.length;
            list.splice(len - 1, len);
            setCities(() => [data, ...list]);
        } else {
            setCities((prev) => [data, ...prev]);
        }
    };

    const showDetails = (index) => {
        let list = [...cities];
        list = [
            list[index],
            ...list.slice(0, index),
            ...list.slice(index + 1, list.length),
        ];
        setCities([...list]);
    };
    const removeCity = (index) => {
        let list = [...cities];
        list = [...list.slice(0, index), ...list.slice(index + 1, list.length)];
        setCities([...list]);
    };

    return (
        <Provider
            value={{
                cities,
                addCity,
                showDetails,
                removeCity,
            }}>
            <AddCity />
            <CityList />
        </Provider>
    );
};

export default App;
