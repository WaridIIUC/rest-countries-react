import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetails = () => {

    const {countryName} = useParams();
    const [country, setCountry] = useState({});
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setCountry(data[0]);
            //console.log(data[0].currencies[0].name);
        })
    }, [])

    return (
        <div className="country">
            <h1>Country Details by country name</h1>
            <img src={country.flag} alt=""/>
            <h1>{country.name}</h1>
            <p>Calling Code: {country.callingCodes}</p>
            <p>Country Capital: {country.capital}</p>
            <p>Country Region: {country.region}</p>
            <p>Country Population: {country.population}</p>
            <p>Currencies: {country.currencies && country.currencies[0].name}</p>
            <p>Constitutional name: {country.altSpellings && country.altSpellings[1]}</p>
            <p>Languages: {country.languages && country.languages[0].name}</p>

        </div>
    );
};

export default CountryDetails;