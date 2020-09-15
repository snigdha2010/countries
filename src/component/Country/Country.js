import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Country = (props) => {
    const {name ,numericCode}=props.country
    const history = useHistory();
    const handleButton = ()=>{
        history.push(`/countries/${name}`)
    }
    return (
        <div>
            <div>
                <Link to ={`/countries/${name}`}><h2>{name}</h2>
                </Link>
             
                <button onClick ={handleButton} >country details</button>
                
                </div>   
        </div>
    );
};


export default Country;