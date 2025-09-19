import React from "react";
import "./Country.css"

const Country = ({ country }) => {
  console.log(country);

  return (
    <div className="country">
      <img src={country.flags.flags.png} alt="" />

      <h3>Name :{country.name.common}</h3>

      <h4>Capital : {country.capital.capital}</h4>

      <p>Population : {country.population.population}</p>

      <p>region : {country.region.region}</p>

      {/* <h5>Languages : {country.languages.languages}</h5> */}

      {/* <h5>Currencies : {country.currencies}</h5> */}
    </div>
  );
};

export default Country;
