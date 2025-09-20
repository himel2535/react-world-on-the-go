import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);

  const countries = countriesData.countries;

  const [visitedCountries, setVisitedCountries] = useState([]);

  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedFlag = (country) => {
    const newVisitedFlags = [...visitedFlags, country];
    setVisitedFlags(newVisitedFlags);
    console.log("new :",country)
  };

  const handleVisitedCountries = (country) => {
    // console.log(country)
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  return (
    <div>
      <h1>In the countries : {countries.length}</h1>
      <h3>Total Country Visited:{visitedCountries.length}</h3>

      <ol>
        {visitedCountries.map((country) => (
          <li key={country.cca3.cca3}>{country.name.common}</li>
        ))}
      </ol>

      <div className="flags">
        {visitedFlags.map((flag,index) => (
          <img key={index} src={flag.flags.flags.png}></img>
        ))}
      </div>

      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
