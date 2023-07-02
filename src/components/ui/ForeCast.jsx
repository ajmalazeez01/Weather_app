

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
  const dayInAWeek = new Date().getDate();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  //   console.log(data.list.splice(0, 7).length )
  return (
    <div className=" bg-white mt-8 mx-6 rounded-xl">
      {data.list.splice(0, 7).length === 0 ? (
        ""
      ) : (
        <p className="text-black  text-xl font-extrabold py-2 px-2">
          7 Days Forecast{" "}
        </p>
      )}
      <div className="text-white grid grid-cols-4 text-center">
        {data.list.splice(0, 7).map((item, idx) => (
          <div
            key={idx}
            className="bg-slate-700 p-3.5 mx-3.5 my-3.5 flex flex-col items-center rounded-xl "
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
  );
}

export default ForeCast;
