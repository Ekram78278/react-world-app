import React, { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountries,handleVisitedFlag}) => {
    const [visited, setVisited]= useState(false)
    
    const handleVisited = () => {
        if(visited){
            setVisited(false)
        } else {
            setVisited(true)
        }
        handleVisitedCountries(country)
        handleVisitedFlag(country)
    }
    
    


    return (
        <div className={`country ${visited && 'country-visited'}`} >
            <img src={country.flags.flags.png} alt={country.flags.flags.png} />
            <h3> 
                Name: {country.name.common} 
            </h3>
            <p>Population: {country.population.population}</p>
                <p>Area: {country.area.area} 
                    {
                        country.area.area> 300000 ? "Big Country" : "Small Country"
                    }
                </p>
                <button onClick={handleVisited} >
                    {
                        visited ? 'Visited' : 'Not visited'
                    }
                </button>

                <button onClick={handleVisited} >Add visited flag</button>
        </div>
    );
};

export default Country;