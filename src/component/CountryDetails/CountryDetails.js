import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
const {name} = useParams()
const [country,setCountry] = useState([])
    console.log(name)
    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/name/${name}`
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setCountry(data)
        })
    },[])
       console.log(country)

    return (
        <div>
            {name}s 
           Capital is: {
               country.map(ct=>ct.capital)
           }
        </div>
    );
};

export default CountryDetails;