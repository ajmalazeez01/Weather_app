import React, { useState } from "react";
import Search from "../../components/ui/Search";
import CurrentWether from "../../components/ui/CurrentWether";
import { WETHER_API_URL, WETHER_API_KEY } from "../../components/api/api";
import ForeCast from "../../components/ui/ForeCast";

function WetherrAppPages() {
const [currentWether,setCurrentWether] = useState(null)
const [forecast,setForecast] = useState(null)


  const handilOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const currentWetherFetch = fetch(
      `${WETHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WETHER_API_KEY}&units=metric `
    );

    const forecastFetch = fetch(
      `${WETHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WETHER_API_KEY}&units=metric `
    );

    Promise.all([currentWetherFetch, forecastFetch]).then(async (responce) => {
      const wetherResponce = await responce[0].json();
      const forcastResponce = await responce[1].json();
      setCurrentWether({city: searchData.label, ...wetherResponce})
      setForecast({city: searchData.label, ...forcastResponce})
    })
    .catch((err)=>{
      console.log(err)
    })
  };
  console.log(currentWether)
  console.log(forecast)
  return (
    <div className="flex flex-col items-center w-full min-h-screen ">
      <Search onSearchChange={{ handilOnSearchChange }} />
      <div className="grid md:grid-cols-2 w-full">
        <div className="w-full">
     {currentWether && <CurrentWether data={currentWether} />} 
        </div>
        <div className="w-full ">
     {forecast && <ForeCast data={forecast}/>}
        </div>
      </div>
     </div>
  );
}

export default WetherrAppPages;
