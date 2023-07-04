import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../api/api";

function Search({ onSearchChange }) {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        const options = res.data.map((city) => ({
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        }));

        console.log(options);

        return { options: options };
      })
      .catch((err) => console.error(err));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange.handilOnSearchChange(searchData);
  };

  const styles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      maxWidth: "600px",
      minWidth: "600px",
      [`@media (max-width: 768px)`]: {
        maxWidth: "300px",
        minWidth: "300px",
      },
    }),
  };

  return (
    <div className="max-w-4xl w-4xl md:my-10">
      <AsyncPaginate
        placeholder="search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        styles={styles}
        className="mt-6"
        loadOptions={loadOptions}
      />
    </div>
  );
}

export default Search;
