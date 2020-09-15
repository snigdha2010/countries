import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [country , setCountry] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res =>res.json())
        .then(data => {
            const pickCountries = data.slice(0,15)
            setCountry(pickCountries)} )
             },[])
    console.log(country)
    return (
        <div>
           {
               country.map(country =><Country key={country.numericCode} country = {country }></Country>)
           }
        </div>
    );
};

export default Home;