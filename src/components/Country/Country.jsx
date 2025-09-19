import React from "react";
import "./Country.css";

const Country = ({ country }) => {
  console.log(country.area.area);

  return (
    <div className="country">
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

      {/* <h5>Languages : {country.languages.languages}</h5> */}

      {/* <h5>Currencies : {country.currencies}</h5> */}
    </div>
  );
};

export default Country;
