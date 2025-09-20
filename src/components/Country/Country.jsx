import React, { useState } from "react";
import "./Country.css";

const Country = ({ country,handleVisitedCountries }) => {
  //   console.log(country.area.area);

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {

    // ---fixed---
    // setVisited(true);

    // ---by if else for changing btn operation---

    // if(visited){
    //     setVisited(false)
    // }
    // else{
    //     setVisited(true)
    // }

    // ----by ternary operator--

    // setVisited(visited? false : true)

    // ---shortcut way---

    setVisited(!visited)

    // ---lift up state function call--
    handleVisitedCountries(country);
  };

  return (

    // -----one way to apply css by conditional rendering--
    // <div className={`country ${visited? 'country-visited' : 'country-not-visited'}`}>

    // ---another way to apply conditional rendering----

    <div className={`country ${visited && 'country-visited'}`}>
      <img src={country.flags.flags.png} alt="" />

      <h3>Name :{country.name.common}</h3>

      <h4>Capital : {country.capital.capital}</h4>

      <p>Population : {country.population.population}</p>

      <p>region : {country.region.region}</p>

      <p>
        Area : {country.area.area} and
        {country.area.area === 147570
          ? "This is Bangladesh"
          : country.area.area > 147570
          ? "Bigger then Bangladesh"
          : "Smaller then Bangladesh"}
      </p>

      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>

      {/* <h5>Languages : {country.languages.languages}</h5> */}

      {/* <h5>Currencies : {country.currencies}</h5> */}
    </div>
  );
};

export default Country;
