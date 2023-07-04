import React from "react";

function ForeCast({ data }) {
  const WEEK_DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <div
      style={{
        backgroundImage: `url(assets/images/joy-stamp-pGQbWXBC1dA-unsplash.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className=" my-5  w-11/12 mx-auto  rounded-xl "
    >
      {data.list?.splice(0, 7).length === 0 ? (
        <div className="hidden"></div>
      ) : (
        <div className="backdrop-blur-2xl rounded-xl ">
          <p className="text-white  text-xl font-extrabold py-5 px-5">
            7 Days Forecast
          </p>

          <div className="  p-3 text-white font-extrabold grid md:grid-cols-7 text-center">
            {data?.list?.splice(0, 7).map((item, idx) => (
              <div
                key={idx}
                className=" border backdrop-blur-none  p-3.5 mx-3.5 my-3.5 flex flex-col items-center rounded-xl "
              >
                <img
                  src={`assets/images/${item.weather[0].icon}.png`}
                  alt="weather"
                />
                <label>{forecastDays[idx]}</label>
                <label>{item.weather[0].description}</label>
                <label>{Math.round(item.main.temp_min)}&#176;C</label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ForeCast;
