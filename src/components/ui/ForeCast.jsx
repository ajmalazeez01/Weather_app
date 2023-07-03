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
    style={{ backgroundImage: `url(assets/images/joy-stamp-pGQbWXBC1dA-unsplash.jpg)`,
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       backgroundRepeat: 'no-repeat',
       
       
     }}
    className="  mt-8 mx-6 rounded-xl m-5">
      <div 
      className="backdrop-blur-2xl rounded-xl ">

      {data.list?.splice(0, 7).length === 0 ? (
        ""
      ) : (
        <p className="text-white  text-xl font-extrabold py-2 px-2">
          7 Days Forecast{" "}
        </p>
      )}
      <div className="  p-3 text-white font-extrabold grid md:grid-cols-4 text-center">
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
    </div>
  );
}

export default ForeCast;
