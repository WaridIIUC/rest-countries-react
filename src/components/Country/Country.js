import React from 'react';
import './Country.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Country = (props) => {
    const {name, alpha3Code, capital, flag} = props.country;
    return (
        <div className="country">
            <img src={flag} alt=""/>
            <h1>{name}</h1>
            <h4>Capital: {capital}</h4>
            <p>Code: {alpha3Code}</p>
            <Link to={`/country/${name}`}>About</Link>
        </div>
    );
};

export default Country;