import React, { useEffect, useState } from "react";
import { GEO_API_URL, geoApiOptions } from "../api/api";

function LocationSelect({ selectLocation, toggler, setToggler, search }) {
  const [permissionDenied, setPermissionDenied] = useState(false);
  console.log(navigator.geolocation);
/* eslint-disable */

useEffect(() => {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          return fetch(
            `${GEO_API_URL}/locations/${lat}+${lon}/nearbyCities?limit=1&minPopulation=100000&radius=100`,
            geoApiOptions
          )
            .then((res) => res.json())
            .then((res) => {
              console.log(res);

              const options = res.data.map((city) => ({
                value: `${city.latitude} ${city.longitude}`,
                label: `${city.name}, ${city.countryCode}`,
              }));

              setPermissionDenied(false);
              setToggler(false);

              selectLocation.handilOnSearchChange(options[0]);
            })
            .catch((err) => console.error(err));
        },
        function (error) {
          console.log(error.message);
          if (error.code === error.PERMISSION_DENIED) {
            setToggler(false);
            setPermissionDenied(true);
          } else {
            setPermissionDenied(true);
            alert("Error occurred while retrieving location.");
          }
        }
      );
    } else {
      setPermissionDenied(true);
      alert("Geolocation is not supported by this browser.");
    }
  }, [toggler]);
  /* eslint-enable */

  return (
    <div
      style={{
        backgroundImage: `url(assets/images/joy-stamp-pGQbWXBC1dA-unsplash.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="  rounded-3xl flex justify-center items-center w-2/4"
    >
      {permissionDenied && !search && (
        <div className=" backdrop-blur-lg w-full rounded-3xl    p-5 flex flex-col justify-center items-center   h-80 self-center ">
          <img
            src="assets/images/map-location.png"
            alt="GIF"
            className="w-24 md:w-28"
          />
          <p className=" text-white font-extrabold text-xl md:text-3xl py-3">
            Detecting your location
          </p>
          <p className=" text-white text-center font-medium text-sm md:text-xl md:break-keep ">
            Your current location will be displayed on the App & using for
            calculating Real time weather
          </p>
        </div>
      )}
    </div>
  );
}

export default LocationSelect;
