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
            console.log(data[0].currencies[0].name);
        })
    }, [])

    return (
        <div className="country">
            <h1>Country Details</h1>
            <img src={country.flag} alt=""/>
            <h1>{country.name}</h1>
            <p>{country.callingCodes}</p>
            <p>{country.capital}</p>
            <p>{country.region}</p>
            <p>{country.population}</p>
            {/* <p>{country.currencies[0].name}</p> */}
            {/* <p>{country && country?.altSpellings[1]}</p> */}
            

        </div>
    );
};

export default CountryDetails;