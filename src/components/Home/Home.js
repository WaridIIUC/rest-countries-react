import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Home.css'

const Home = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>Countries: {countries.length}</h1>
            <div className="countries">
            {
                countries.map(country => <Country country={country} key={country.alpha3Code}></Country>)
            }
            </div>
        </div>
    );
};

export default Home;